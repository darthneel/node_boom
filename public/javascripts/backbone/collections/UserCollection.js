var Elevatrapp = Elevatrapp || { Models: {}, Collections: {}, Views: {} };


Elevatrapp.Collections.UserCollection = Backbone.Collection.extend({
	model: Elevatrapp.Models.User,
	url: '/api/users'
})
