//Acessing mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/library');


//Schema definition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    
    name:String,
    description:String,
    image:String,
    
});

//Model Creation
var Authordata = mongoose.model('Authordata',AuthorSchema);

module.exports = Authordata;

