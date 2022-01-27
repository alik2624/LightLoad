const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const login = async (req,res) => {
    const query = await User.find({Email:req.body.email});
    if(!query) return res.status(404).send("Invalid Email Or Password");


    const isValid = await bcrypt.compare(req.body.password,query[0].Password);
    console.log(isValid);
    if(!isValid) return res.status(404).send("Invalid Email Or Password");

    res.send("Login Was A Success")
}


module.exports = {login};
