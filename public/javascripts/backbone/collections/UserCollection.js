var Clientapp = Clientapp || { Models: {}, Collections: {}, Views: {} };


Clientapp.Collections.UserCollection = Backbone.Collection.extend({
	model: Clientapp.Models.User,
	url: '/api/users'
})
