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
 *   maxInfowindowWidth: (optional) max width for info window. default 300
 * 
 */
(function(maps) {

var openInfowindow;

var HMap = {
    partnerHTML: function(p) {
      return this._options.partnerTemplate(p);
	},
	markerIcon: function(p) {
		var icon = p.icon || this.defaultIcon;
		
		if( typeof icon === 'function') {
			icon = icon(p);
		}
		
		return icon;
	},
	markerSpec: function(p) {
		var loc = new maps.LatLng( p.latlng[0], p.latlng[1]);
		
		return {
					icon: this.markerIcon(p),
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
			maxWidth: this.maxInfowindowWidth,
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
  this.maxInfowindowWidth = options.maxInfowindowWidth || 300;
  this.map = new maps.Map(mapDom, this._options.mapOptions);
}

HMapFunc.prototype = HMap;

window.HMap = HMapFunc;
})(google.maps);
