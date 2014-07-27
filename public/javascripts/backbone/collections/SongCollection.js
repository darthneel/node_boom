var Clientapp = Clientapp || { Models: {}, Collections: {}, Views: {} };


Clientapp.Collections.SongCollection = Backbone.Collection.extend({
  model: Clientapp.Models.Song,
  url: '/api/songs'
})
