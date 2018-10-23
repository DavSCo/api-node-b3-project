var express = require('express');
var router = express.Router();
const ProjectManager = require('../Controllers/ProjectManager');

/* GET home page. */
router.post('/', ProjectManager.addNewProject);
router.get('/', ProjectManager.getAllProject);
router.get('/:id', ProjectManager.findProjectById);
router.put('/:id', ProjectManager.updateProject);
router.delete('/:id', ProjectManager.removeProject);


module.exports = router;
