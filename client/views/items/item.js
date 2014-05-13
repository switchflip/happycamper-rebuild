Template.item.helpers({
  isSticky: function() {
    return this.sticky;
  }
})

Template.item.events({
  // submit item
  'click button[type=submit]': function(e, tmpl) {
    e.preventDefault();
    var user = Meteor.userId();
    var type = tmpl.find('#itemType').value.toLowerCase();
    var quantity = tmpl.find('#itemQuantity').value;

    if  (quantity >= 1 ) {
      Items.insert({
        type: type,
        quantity: quantity,
        created_at: new Date,
        user_id: user,
        is_shared: false
      });
      $('form').trigger("reset");
    } else {
      alert("Please enter a valid number.")
    }
  },

  // edit item
  'click #edit': function(e) {
    e.preventDefault();

    var id = this._id;
    var title = this.type;
    var quanity = this.quantity;
  },
  // delete item
  'click #delete': function(e) {
    e.preventDefault();
    Items.remove(this._id);
  },
  // share item
  'click #share': function(e) {
    e.preventDefault();
    $(e.target).toggleClass('active');
    this.is_shared = this.is_shared ? false : true
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
