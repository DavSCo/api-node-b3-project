var express = require('express');
var router = express.Router();
const ProjectManager = require('../Controllers/ProjectManager');

/* GET home page. */
router.post('/', ProjectManager.addNewProject);
router.get('/', ProjectManager.getAllProject);


module.exports = router;
