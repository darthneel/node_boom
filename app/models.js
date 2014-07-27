// Room Schema
var roomSchema = mongoose.Schema({
  name: String,
  songs: [songSchema],
  users: [userSchema],
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

// Song Schema
var songSchema = mongoose.Schema({
  title: String,
  artist: String,
  stream_url: String,
  sc_ident: Number,
  album_art: String,
  genre: String,
  played: { type: Boolean, default: false },
  currently_playing: { type: Boolean, default: false },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  added_by: String,
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

// User Schema
var userSchema = mongoose.Schema({
  username: {type: String, required: true, index: { unique: true } },
  email: {type: String, required: true, index: { unique: true } },
  password: {type: String, required: true },
  favorite_songs: [songSchema]
});
