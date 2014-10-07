var Clientapp = Clientapp || { Models: {}, Collections: {}, Views: {} };

Backbone.Model.prototype.idAttribute = "_id";

Clientapp.Models.Room = Backbone.Model.extend({
  initialize: function(){
		console.log("a ROOM has been created!");
		this.set('users', new UsersCollection());
		this.set('songs', new SongsCollection());
	}
});
