// === Include dependecies === //
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Authentication
let session = require('express-session');
let flash = require('connect-flash');
let passport = require('passport');

/** ___Include routes___ */
var indexRouter = require('../routes');
var aboutRouter = require('../routes/about');
var contactRouter = require('../routes/contact');
var projectsRouter = require('../routes/projects');
var servicesRouter = require('../routes/services');
var businesslistRouter = require('../routes/businesslist');
var usersRouter = require('../routes/users');

// === creating express framework === //
var app = express();

//middleware to keep the user session in the app
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: "sessionSecret"
}));

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');


// === Use - registering middleware === //
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

// Sets up passport
// flash to handle error messages
// passaport to handle authentication strategies
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// registering routers middleware
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/projects', projectsRouter);
app.use('/services', servicesRouter);
app.use('/businesslist', businesslistRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
