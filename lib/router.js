Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [Meteor.subscribe('items'), Meteor.subscribe('trips')];
  }
});

Router.map(function() {

  this.route('trips', {
    template: 'tripsList',
    path: '/trips',
    waitOn: function() {
      return Meteor.subscribe('trips');
    },
    data: function() {
      return Trips.find();
    }
  });

  this.route('tripShow', {
    path: '/trips/:_id',
    waitOn: function() {
      return Meteor.subscribe('singleTrip', this.params._id);
    },
    data: function() {
      return Trips.findOne(this.params._id);
    }
  });

  this.route('tripSubmit', {
    path: '/trip/submit'
  });


  this.route('items', {
    path: '/items',
    template: 'item',
    waitOn: function() {
      return Meteor.subscribe('items');
    },
    data: function() {
      return {
        items: Items.find()
      }
    },
    loginRequired: {
      name: 'lists',
      shoudRoute: false,
    }
  });

  this.route('lists', {
    path: '/',
    template: 'listsIndex',
    waitOn: function() {
      return Meteor.subscribe('lists');
    },
    data: function() {
      return {
        lists: Lists.find({}, {})
      };
    }
  });


  this.route('listShow', {
    path: '/lists/:_id',
    waitOn: function() {
      return [
        Meteor.subscribe('singleList', this.params._id),
        Meteor.subscribe('items', this.params._id)
      ];
    },
    data: function() {
      return Lists.findOne(this.params._id);
    }
  });
});
