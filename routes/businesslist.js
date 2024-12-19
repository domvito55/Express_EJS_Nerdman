var express = require('express');
var router = express.Router();

let businesslistController = require('../controllers/businesslist.controller');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    // isAuthenticated is from passaport
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

// === CREATE === //
// GET Route for displaying the Add page - view
router.get('/add', requireAuth, businesslistController.displayAddPage);
// POST Route for processing the Add page - ADD/INSERT (post) - submit button
router.post('/add', requireAuth, businesslistController.processAddPage);

// === READ === //
// GET Route for displaying the list - SELECT/FIND (get) - view
router.get('/list', businesslistController.businesslistList);

// === UPDATE === //
// GET Route for displaying the edit page - view
router.get('/edit/:id', requireAuth, businesslistController.displayEditPage);
// PUT Route for processing the edit page - UPDATE (put) - submit button
router.post('/edit/:id', requireAuth, businesslistController.processEditPage);

// === DELETE === //
// DELETE Route for processing the delete operation - DELETE/REMOVE (delete) - submit button
router.get('/delete/:id', requireAuth, businesslistController.performDelete);


module.exports = router;