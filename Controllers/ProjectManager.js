const Client = require('../Models/Client');
const Project = require('../Models/Project');
const mongoose = require('mongoose');
module.exports = {
    getAllProject: (req, res, next) => 
    {
        Project
        .find({})
        .then(data => res.json(data));
    },

    addNewProject: (req, res, next) =>
    {
        Project.create(
            {
                _id: new mongoose.Types.ObjectId(),
                Name: req.body.name,
                Description: req.body.descritpion,
                StartDate: req.body.startdate,
                EndDate: req.body.enddate,
                Amount: req.body.amount,
                Status: req.body.status,
                Client: req.body.clientid,
            }
            , function (err) {
            if (err) return console.log(err);
            return res.send(202);
            })
    },

    test: (req, res, next) => 
    {
        Project.
            findOne({ _id: '5bc31212f6244023dfd7c904' }).
            populate('Client').
            exec(function (err, project) {
                if (err) return handleError(err);
                console.log('The project is %s', project.Client.Name);
            });
    }
   
}