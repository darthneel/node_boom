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

module.exports = mongoose.model('Song', songSchema);
