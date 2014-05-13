Template.tripShow.rendered = function() {

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

Template.tripShow.helpers({
  items: function(){
    return Items.find({});
  }
});
