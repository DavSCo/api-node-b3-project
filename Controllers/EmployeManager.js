const Employe = require('../Models/Employe');
const mongoose = require('mongoose');
module.exports = {
    getAllEmploye: (req, res, next) => {
        Employe
            .find({})
            .then(data => res.json(data));
    },

    addNewEmploye: (req, res, next) => {
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
                else{{message: "Employe Created successfully!"}}
                return res.send(202);
            });
    },
    findEmployeById: (req, res) => {
        Employe
            .findById(req.params.id)
            .then(data => res.send(data));
    },
    updateEmploye: (req, res, next) => {
        const { FName, LName, UserName, Street, City, ZipCode, FNameContact, LNameContact, PhoneContact, MailContact, Status } = req.body;
        Employe.update({
            FName,
            LName,
            UserName,
            Street,
            City,
            ZipCode,
            FNameContact,
            LNameContact,
            PhoneContact,
            MailContact,
            Status
        },
            {
                where: {
                    _id: req.params.id
                }
            }).then(data => res.send(data));
    },
    removeEmploye: (req, res, next) => {
        Employe.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.send(err);
            } else {
                res.send({message:"Deleted"});
            }
        })
    }
}