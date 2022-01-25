const Joi = require('joi');
const User = require('../models/user');
const bcrypt = require('bcryptjs');


const register = async (req,res) => {
    
    const { error } = validateJoi(req.body);
    if(error) return  res.status(404).send("Invalid Credentials");

    const checkuser = await User.findOne({Email:req.body.email});
    if(checkuser) return res.send("User Already Exists!");


    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password,salt);

    const query = await new User({
        Name:req.body.name,
        Email:req.body.email,
        Password: hashed
    });

    try{
        const result = await query.save();
        res.status(200).send("Registration Was A Success");
    }
    catch(ex){
        res.status(400).send("Error");
    }
}


async function validateJoi(data){
    const Schema = Joi.object({
        name:Joi.string().min(3).max(20).required(),
        email:Joi.string().min(8).max(60).required(),
        password:Joi.string().min(8).max(100).required()
    });

    return Schema.validate(data)
}

module.exports = {register};