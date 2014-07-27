module.exports = function(app, passport) {
  // load up models
  var Room = require('./models/room.js');
  var User = require('./models/user.js');
  var Song = require('./models/song.js');

  // worked
  app.get('/worked', function(req, res) {
    if(req.user) {
      res.send('<h1> WORKED </h1><h2>' + req.user.email + '</h2>');
    } else {
      res.send('<h1> WORKED </h1>');
    }
  });


  // login
  app.get('/', function(req, res) {
    res.render('index.ejs');
  });

  // process the login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/worked', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		// failureFlash : true // allow flash messages
	}));


  // signup
  app.get('/signup', function(req, res) {
    res.render('signup.ejs');
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/worked', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    // failureFlash : true // allow flash messages
	}));


  // logout
  app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});


  // API Setup
  // pull all rooms
  app.post('/api/rooms', function(req, res) {
    Room.find({}, function(err, rooms) {
      res.send({ rooms: rooms });
    });
  });

  // pull all users based on room id
  app.post('/api/users/:id', function(req, res) {
    var room_id = req.params.id;
    Room.findOne({ '_id' : room_id }, 'users', function(err, users) {
      res.send({ users: users });
    });
  });

  // pull all songs based on room id
  app.post('/api/songs/:id', function(req, res) {
    var room_id = req.params.id;
    Room.findOne({ '_id' : room_id }, 'songs', function(err, songs) {
      res.send({ songs: songs });
    });
  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
