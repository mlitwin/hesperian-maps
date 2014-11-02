/* HMap class - handles map creation and manipulation
 *
 * Usage: var map = new HMap(domElement, options);
 * map.addPartners(jsonArray);
 *
 * domElement = DOM to attach map to.
 * options:
 *   partnerTemplate: (required) function(p) returning HTML for info window for partner
 *   mapOptions: (required) google map creation options.
 *   defaultIcon: (optional) uri for partner marker icon, if not specified in JSON.
 * 
 */
(function(maps) {

var openInfowindow;

var HMap = {
    partnerHTML: function(p) {
      return this._options.partnerTemplate(p);
	},
	markerSpec: function(p) {
		var loc = new maps.LatLng( p.latlng[0], p.latlng[1]),
			icon = p.icon || this.defaultIcon;
		return {
					icon: icon,
	    			position: loc,
	    			map: this.map,
	    			title: p.title
				};
	},
	createMarker: function (p) {
		var loc, infowindow, marker;
		
		loc = new maps.LatLng( p.latlng[0], p.latlng[1]);
		marker = new maps.Marker(this.markerSpec(p));	
				
		infowindow = new maps.InfoWindow({
			content: this.partnerHTML( p),
			maxWidth: 300,
		});

		maps.event.addListener(marker, 'click', function() {
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
	}
};

function HMapFunc(mapDom, options) {
  this._mapDom = mapDom;
  this._options = options;
  this.defaultIcon = options.defaultIcon || "http://maps.google.com/mapfiles/kml/pal4/icon49.png";
  this.map = new maps.Map(mapDom, this._options.mapOptions);
}

HMapFunc.prototype = HMap;

window.HMap = HMapFunc;
})(google.maps);
