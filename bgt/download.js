function update(cb){
	download = document.getElementById("download");
	download.classList = "centered " + (cb.checked ?
		"rounded-button" : "locked-rounded-button"
	);
	download.onclick = (!cb.checked) ? undefined : () => {
		visit(localization.getString("download_link"));
	};
}
localization = {};
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
	"download_link":{
		"en": "https://raw.githubusercontent.com/ilittlewizard/bgt/main/personal/BGT_Personal-v2.0.6.apk"
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
	},
	"version_history": {
		"en": "Version History",
		"zh_CN": "版本历史",
		"zh_TW": "版本歷史"
	},
	"bg_toolbox_1.0.1": {
		"en": "-The predecessor of this app",
		"zh_CN": "-BGT Personal 前身",
		"zh_TW": "-BGT Personal 前身"
	},
	"bgt_personal_1.0.1": {
		"en": "-New Feature: Collect ADs reward",
		"zh_CN": "-增加领取广告奖励的功能",
		"zh_TW": "-增加領取廣告獎勵的功能"
	},
	"bgt_personal_2.0.1": {
		"en": "-New Feature: Bulk Friend Deletion\n-New Feature: Show Account Info",
		"zh_CN": "-增加批量删除好友的功能\n-增加查看帐户创建时间等个人资料的功能",
		"zh_TW": "-增加批量刪除好友的功能\n-增加查看帳戶創建時間等個人資料的功能"
	},
	"bgt_personal_2.0.2": {
		"en": "-Fixed crashes due to SSL certificate problems",
		"zh_CN": "-修复取用网络时因SSL凭證出现问题导致闪退的问题",
		"zh_TW": "-修復取用網絡時因SSL憑證出現問題導致閃退的問題"
	},
	"bgt_personal_2.0.3": {
		"en": "-Added log collecting system\n-Added application icon",
		"zh_CN": "-新增日志收集系统\n-增加应用图示",
		"zh_TW": "-新增日誌收集系統\n-增加應用圖示"
	},
    "bgt_personal_2.0.4": {
    	"en": "-New Feature: Transparent Icon\n-New Feature: Default Icon",
    	"zh_CN": "-增加设置透明头像的功能\n-增加设置原始头像的功能",
    	"zh_TW": "-增加設置透明頭像的功能\n-增加設置原始頭像的功能"
    },
    "bgt_personal_2.0.5": {
    	"en": "-New Feature: Get Lucky Draw Reward\n-New Feature: Password Autofill\n-Improved Dark Mode Compatibility\n-Improved Log Message",
       	"zh_CN": "-新增领取游戏轮盘奖励的功能\n-新增自动填入密码的功能\n-改善与夜间模式的兼容性\n-改善日志讯息",
       	"zh_TW": "-新增領取遊戲輪盤獎勵的功能\n-新增自動填入密碼的功能\n-改善與夜間模式的兼容性\n-改善日誌訊息"
    },
    "bgt_personal_2.0.6": {
        "en": "-New Feature: Change Color Name\n-Fixed bugs due to regional restrictions",
        "zh_CN": "-新增更改颜色名字的功能\n-修复部分地区无法登入的问题",
        "zh_TW": "-新增更改顏色名字的功能\n-修復部分地區無法登入的問題"
    }
};