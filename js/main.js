google.maps.event.addDomListener(window, 'load', function(){
  var map = new HMap(document.getElementById("map-canvas"),
  	{
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

