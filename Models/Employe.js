const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Employe = new Schema({
    _id: Schema.Types.ObjectId,
    FName: String,
    LName: String,
    UserName: String,
    BirthDate: Date,
    Street: String,
    City: String,
    ZipCode: String,
    FNameContact: String,
    LNameContact: String,
    PhoneContact: String,
    MailContact: String,
    Status: String,
   
});

module.exports = mongoose.model('Employe', Employe);