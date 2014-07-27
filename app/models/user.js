// User Schema
var userSchema = mongoose.Schema({
  username: {type: String, required: true, index: { unique: true } },
  email: {type: String, required: true, index: { unique: true } },
  password: {type: String, required: true },
  favorite_songs: [songSchema]
});
