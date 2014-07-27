module.exports = function(app, passport) {

//worked
  app.get('/worked', function(req, res) {
    res.send('<h1> WORKED </h1>');
  });

// login
  app.get('/', function(req, res) {
    res.render('index.ejs');
  });

  // app.post('/', do all our passport stuff here);


//signup
  app.get('/signup', function(req, res) {
    res.render('signup.ejs');
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/worked', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    // failureFlash : true // allow flash messages
	}));


};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
