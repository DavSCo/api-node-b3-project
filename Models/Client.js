const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Client = new Schema({
    _id: Schema.Types.ObjectId,
    Name: String,
    Street: String,
    City: String,
    ZipCode: String,
    FNameContact: String,
    LNameContact: String,
    PhoneContact: String,
    MailContact: String,
    Activity: String,
   
});

module.exports = mongoose.model('Client', Client);
