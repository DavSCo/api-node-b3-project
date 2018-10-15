var express = require('express');
var router = express.Router();
const EmployeController = require('../Controllers/EmployeManager');

/* GET home page. */
router.post('/', EmployeController.addNewEmploye);

module.exports = router;
