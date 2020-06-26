//Acessing mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/library');


//Schema definition
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:String,
    email:String,
    password:String,
    address:String,
    city:String,
    state:String,
    zip:String,

});

//Model Creation
var Userdata = mongoose.model('userdata',UserSchema);

module.exports = Userdata;

