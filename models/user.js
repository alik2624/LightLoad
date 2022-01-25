const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/LightLoad");


//The User Schema
const user = mongoose.Schema({
    Name:{
        type:String,
        required:true,   
    },
    Email:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    }
});

const User = mongoose.model('user',user);

module.exports = User;
