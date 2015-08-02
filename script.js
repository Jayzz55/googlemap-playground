(function(window, mapster) {
  
  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),
  // map
  map = mapster.create(element, options);
 
  var marker1 = map.addMarker({
    lat: 37.791350,
    lng: -122.435883,
    content: '<div style="color: #f00;">I like food</div>',
    event: {
      name: 'click',
      callback: function() {
        alert('hear you');
      }
    }
  });

  var marker2 = map.addMarker({
    lat: 37.781350,
    lng: -122.485883,
    content: 'I like rice'
  });  

}(window, window.Mapster));
