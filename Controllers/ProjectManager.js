const Client = require('../Models/Client');
const Project = require('../Models/Project');
const mongoose = require('mongoose');
module.exports = {
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
                Employes: req.body.employesid,
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
            populate('Employes').
            exec(function (err, project) {
                if (err) return handleError(err);
                console.log('The project is %s', project.Client.Name);
            });

            
    },

    getAllProject: (req, res, next) =>
    {
        Project
        .find({})
        .then(data => res.json(data))
    },

    findProjectById: (req, res) => {
        // Project
        //     .findById(req.params.id)
        //     .then(data => res.send(data));
        Project.
        findOne({ _id: req.params.id }).
        populate('Client').
        populate({path: 'Employes', model: 'Employe'}).
        exec(function (err, project) {
            if (err) return handleError(err);
            console.log('The project is %s', project.Client.Name);
            console.log(project);
            res.send(project);
        });
    },
    updateProject: (req, res, next) => {
        Project
        .findByIdAndUpdate(req.params.id, 
            {
            Name: req.body.name,
            Description: req.body.descritpion,
            StartDate: req.body.startdate,
            EndDate: req.body.enddate,
            Amount: req.body.amount,
            Status: req.body.status,
            Client: req.body.clientid,
            
            },  
            (err) => {
                if (err)
                    res.send(`Oups ! Error with update. ${err}`);
                else
                    res.send('Update sucessfull');
            });
    },
    removeProject: (req, res, next) => {
        Project.findByIdAndRemove(req.params.id,(err)=>{
            if(err)
            {
                res.send(err);
            }else{
                res.send("Deleted");
            }
        })
    },

    countProjectCreated: (req, res, next) => {
        Project
        .find({Status: 'created'})
        .count().then(c => res.json(c))
    },
    countProjectProgress: (req, res, next) => {
        Project
        .find({Status: 'in-progress'})
        .count().then(c => res.json(c))
    },
    countProjectDone: (req, res, next) => {
        Project
        .find({Status: 'done'})
        .count().then(c => res.json(c))
    },
    countProjectCancel: (req, res, next) => {
        Project
        .find({Status: 'cancel'})
        .count().then(c => res.json(c))
    },

    amountTotal:(req, res, next) => {
        Project
        .find({Status: 'done'}, function (err, amount) {
            if (err) return next(err);
            total = 0;
            amount.forEach(element => {
                total += element.Amount;
            });
            res.json(total);
        });
        
    }
   
}