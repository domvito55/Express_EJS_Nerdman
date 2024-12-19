var express = require('express');
var router = express.Router();

let indexController = require("../controllers/projects.controller");

/* GET List of Projects. */
router.get('/', indexController.projects);

/* GET Each Project. */

module.exports = router;
