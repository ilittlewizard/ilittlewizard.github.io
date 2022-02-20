localization = {};
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
localization.strings = {
	"home": {
		"en": "Home",
		"zh_CN": "主页",
		"zh_TW": "主頁" 
	},
	"faq": {
		"en": "FAQ",
		"zh_CN": "常见问题",
		"zh_TW": "常見問題" 
	},
	"download": {
		"en": "Download",
		"zh_CN": "下载",
		"zh_TW": "下載" 
	},
	"home_description": {
		"en": "An android app that provides convenient functions for Blockman Go",
		"zh_CN": "一款为 Blockman Go 提供方便功能的Android 软件",
		"zh_TW": "一款為 Blockman Go 提供方便功能的Android 軟件" 
	},
	"home_download_now": {
		"en": "Download Now",
		"zh_CN": "立即下载",
		"zh_TW": "立即下載"
	},
	"faq_q1": {
		"en": "Q: Is this app malicious?",
		"zh_CN": "Q: 这是一款恶意软件吗?",
		"zh_TW": "Q: 這是一款惡意軟件嗎?"
	},
	"faq_a1": {
		"en": "A: As this app does not requires any permissions, it will not be able to access any data in your phone. Therefore, it is not a malicious app.",
		"zh_CN": "A: 此软件不需要任何权限即可使用，不会（亦无法）存取您手机里的任何资料。因此您可放心使用此软件。",
		"zh_TW": "A: 此軟件不需要任何權限即可使用，不會（亦無法）存取您手機裡的任何資料。因此您可放心使用此軟件。"
	},
	"faq_q2": {
		"en": "Q: Will this app steals your account?",
		"zh_CN": "Q: 这软件会盗号吗?",
		"zh_TW": "Q: 這軟件會盜號嗎?"
	},
	"faq_a2": {
		"en": "A: No, it won't. This app will not send your password to any server (except BG game server). It will neither save your password anywhere, including your local storage. Your account is guaranteed to be safe while using this app.",
		"zh_CN": "A: 此软件不会将你的密码发送到任何服务器 (BG服务器除外)，亦不会将其储存在任何地方 (包括本地储存空间)，并不会盗取您的帐号。",
		"zh_TW": "A: 此軟件不會將你的密碼發送到任何伺服器 (BG伺服器除外)，亦不會將其儲存在任何地方 (包括本地儲存空間)，並不會盜取您的帳號。。"
	},
	"download_license": {
		"en": "License Agreement",
		"zh_CN": "特许权协议",
		"zh_TW": "特許權協議"
	},
	"download_license_content": {
		"en": "Copyright 2022 iLittleWizard\n\nBGT (Android Package Name: com.wizard.bgt.personal) is a Freeware, you should not have been charged to obtain this software. You are free to redistribute BGT as long as it is not modified.\n\nThe author will not make any warranties, neither express nor implied. The author shall not be liable for any indirect or punitive damages, whether incurred directly or indirectly, any loss of data or other intangible losses."
	},
	"download_license_confirm": {
		"en": "I have read and accepted the terms in the license agreement",
		"zh_CN": "我已详阅及同意遵守上述特许权协议",
		"zh_TW": "我已詳閱及同意遵守上述特許權協議"
	},
	"download_apk": {
		"en": "Download",
		"zh_CN": "下载",
		"zh_TW": "下載"
	}
};

function init(){
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
