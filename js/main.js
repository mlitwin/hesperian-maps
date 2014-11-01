HM.getPartnersJSON = $.Deferred().resolve(HM.partners);

$(function(){
	var i, map;
	
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
	
	HM.getPartnersJSON.then(function(partners) {
		HM.createPartners(map, partners);
	});
	
	/*
	$.ajax("allpartners.json").then(function(partners) {
		HM.createMarkersFromJSON(map, partners);
	});
	*/
});

