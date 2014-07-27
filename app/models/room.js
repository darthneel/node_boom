// Room Schema
var roomSchema = mongoose.Schema({
  name: String,
  songs: [songSchema],
  users: [userSchema],
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});
