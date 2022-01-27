const res = require('express/lib/response');
const formidable = require('formidable');
const mongoose = require('mongoose');
const Credentials = require('../models/filecred');
const crypto = require('crypto');

let credentialfile = {
    name:'',
    validity:0,
    interval:0,
}

const upload = async (req,res) => {
    const folder = "F:\\LightLoad\\uploads"
    const form = formidable({ uploadDir: folder, maxFileSize:200 * 1024 * 1024,keepExtensions:true});
    
    try{

        form.on('progress',(bytesReceived,bytesExpected) => {
            let a = (bytesReceived/bytesExpected)*100;
            // console.log(a.toFixed(0)+'%');

        }).on('file', (formname,file) => {
            credentialfile.name = file.newFilename;

        }).on('field',(name,value) => {
            if(name == 'validity') credentialfile.validity = value;
            else if (name == 'interval') credentialfile.interval = value;

        });

        form.parse(req, async () => {

            //Save This Data to Collection
            const idv = crypto.randomBytes(32).toString("hex");
            
            const query = await new Credentials({
                Name:credentialfile.name,
                Validity:credentialfile.validity,
                Crypted:idv
            })
            try{
                const result = await query.save();
                const link = `<h1>File Uploaded Succesfully</h1> \n
                <strong>Your Customized Link Is : localhost:3000/download/${idv}</strong>`;
                res.send(link);
                
            }
            catch(ex)
            {
                console.log("Some error has occured While Saving",ex.message);
                res.send("Invalid Something")
            }
                
            });
        
    }
    catch(ex){
        res.send("Some Error Occured");
    }

}

module.exports = {upload};