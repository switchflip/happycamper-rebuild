  // 'submit form': function (e, tmpl) {
  //     e.preventDefault();
  //
  //     var subject = tmpl.find('input').value;
  //
  //     Todos.insert({
  //       subject: subject,
  //       created_at: new Date,
  //       is_done: false,
  //       user_id: Meteor.userId()
  //     });



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
    var type = tmpl.find('#itemType').value;
    var quantity = tmpl.find('#itemQuantity').value;

    if  (quantity >= 1) {
      Items.insert({
        type: type,
        quantity: quantity,
        created_at: new Date,
        user_id: user
      });
    } else {
      alert("Quanity must be greater than 0.")
    }
  },

  // edit item
  'click #edit': function(e) {
    e.preventDefault();
  },
  // delete item
  'click #delete': function(e) {
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
