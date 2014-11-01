HM.getPartnersJSON = $.Deferred().resolve(HM.partners);

$(function(){
	var i, map;
	
	map = new google.maps.Map(document.getElementById("map-canvas"), HM.mapOptions);
	
	
	HM.getPartnersJSON.then(function(partners) {
		HM.createPartners(map, partners);
	});
	
	/*
	$.ajax("allpartners.json").then(function(partners) {
		HM.createMarkersFromJSON(map, partners);
	});
	*/
});

