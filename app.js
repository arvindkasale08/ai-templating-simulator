var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var invoicesRouter = require('./routes/invoices');
var paymentsRouter = require('./routes/payments');
var expensesRouter = require('./routes/expenses');
var eventsRouter = require('./routes/events');
var aiTemplateRouter = require('./routes/aitemplate');
var awRouter = require('./routes/awrouter');
const port = 7777;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/invoices', invoicesRouter);
app.use('/payments', paymentsRouter);
app.use('/expenses', expensesRouter);
app.use('/events', eventsRouter);
app.use('/api/integration/v1/visualization', aiTemplateRouter);
app.use('/api/integration/v1/content', awRouter);

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;
