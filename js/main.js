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
					"color":"#ffffff"
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
					"color":"#d2e3e6"
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
					"color":"#ffffff"
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
	}
];


$(function(){
	var i, p, loc, marker, infowindow, map;
	
	map = new google.maps.Map(document.getElementById("map-canvas"), HM.mapOptions);
	
	//initialize();
	for( i = 0; i < HM.partners.length; i++) {
		p = HM.partners[i];
		loc = new google.maps.LatLng( p.latlng[0], p.latlng[1]);
		marker = new google.maps.Marker(
				{
	    			position: loc,
	    			map: map,
	    			title: p.title
				});	
				
		infowindow = new google.maps.InfoWindow({
			content: HM.partnerHTML( p),
			maxWidth: 300,
		});

		google.maps.event.addListener(marker, 'click', function() {
//		  if (openInfowindow) {
//			  openInfowindow.close();
//		  }
      	  infowindow.open(marker.getMap('map'), marker);
//      openInfowindow = infowindow;
		});
		
	}
});
//google.maps.event.addDomListener(window, 'load', initialize);
