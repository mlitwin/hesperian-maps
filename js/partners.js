var HM = {}; // namespace

HM.escapeHtml = function(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
};


HM.partners = [
	{
		title: "'Lotos' Disability Awareness and Learning Center (DALC)",
		location: "Azerbaijan",
		latlng: [40.428708, 47.852481]
	}
];

HM.partnerHTML = function(p) {
  var html = '<div class="hmap-info">';
  html += HM.escapeHtml(p.title);
  html += "</div";
  return html;
}

