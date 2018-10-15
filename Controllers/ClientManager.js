const Client = require('../Models/Client');
const mongoose = require('mongoose');
module.exports = {
    getAllClient: (req, res, next) => 
    {
        Client
        .find({})
        .then(data => res.json(data));
    },
   
    addNewClient: (req, res, next) =>
    {
        Client.create(
            {
                _id: new mongoose.Types.ObjectId(),
                Name: req.body.name,
                Street: req.body.street,
                City: req.body.city,
                ZipCode: req.body.zipcode,
                FNameContact: req.body.fname,
                LNameContact: req.body.lname,
                PhoneContact: req.body.phone,
                MailContact: req.body.mail,
                Activity: req.body.activity,
            }
          , function (err) {
            if (err) return console.log(err);
            return res.send(202);
          });
    }
}