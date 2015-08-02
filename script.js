(function(window, mapster) {
  
  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),
  // map
  map = mapster.create(element, options);
  map.zoom(18);
  map._on('click',function(e){
    alert('click');
    console.log(e);
    console.log(this);
  });
  
}(window, window.Mapster));
