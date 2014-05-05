Template.tripsList.helpers({
  trips: function() {
    return Trips.find();
  }
});
