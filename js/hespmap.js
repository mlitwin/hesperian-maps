// HMap class - handles map creation and manipulation
(function() {

var openInfowindow;

var HMap = {
    partnerHTML: function(p) {
      return this._options.partnerTemplate(p);
	},
	markerSpec: function(p) {
		var loc = new google.maps.LatLng( p.latlng[0], p.latlng[1]);
		return {
					icon: "http://maps.google.com/mapfiles/kml/pal4/icon49.png",
	    			position: loc,
	    			map: this.map,
	    			title: p.title
				};
	},
	createMarker: function (p) {
		var loc, infowindow, marker;
		
		loc = new google.maps.LatLng( p.latlng[0], p.latlng[1]);
		marker = new google.maps.Marker(this.markerSpec(p));	
				
		infowindow = new google.maps.InfoWindow({
			content: this.partnerHTML( p),
			maxWidth: 300,
		});

		google.maps.event.addListener(marker, 'click', function() {
		  if (openInfowindow) {
			openInfowindow.close();
		  }
      	  infowindow.open(marker.getMap('map'), marker);
		  openInfowindow = infowindow;
		});
	},
	addPartners: function(partnerArray)  {
		var i;
		for(i = 0; i < partnerArray.length; i++) {
			this.createMarker(partnerArray[i]);
		}
	},
	createPartners: function(map, json) {
		var i;
		for(i = 0; i < json.length; i++) {
		  this.createMarker(json[i]);
		}
	}
};

function HMapFunc(mapDom, options) {
  this._mapDom = mapDom;
  this._options = options;
  this.map = new google.maps.Map(mapDom, this._options.mapOptions);
}

HMapFunc.prototype = HMap;

window.HMap = HMapFunc;
})();
