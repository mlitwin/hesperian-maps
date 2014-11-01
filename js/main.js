HMap.getPartnersJSON = $.Deferred().resolve(HMap.partners);

$(function(){
	var i, map;
	
	map = new google.maps.Map(document.getElementById("map-canvas"), HMap.mapOptions);
	
	
	HMap.getPartnersJSON.then(function(partners) {
		HMap.createPartners(map, partners);
	});
	
	/*
	$.ajax("allpartners.json").then(function(partners) {
		HM.createMarkersFromJSON(map, partners);
	});
	*/
});

