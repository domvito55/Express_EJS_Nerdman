var express = require('express');
var router = express.Router();

let = servicesController = require('../controllers/services.controller');

/* GET List of Projects. */
router.get('/', servicesController.services);

/* GET Each Project. */

module.exports = router;
