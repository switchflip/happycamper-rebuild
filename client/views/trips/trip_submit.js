Template.tripSubmit.events({
    'submit form': function(e) {
      e.preventDefault();

      var trip = {
        name: $(e.target).find('#trip-name').val(),
        location: $(e.target).find('#trip-location').val(),
        dateStart: $(e.target).find('#trip-date-start').val(),
        dateEnd: $(e.target).find('#trip-date-end').val(),
      }

      trip._id = Trips.insert(trip);
      Router.go('tripShow', {_id: trip._id});

    }
});

Template.tripSubmit.rendered = function() {

  GoogleMaps.init({
    'sensor': true, //optional
    //'key': 'MY-GOOGLEMAPS-API-KEY', //optional
    'language': 'en' //optional
  },
    function() {
      var mapOptions = {
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
      map.setCenter(new google.maps.LatLng( 43.65323, -79.38318 ));
    }
  );

};
