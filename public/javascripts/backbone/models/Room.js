var Elevatrapp = Elevatrapp || { Models: {}, Collections: {}, Views: {} };

Backbone.Model.prototype.idAttribute = "_id";

Elevatrapp.Models.Room = Backbone.Model.extend({
  initialize: function(){
		console.log("a ROOM has been created!");
		this.set('users', new UsersCollection());
		this.set('songs', new SongsCollection());
	}
});
