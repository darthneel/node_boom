// Instantiate mongoose Schema
var Schema = mongoose.Schema;

// Require other Schema
var songSchema = require(__dirname + '/models/song.js');
var userSchema = require(__dirname + '/models/user.js');

// Room Schema
var roomSchema = new Schema({
  name: String,
  songs: [songSchema],
  users: [userSchema],
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

// Export model
module.exports = db.model('Room', roomSchema);
