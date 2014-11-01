(function() {

var openInfowindow;

var HMap = {

	escapeHtml: function(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
	},
    partnerHTML:function(p) {
 	  var html = '<div class="hmap-info">';
 	  if( p.url) {
 	  	  html += "<a href='" + HMap.escapeHtml(p.url) + "'>";
  	  	  html += HMap.escapeHtml(p.title);
  	  	  html += "</a>";
 	  } else {
    	  html += HMap.escapeHtml(p.title);
 	  }
 
 	  html += "</div>";
 	  return html;
	},
	markerSpec: function(map, p) {
		var loc = new google.maps.LatLng( p.latlng[0], p.latlng[1]);
		return {
					icon: "http://maps.google.com/mapfiles/kml/pal4/icon49.png",
	    			position: loc,
	    			map: map,
	    			title: p.title
				};
	},
	createMarker: function (map, p) {
		var loc, infowindow, marker;
		
		loc = new google.maps.LatLng( p.latlng[0], p.latlng[1]);
		marker = new google.maps.Marker(HMap.markerSpec(map, p));	
				
		infowindow = new google.maps.InfoWindow({
			content: HMap.partnerHTML( p),
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
	createPartners: function(map, json) {
		var i;
		for(i = 0; i < json.length; i++) {
		  HMap.createMarker(map, json[i]);
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

window.HMap = HMap;
})();

