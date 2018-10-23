var express = require('express');
var router = express.Router();
const EmployeController = require('../Controllers/EmployeManager');

/* GET home page. */
router
    .route('/')
    .get(EmployeController.getAllEmploye)
    .post(EmployeController.addNewEmploye);
router
.route('/count')
.get(EmployeController.countEmploye);

router
    .route('/:id')
    .get(EmployeController.findEmployeById)
    .put(EmployeController.updateEmploye)
    .delete(EmployeController.removeEmploye);



module.exports = router;
