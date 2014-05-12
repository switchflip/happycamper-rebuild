Meteor.publish('lists', function(options) {
  return Lists.find({}, options);
});
Meteor.publish('singleList', function(id) {
  return id && Lists.find(id);
})

Meteor.publish('items', function(listId, options) {
  // only returns currentUsers' items
  return Items.find({user_id: this.userId}, {sort: {created_at: -1}});
});


Meteor.publish('trips', function(options) {
  return Trips.find({owner: this.userId}, options);
});

Meteor.publish('singleTrip', function(id) {
  return id && Trips.find(id);
})
