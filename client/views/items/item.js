Template.item.helpers({
  isSticky: function() {
    return this.sticky;
  }
})

Template.item.events({
  // edit item
  'click #edit': function(e) {
    e.preventDefault();
  },
  // remove item
  'click #remove': function(e) {
    e.preventDefault();

    if (confirm("Remove this item?")) {
      Items.remove(this._id);
    }
  },
  // star item
  'click #favorite': function(e) {
    e.preventDefault();

    var itemProperties = {
      sticky: (this.sticky) ? false : true
    }

    Items.update(this._id, {$set: itemProperties}, function(error) {
      if (error) {
        Errors.throw(error.reason);
      }
    });

    console.log(this.sticky);
  },
  // assign item to user
  'click #assign': function(e) {
    e.preventDefault();
  }
})
