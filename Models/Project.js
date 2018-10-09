const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Project = new Schema({
    Name: String,
    Description: String,
    StartDate: Date,
    EndDate: Date,
    Amount: Float32Array,
    Status: String,
    CreateDate: { type: Date, default: Date.now },
    //Client
    //Salarié
});

module.exports = mongoose.model('Project', Project);
