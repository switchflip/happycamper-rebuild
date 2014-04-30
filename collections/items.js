Items = new Meteor.Collection('items');

Items.allow({
  insert: ownsDocument,
  remove: ownsDocument,
  update: ownsDocument
})
