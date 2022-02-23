localization.language = "en";
localization.getString = function(stringId){
	str = localization.strings[stringId];
	if(typeof str != "object")
		return undefined;
	if (typeof str[localization.language] != "string")
		return str["en"];
	return str[localization.language];
}
localization.update = function(lang){
	localization.language = lang.replace("-", "_");
	document.querySelectorAll('[string-id]').forEach(elem => {
		elem.innerHTML = localization.getString(elem.getAttribute("string-id"), lang)
	});
}

function init(){
	query = new URLSearchParams(location.search).get("lang");
	localization.update(query
		|| window.navigator.userLanguage
		|| window.navigator.language
	);
	
	var matcher = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;
	if(navigator.userAgent.match(matcher)){
		var windowWidth = Math.max(
			document.documentElement.clientWidth || 0,
			window.innerWidth || 0
		);
		var pageWidth = 0;
		function scan(elements) {
  	  		for (var i = elements.length - 1; i >= 0; i--) {
  	    		if (elements[i].scrollWidth && elements[i].scrollHeight) {
					elementWidth= Math.max(
						elements[i].scrollWidth,
						elements[i].clientWidth
					);
  	      			pageWidth = Math.max(
						elementWidth, 
						pageWidth
					);
  	    		}
  	    		if (elements[i].childNodes.length) 
					scan(elements[i].childNodes);
			}
		}
		scan(document.body.childNodes);
		scale = windowWidth / (pageWidth + 50);
		document.body.style.transformOrigin = "left top";
		document.body.style.transform = "scale(" + scale + ")";
		document.body.style.width = (100 / scale) + "%";
  }
}

function visit(url){
	location.href = url;
}
