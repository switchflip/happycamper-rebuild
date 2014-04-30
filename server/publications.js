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
