(function(window, google) {
  
  var Mapster = (function() {
    function Mapster(element, opts) {
      this.gMap = new google.maps.Map(element, opts);
      this.markers = List.create();
    }
    Mapster.prototype = {
      zoom: function(level) {
        if (level) {
          this.gMap.setZoom(level);
        } else {
          return this.gMap.getZoom();
        }
      },
      _on: function(opts) {
        var self = this;
        google.maps.event.addListener(opts.obj, opts.event, function(e){
          opts.callback.call(self, e);
        });
      },
      addMarker: function(opts){
        var marker;
        opts.position = {
          lat: opts.lat,
          lng: opts.lng
        }
        marker = this._createMarker(opts);
        this.markers.add(marker);
        if (opts.event) {
          this._on({
            obj: marker,
            event: opts.event.name,
            callback: opts.event.callback
          });
        }
        if (opts.content) {
          this._on({
            obj: marker,
            event: 'click',
            callback: function() {
              var infoWindow = new google.maps.InfoWindow({
                content: opts.content
              });

              infoWindow.open(this.gMap, marker);
             }
           })
         }
        return marker;
      },
      findBy: function(callback) {
        return this.markers.find(callback);
      },
      removeBy: function(callback) {
        var matches;

        matches = this.markers.find(callback, function(markers) {
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
        });

        matches.forEach(function(match) {
          this.markers.remove(match);
        }.bind(this));

        return this.markers;
      },
      _createMarker: function(opts) {
        opts.map = this.gMap;
        return new google.maps.Marker(opts);
      }
    };
    return Mapster;
  }());
  
  Mapster.create = function(element, opts) {
    return new Mapster(element, opts);
  };
  
  window.Mapster = Mapster;
  
}(window, google));
