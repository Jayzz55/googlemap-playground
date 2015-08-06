  
  var $mapster = $('#map-canvas').mapster(Mapster.MAP_OPTIONS);
  
  $mapster.mapster('addMarker', {
    lat: 37.791350,
    lng: -122.435883
  });  

  $mapster.mapster('addMarker', {
    lat: 37.751350,
    lng: -122.485883,
    draggable: true,
    id: 2
  });

  var matches = $mapster.mapster('findMarkers', function(marker) {
    return marker.id === 1;
  });

  console.log($mapster.mapster('markers'));

 // // map options
  // var options = mapster.MAP_OPTIONS,
  // element = document.getElementById('map-canvas'),
  // // map
  // map = mapster.create(element, options);
  //
  // var marker1 = map.addMarker({
  //   lat: 37.791350,
  //   lng: -122.435883,
  //   content: '<div style="color: #f00;">I like food</div>',
  //   event: {
  //     name: 'click',
  //     callback: function() {
  //       alert('hear you');
  //     }
  //   }
  // });
  //
  // var marker2 = map.addMarker({
  //   id: 2,
  //   lat: 37.781350,
  //   lng: -122.485883,
  //   content: 'I like rice',
  //   draggable: true,
  //   events: [{
  //     name: 'click',
  //     callback: function(e, marker) {
  //       console.log(e, marker);
  //     }
  //   }, {
  //     name: 'dragend',
  //     callback: function() {
  //       alert('dragged');
  //     }
  //   }]
  // });  

  // for (var i = 0; i < 40; i++) {
  //   map.addMarker({
  //     id: 2,
  //     lat: 37.781350 + Math.random(),
  //     lng: -122.485883 + Math.random(),
  //     content: 'I like rice'
  //   }); 
  //   
  //   var marker = map.addMarker({
  //     lat: 37.791350 + Math.random(),
  //     lng: -122.435883 + Math.random(),
  //     content: '<div style="color: #f00;">I like food</div>'
  //   });
  // } 
  //
  // map.removeBy(function(marker) {
  //   if (marker.id === 2) {
  //     console.log(marker);
  //   }
  //   return marker.id === 2;
  // });

