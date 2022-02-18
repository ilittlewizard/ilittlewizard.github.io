var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function init(){
	if(isMobile.any()){
		var windowWidth = Math.max(
			document.documentElement.clientWidth || 0,
			window.innerWidth || 0
		);
		var pageWidth = 0;
		function scan(elements) {
  	  for (var i = elements.length - 1; i >= 0; i--) {
  	    if (elements[i].scrollWidth && elements[i].scrollHeight) {
  	      pageWidth = Math.max(
						Math.max(elements[i].scrollWidth, elements[i].clientWidth), pageWidth
					);
  	    }
  	    if (elements[i].childNodes.length) 
					scan(elements[i].childNodes);
  	  }
  	}
  	scan(document.body.childNodes);
		scale = windowWidth / (pageWidth + 200);
		document.body.style.transformOrigin = "left top";
		document.body.style.transform = "scale(" + scale + ")";
		document.body.style.width = (100 / scale) + "%";
	}
	query = new URLSearchParams(location.search).get("lang");
	localization.update(query
		|| window.navigator.userLanguage
		|| window.navigator.language
	);
}

function visit(url){
	location.href = url;
}
