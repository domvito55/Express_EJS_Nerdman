exports.about = function(req, res, next) {
    res.render('simple',{
      title: 'About',
      userName: req.user ? req.user.username : ''
    });
  }