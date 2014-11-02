(function() {

var openInfowindow,
  partnerHandlebars = '\
<div class="hmap-info">\
 <a href="{{url}}" target="_blank">{{title}}</a>\
</div>';

var partnerTemplate = Handlebars.compile(partnerHandlebars);


var HMap = {
    partnerHTML: function(p) {
      return partnerTemplate(p);
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
	},
	mapOptions: {
	    center: new google.maps.LatLng(45,-362),
	    zoom: 2,
	    minZoom: 2,
	    zoomControl: true,
	    zoomControlOptions: {
	      style: google.maps.ZoomControlStyle.SMALL,
	    },
	    disableDoubleClickZoom: true,
	    mapTypeControl: false,
	    mapTypeControlOptions: {
	      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
	    },
	    scaleControl: true,
	    scrollwheel: true,
	    streetViewControl: false,
	    draggable : true,
	    overviewMapControl: true,
	    overviewMapControlOptions: {
	      opened: false,
	    },
	    mapTypeId: google.maps.MapTypeId.TERRAIN,
		styles: [
		   {
			  "stylers":[
				 {
					"visibility":"off"
				 }
			  ]
		   },
		   {
			  "featureType":"water",
			  "stylers":[
				 {
					"visibility":"simplified"
				 },
				 {
					"color":"#FAE8AA"
				 }
			  ]
		   },
		   {
			  "featureType":"landscape",
			  "stylers":[
				 {
					"visibility":"on"
				 },
				 {
					"color":"#4C8F9E"
				 }
			  ]
		   },
		   {
			  "featureType":"administrative.country",
			  "elementType":"geometry",
			  "stylers":[
				 {
					"visibility":"on"
				 },
				 {
					"color":"#AAAAAA"
				 },
				 {
					"weight":1.5
				 }
			  ]
		   },
		   {
			  "color":"#ffffff"
		   }
		]
	}
};

function HMapFunc(mapDom, options) {
  this._mapDom = mapDom;
  this._options = options;
  this.map = new google.maps.Map(mapDom, HMap.mapOptions);
}

HMapFunc.prototype = HMap;

window.HMap = HMapFunc;
})();

