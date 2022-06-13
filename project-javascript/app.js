var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cros = require("cors")
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categories = require('./routes/categories');
var products = require('./routes/products');
var singleProduct = require('./routes/singleProduct');
var productCategory = require('./routes/productCategory');
var getLogin = require('./routes/getlogin');
var registerRouter = require('./routes/registerUser');
var addproductData = require('./routes/addProductInPage');
var sessiondata = require('./routes/sessionCookies');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'my secret code',
  resave: false
}))

app.use(cros())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', categories);
app.use('/', products);
app.use("/", singleProduct);
app.use("/", productCategory)
app.use("/", getLogin);
app.use("/userDetails/registration", registerRouter);
app.use("/addProduct/Details", addproductData);
app.use("/session/details", sessiondata);


app.listen(2901, function(){
  console.log("server listening 2901")
})

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
