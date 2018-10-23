const Client = require('../Models/Client');
const mongoose = require('mongoose');
module.exports = {
    getAllClient: (req, res, next) => {
        Client
            .find({})
            .then(data => res.json(data));
    },

    addNewClient: (req, res, next) => {
        Client.create(
            {
                _id: new mongoose.Types.ObjectId(),
                Name: req.body.name,
                Street: req.body.street,
                City: req.body.city,
                ZipCode: req.body.zipcode,
                FNameContact: req.body.fnamecontact,
                LNameContact: req.body.lnamecontact,
                PhoneContact: req.body.phone,
                MailContact: req.body.mail,
                Activity: req.body.activity,
            }
            , function (err) {
                if (err) return console.log(err);
                return res.send(202);
            });
    },
    findClientById: (req, res) => {
        Client
            .findById(req.params.id)
            .then(data => res.send(data));
    },
    updateClient: (req, res, next) => {
        Client.findByIdAndUpdate(req.params.id,
            {
            Name:req.body.name,
            Street: req.body.street,
            City: req.body.city,
            ZipCode: req.body.zipcode,
            FNameContact: req.body.fnamecontact,
            LNameContact: req.body.lnamecontact,
            PhoneContact: req.body.phone,
            MailContact: req.body.mail,
            Activity: req.body.activity,
        },
        (err) => {
            if (err)
                res.send(`Oups ! Error with update. ${err}`);
            else
                res.send('Update sucessfull');
        });
    },
    removeClient: (req, res, next) => {
        Client.findByIdAndRemove(req.params.id,(err)=>{
            if(err)
            {
                res.send(err);
            }else{
                res.send({message: "User deleted successfully!"});
            }
        })
    },
    countClient: (req, res, next) => {
        Client
        .find({})
        .count().then(count => res.json(count));
  }
  

}