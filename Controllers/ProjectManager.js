const Project = require('../Models/Project');

module.exports = {
    getAllProject: (req, res, next) => 
    {
        Project
        .find({})
        .then(data => res.json(data));
    },
   
}