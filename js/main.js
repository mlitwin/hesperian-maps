var ny = {
	mapsAPIKey: "AIzaSyD5I8RklLfFwIeqdd49HZ8hXV6xfOwUBbM",
	getAddr: function(address) {
		return 	$.getJSON("https:///maps.googleapis.com/maps/api/geocode/json?address=" +
			encodeURIComponent(address) + ",+New+York,+NY&key=" + ny.mapsAPIKey);
	}
};

function initialize() {
  var mapOptions = {
	    center: new google.maps.LatLng(26.332807,-322),
	    zoom: 1,
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
],
	  };
var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);
    
var sw = new google.maps.LatLng(-90 ,-180),
	ne = new google.maps.LatLng(90 ,180),
	bounds = new google.maps.LatLngBounds(sw, ne);
	
	//map.fitBounds(bounds);

ny.map = map;
}

$(function(){
	var i, p, loc, marker, infowindow;
	
	initialize();
	for( i = 0; i < HM.partners.length; i++) {
		p = HM.partners[i];
		loc = new google.maps.LatLng( p.latlng[0], p.latlng[1]);
		marker = new google.maps.Marker(
				{
	    			position: loc,
	    			map: ny.map,
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
