Template.listShow.helpers({
  items: function() {
    return Items.find({listId: this._id}, {sort:{sticky: -1}});
  }
});
