var Elevatrapp = Elevatrapp || { Models: {}, Collections: {}, Views: {} };


Elevatrapp.Collections.RoomCollection = Backbone.Collection.extend({
  model: Elevatrapp.Models.Room,
  url: '/api/rooms'
})
