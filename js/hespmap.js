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

