var express = require('express');
var router = express.Router();

let contactController = require('../controllers/contact.controller');

/* GET Contact form. */
router.get('/', contactController.contact);

/* GET Each Project. */

module.exports = router;
