var express = require('express');
var router = express.Router();

let aboutController = require("../controllers/about.controller");

/* GET home page. */
router.get('/', aboutController.about);

module.exports = router;
