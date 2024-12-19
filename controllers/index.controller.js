exports.home = function(req, res, next) {
    res.render('simple', {
      title: 'Home',
      userName: req.user ? req.user.username : ''
    });
  }
