(function() {

var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

function escapeHtml(string) {
	return String(string).replace(/[&<>"'\/]/g, function (s) {
	  return entityMap[s];
	});
}

function partnerTemplate(p) {
  var html = '<div class="hmap-info">';
  if( p.url) {
  	html += '<a href="' + escapeHtml(p.url) + '" target="_blank">' + escapeHtml(p.title) + '</a>';
  } else {
  	html += escapeHtml(p.title);
  }
  
  html += '</div>';
  return html;
}


var mapOptions = {
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
};

google.maps.event.addDomListener(window, 'load', function(){
  var map = new HMap(document.getElementById("map-canvas"),
  	{
  		'partnerTemplate': partnerTemplate,
  		'mapOptions': mapOptions
  	});
  	
  	
var partners = [
	{
		title: "'Lotos' Disability Awareness and Learning Center (DALC)",
		url: "http://www.hesperian.org",
		location: "Azerbaijan",
		latlng: [40.428708, 47.852481]
	},
	{
		title: "99 Balloons /TEAM Ukraine",
		location: "US",
		latlng: [36.066975, -94.157049]
	}	
];
  	
  	map.addPartners(partners);
});	


})();

