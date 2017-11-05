var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');
var promisify = require('es6-promisify');
var cookieParser = require('cookie-parser');
var session = require('express-session');
//var fs = require('fs');
var flash = require('connect-flash');
var expressValidator = require('express-validator');
var mongoose = require('mongoose');
//two model
require('./models/studentResource')
var routes = require('./routes/studentResourceRoutes');
var port = 3000;

app.use(session({
  secret: 'JERRY',
  key: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  //store: new MongoStore({mongooseConnection: mongoose.connection})
}));

app.use(cookieParser());

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.flashes = req.flash();
  res.locals.user = req.user || null;
  res.locals.currentPath = req.path;
  next();
});



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/studentResource');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json())

app.use(expressValidator());

app.use(passport.initialize());
app.use(passport.session());

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

/*app.use(session({
  secret: process.env.SECRET,
  key: process.env.KEY,
}))*/

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes)





app.listen(port, function(req, res) {
    console.log('server started')
})    