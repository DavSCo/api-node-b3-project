var express = require('express');
var ClientManager = require('../Controllers/ClientManager');

var router = express.Router();

/* GET home page. */
router
    .post('/', ClientManager.addNewClient)
    .get('/', ClientManager.getAllClient);
router
.route('/count')
.get(ClientManager.countClient);
    
router
    .route('/:id')
    .get(ClientManager.findClientById)
    .put(ClientManager.updateClient)
    .delete(ClientManager.removeClient);



module.exports = router;

