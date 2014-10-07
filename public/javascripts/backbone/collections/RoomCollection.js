var Clientapp = Clientapp || { Models: {}, Collections: {}, Views: {} };


Clientapp.Collections.RoomCollection = Backbone.Collection.extend({
  model: Clientapp.Models.Room,
  url: '/api/rooms'
})
