var HM = {

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
  	  html += HM.escapeHtml(p.title);
 	  html += "</div";
 	  return html;
	},
	mapOptions: {
	    center: new google.maps.LatLng(26.332807,-322),
	    zoom: 2,
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
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
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
					"color":"#3F7C8F"
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

HM.partners = [
	{
		title: "'Lotos' Disability Awareness and Learning Center (DALC)",
		location: "Azerbaijan",
		latlng: [40.428708, 47.852481]
	},
	{
		title: "99 Balloons /TEAM Ukraine",
		location: "US",
		latlng: [36.066975, -94.157049]
	}	
];


$(function(){
	var i, map, openInfowindow;
	
	map = new google.maps.Map(document.getElementById("map-canvas"), HM.mapOptions);
	
	function createMarker(p) {
		var loc, infowindow, marker;
		
		loc = new google.maps.LatLng( p.latlng[0], p.latlng[1]);
		marker = new google.maps.Marker(
				{
					icon: "http://maps.google.com/mapfiles/kml/pal4/icon49.png",
	    			position: loc,
	    			map: map,
	    			title: p.title
				});	
				
		infowindow = new google.maps.InfoWindow({
			content: HM.partnerHTML( p),
			maxWidth: 300,
		});

		google.maps.event.addListener(marker, 'click', function() {
		  if (openInfowindow) {
			openInfowindow.close();
		  }
      	  infowindow.open(marker.getMap('map'), marker);
		  openInfowindow = infowindow;
		});
	}
	
	for( i = 0; i < HM.partners.length; i++) {
		createMarker(HM.partners[i]);
	}
});
//google.maps.event.addDomListener(window, 'load', initialize);
