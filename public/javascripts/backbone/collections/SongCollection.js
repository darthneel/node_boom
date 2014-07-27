var Elevatrapp = Elevatrapp || { Models: {}, Collections: {}, Views: {} };


Elevatrapp.Collections.SongCollection = Backbone.Collection.extend({
  model: Elevatrapp.Models.Song,
  url: '/api/songs'
})
