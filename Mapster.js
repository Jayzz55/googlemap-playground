(function(window, google) {
  
  var Mapster = (function() {
    function Mapster(element, opts) {
      this.gMap = new google.maps.Map(element, opts);
      this.markers = List.create();
      if (opts.cluster) {
        this.markerClusterer = new MarkerClusterer(this.gMap, []);
      }
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
          opts.callback.call(self, e, opts.obj);
        });
      },
      addMarker: function(opts){
        var marker;
        opts.position = {
          lat: opts.lat,
          lng: opts.lng
        }
        marker = this._createMarker(opts);
        if (this.markerClusterer) {
          this.markerClusterer.addMarker(marker);  
        }
        this.markers.add(marker);
        if (opts.events) {
          this._attachEvents(marker, opts.events);
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
      _attachEvents: function(obj, events) {
        events.forEach(function(event) {
          this._on({
            obj: obj,
            event: event.name,
            callback: event.callback
          });
        }.bind(this));
      },
      findBy: function(callback) {
        return this.markers.find(callback);
      },
      removeBy: function(callback) {
        var matches;

        matches = this.markers.find(callback, function(markers) {
          markers.forEach(function(marker) {
            if (this.markerClusterer) {
              this.markerClusterer.removeMarker(marker);
            } else {
              marker.setMap(null);              
            }
          }.bind(this));
        }.bind(this));

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
