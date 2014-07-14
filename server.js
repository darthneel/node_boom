var express = require("express");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var http = require('http').Server(app);
var socketio = require("socket.io")(http);

global.mongoose  = require('mongoose');

//connect to database
global.db = mongoose.connect('mongodb://localhost/boomroom');

//config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));

app.listen(8000, function(){
	console.log("listening on port 8000");
});

app.get('/', function(req, res){
	res.send('<h1> Hello World </h1>');
});
