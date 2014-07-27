var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var http = require('http').Server(app);
var socketio = require('socket.io')(http);
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

global.mongoose  = require('mongoose');

//connect to database
global.db = mongoose.connect('mongodb://localhost/boomroom');

// passport for users
var passport = require('passport');

//config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));

app.listen(8000, function(){
	console.log('listening on port 8000');
});

app.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});
