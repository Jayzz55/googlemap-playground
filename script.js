(function(window, google) {
  
  // map options
  var options = {
    center: {
      lat: -34.397,
      lng: 150.664
    },
    zoom: 10
  },
  element = document.getElementById('map-canvas'),
  // map
  map = new google.maps.Map(element, options);
  
}(window, google));
