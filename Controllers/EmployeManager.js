const Employe = require('../Models/Employe');
const mongoose = require('mongoose');
module.exports = {
    getAllEmploye: (req, res, next) => 
    {
        Client
        .find({})
        .then(data => res.json(data));
    },
   
    addNewEmploye: (req, res, next) =>
    {
        Employe.create(
            {
                _id: new mongoose.Types.ObjectId(),
                FName: req.body.fname,
                LName: req.body.lname,
                UserName: req.body.username,
                BirthDate: req.body.birthdate,
                Street: req.body.street,
                City: req.body.city,
                ZipCode: req.body.zipcode,
                FNameContact: req.body.fnamecontact,
                LNameContact: req.body.lnamecontact,
                PhoneContact: req.body.phonecontact,
                MailContact: req.body.mailcontact,
                Status: req.body.status,
            }
          , function (err) {
            if (err) return console.log(err);
            return res.send(202);
          });
    }
}