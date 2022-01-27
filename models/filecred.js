const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/LightLoad');

//File Schema
const credential = mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Validity:{
        type:Number
    },
    Interval:{
        type:Number
    },
    Crypted:{
        type:String,
        required:true,
    }
});

const Credential = mongoose.model('credential',credential);

module.exports = Credential;