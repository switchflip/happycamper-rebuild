Trips = new Meteor.Collection('trips');

Trips.allow({
  insert: inTrip,
  remove: inTrip,
  update: inTrip
});
