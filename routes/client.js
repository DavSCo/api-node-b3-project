var express = require('express');
var ClientManager = require('../Controllers/ClientManager');
var router = express.Router();

/* GET home page. */
router.post('/', ClientManager.addNewClient);

module.exports = router;
