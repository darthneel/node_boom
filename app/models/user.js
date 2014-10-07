// Require other Schema
var songSchema = require('./song.js');

// app/models/user.js
// load the things we need
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
// User Schema
var userSchema = new Schema({
  username: {type: String, required: true, index: { unique: true } },
  email: {type: String, required: true, index: { unique: true } },
  password: {type: String, required: true },
  // favorite_songs: [songSchema]
});


// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
