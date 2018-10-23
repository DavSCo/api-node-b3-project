const mongoose = require('mongoose');
const Client = require('./Client');
const Employe = require('./Employe');

var Schema = mongoose.Schema;

const Project = new Schema({
    _id: Schema.Types.ObjectId,
    Name: String,
    Description: String,
    StartDate: Date,
    EndDate: Date,
    Amount: String,
    Status: String,
    CreateDate: { type: Date, default: Date.now },
    Client: { type: Schema.Types.ObjectId, ref: 'Client' },
    Employes : [{ type: Schema.Types.ObjectId, ref: 'Employes' }]
});

module.exports = mongoose.model('Project', Project);
