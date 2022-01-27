const mongoose = require('mongoose');
const Credentials = require('../models/filecred');

const download = async (req,res) => {
    const query = await Credentials.findOne({Crypted:req.params.id});
    if(!query) return res.status(404).send("Invalid Link ");

    if(query.Validity > 0) {
        const validNumber  = query.Validity - 1;
        const result = await query.update({Validity:validNumber});
    }
    else{
        res.send("The Validity Limit Is Over!");
        return;
    }
    
    
    const name = query.Name;
    const folder = `F:\\LightLoad\\uploads\\${name}`
    res.download(folder);
}


module.exports = {download};
