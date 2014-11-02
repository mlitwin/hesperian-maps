(function() {

var partnerHandlebars = '\
<div class="hmap-info">\
 <a href="{{url}}" target="_blank">{{title}}</a>\
</div>';

var partnerTemplate = Handlebars.compile(partnerHandlebars);


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
		url: "http://www.hesperian.org",
		location: "US",
		latlng: [36.066975, -94.157049]
	}	
];
  	
  	map.addPartners(partners);
/*
	/*
	$.ajax("allpartners.json").then(function(partners) {
		HM.createMarkersFromJSON(map, partners);
	});
	*/
});	


})();

