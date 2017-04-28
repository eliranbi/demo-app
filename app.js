//global.jQuery = require('jquery');
//var bootstap = require('bootstrap');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var fs = require('fs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view options', {layout:true});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
var contracts = null
var participants = null



//Read participants from file system ...
fs.readFile(path.resolve(__dirname, 'participants.json'), 'utf8', function (err, data) {
    console.log(">>> Loading participants: \n------------------------------");
    if (err) throw err
       // error handling
    var data = JSON.parse(data);
    participants = data['participants']
    //console.log(participants.length)
    for (var i=0; i<participants.length; i++){
      // here jsonObject['sync_contact_list'][i] is your current "bit"
      var obj = participants[i];
      console.log("[" +i + "] participantId - " + obj.participantId + ", " + obj.companyName);
    }
    //console.log(participants);    
});
//Read Contracts from file system ...
fs.readFile(path.resolve(__dirname, 'contracts.json'), 'utf8', function (err, data) {
    console.log(">>> Loading Oil contracts: \n------------------------------");
    if (err) throw err
       // error handling
    var data = JSON.parse(data);
    contracts = data['contracts']
    //console.log(contracts.length)
    for (var i=0; i<contracts.length; i++){
      // here jsonObject['sync_contact_list'][i] is your current "bit"
      var obj = contracts[i];
      console.log("[" +i + "] contract id - " + obj.contractId);
    }
    //console.log(contracts);    
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
