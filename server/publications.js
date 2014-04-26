Meteor.publish('lists', function(options) {
  return Lists.find({}, options);
});
Meteor.publish('singleList', function(id) {
  return id && Lists.find(id);
})

Meteor.publish('items', function(listId, options) {
  return Items.find({listId: listId}, options);
});
