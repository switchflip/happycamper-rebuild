Template.tripItems.events({
  'click #share': function(e) {
    e.preventDefault();
    $(e.target).toggleClass('active');
    this.is_shared = this.is_shared ? false : true
    console.log(this.is_shared);
  }
})
