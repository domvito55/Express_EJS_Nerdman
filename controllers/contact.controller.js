exports.contact = function(req, res, next) {
    res.render('form', {
      title: 'Contact',
      userName: req.user ? req.user.username : ''
    });
}