var mobileNative = (function () {

	'use strict';

	var mobile = {};

	mobile.urls = {
		MOBILENATIVEINTERCEPT: "https://"+ document.domain  +"/mobileNativeIntercept?interceptType=",
		
		//CONTACT: "https://"+ document.domain  +"/mobile/contact",
		//DIMENSIONS: "https://"+ document.domain + "/mobile/dimensions",
		//TRACK: "https://" + document.domain + "/mobile/track",
		//APPS: "https://" + document.domain + "/mobile/apps",
		//DCWA: "https://" + document.domain + "/mobile/dcwa"
	}

	mobile.isMobileApp = function(){
		var url = mobile._getWindow();
		if(url.includes("platform")){
			return true;
		}
		return false;
	}

	mobile.invokeTracktoMobile = function simplifiedTrackingToMobile(trackingNumber, trackStatusCode, trackStatusDescription){  
		var url = mobile._getTrackUrl();
		window.location = url;
	} 

	mobile.invokeErrorTracking = function errorTracking(errorStatusCode){  
		var url = mobile._getErrorTrackingUrl();
		window.location = url;
	} 

	mobile.invokeMobileLogin = function toMobileLogin(){  
		var url = mobile._getMobileLoginUrl();
		window.location = url;
	} 

	mobile.invokeMobileEnrollment = function toMobileEnrollment(){  
		var url = mobile._getMobileEnrollmentUrl();
		window.location = url;
	} 

	mobile.invokeMobileDeliveryPlanner = function toMobileDeliveryPlanner(){  
		var url = mobile._getMobilePlannerUrl();
		window.location = url;
	} 

	mobile.invokeMobilePreferences = function toMobilePreferences(){  
		var url = mobile._getMobilePreferencesUrl();
		window.location = url;
	} 

	mobile.invokeLoadUrlInMobileBrowser = function loadInMobileBrowser(urlToLoad) {
		var url = mobile._getMobilePushToBrowserUrl(urlToLoad);
		window.location = url;
	}

	mobile.invokeNativeMaps = function loadNativeMaps(formattedFullAddressString) {
		var url = mobile._getNativeMobileMapsUrl(formattedFullAddressString);
		window.location = url;
	}

	mobile.invokeMobileADLPreferences = function loadNativeAlternateDeliveryLocationPreferences() {
		var url = mobile._getMobileADLPreferencesUrl();
		window.location = url;
	}

	mobile.invokeMobileSurepostUpgrade = function loadNativeSurepostUpgrade() {
		var url = mobile._getMobileSurepostUpgradeUrl();
		window.location = url;
	}

	mobile.invokeMobileDeliveryHold = function loadNativeDeliveryHold() {
		var url = mobile._getMobileDeliveryHoldUrl();
		window.location = url;
	}

	mobile.invokeSessionRelogin = function sessionRelogin(trackingNumber){  
		var url = mobile._getSessionReloginUrl(trackingNumber);
		window.location = url;
	} 

	mobile.invokeMobilePrint = function toMobilePrint(){  
		var url = mobile._getMobilePrintUrl();
		window.location = url;
	} 

	//(DEPRECATED)  Replaced with 
	mobile.invokeMobileAlertsPreferences = function loadNativeAlerts() {
		var url = mobile._getMobileAlertsUrl();
		window.location = url;
	}

	mobile.invokeNativeMobileAlerts = function invokeNativeMobileAlerts(trackingNumber, alertType) {
		var url = mobile._getMobileAlertsUrl(trackingNumber, alertType);
		window.location = url;
	}
	
	mobile.invokeNativeMobileDeliveryChange = function invokeNativeDeliveryChange(trackingNumber, interceptOption){  
		var url = mobile._getNativeMobileDeliveryChangeUrl(trackingNumber, interceptOption);
		window.location = url;
	} 

	mobile.invokeMobileAddToWallet = function loadNativeAddToWallet(trackingNumber){  
		var url = mobile._getNativeAddToWalletUrl(trackingNumber);
		window.location = url;
	} 



	mobile._getTrackUrl = function getTrackUrl(){
		return mobile.urls["MOBILENATIVEINTERCEPT"] + "SimplifiedTrackingToMobile";
	};

	mobile._getErrorTrackingUrl = function _getErrorTrackingUrl(){
		return mobile.urls["MOBILENATIVEINTERCEPT"] + "toNativeErrorTracking";
	};

	mobile._getMobileLoginUrl = function getMobileLoginUrl(){
		return mobile.urls["MOBILENATIVEINTERCEPT"] + "toNativeLogin";
	};

	mobile._getMobileEnrollmentUrl = function getMobileEnrollmentUrl(){
		return mobile.urls["MOBILENATIVEINTERCEPT"] + "toNativeEnrollment";
	};

	mobile._getMobilePlannerUrl = function getMobilePlannerUrl(){
		return mobile.urls["MOBILENATIVEINTERCEPT"] + "toNativePlanner";
	};

	mobile._getMobilePreferencesUrl = function getMobilePreferencesUrl(){
		return mobile.urls["MOBILENATIVEINTERCEPT"] + "toNativePreferences";
	};

	mobile._getMobilePushToBrowserUrl = function getMobilePushToBrowserUrl(urlToLoad){
		return mobile.urls["MOBILENATIVEINTERCEPT"] + "toNativeBrowser&urlToLoad=" + urlToLoad;
	};

	mobile._getNativeMobileMapsUrl = function getNativeMobileMapsUrl(formattedFullAddressString){
		return mobile.urls["MOBILENATIVEINTERCEPT"] + "toNativeMaps&UAPNativeAddress=" + formattedFullAddressString;
	};

	mobile._getMobileADLPreferencesUrl = function getMobileADLPreferencesURL(){
		return mobile.urls["MOBILENATIVEINTERCEPT"] + "toNativeAlternateDeliveryPreferences";
	};

	mobile._getMobileSurepostUpgradeUrl = function getMobileSurepostUpgradeURL(){
		return mobile.urls["MOBILENATIVEINTERCEPT"] + "toNativePackageUpgradeOptions";
	};
	
	mobile._getMobileDeliveryHoldUrl = function getMobileDeliveryHoldURL(){
		return mobile.urls["MOBILENATIVEINTERCEPT"] + "toNativeDeliveryHold";
	};

	mobile._getSessionReloginUrl = function getSessionReloginUrl(trackingNumber){
			return mobile.urls["MOBILENATIVEINTERCEPT"] + "toNativeSessionRelogin&trackingNumber=" + trackingNumber;
	};
	
	mobile._getMobilePrintUrl = function getMobilePrintURL(){
		return mobile.urls["MOBILENATIVEINTERCEPT"] + "toNativePrint";
	};
	
	//(DEPRECATED)
	mobile._getMobileAlertsUrl = function getMobileAlertsURL(){
			return mobile.urls["MOBILENATIVEINTERCEPT"] + "toNativeAlerts";
	};

	mobile._getMobileAlertsUrl = function getMobileAlertsURL(trackingNumber, alertType){
		return mobile.urls["MOBILENATIVEINTERCEPT"] + "toNativeAlerts&trackingNumber=" + trackingNumber + "&alertType=" + alertType;
	};

	mobile._getNativeMobileDeliveryChangeUrl = function getNativeMobileDeliveryChangeUrl(){
		return mobile.urls["MOBILENATIVEINTERCEPT"] + "toNativeDeliveryChange&trackingNumber=" + trackingNumber + "&interceptOption=" + interceptOption;
	};

    mobile._getNativeAddToWalletUrl = function getNativeAddToWalletUrl(){
		return mobile.urls["MOBILENATIVEINTERCEPT"] + "toNativeAddToWallet&trackingNumber=" + trackingNumber;
	};

	//UNUSED UTILITY FUNCTIONS 

	mobile.events = {
		CONTACT: "contact",
		DIMENSIONS: "dimensions",
	};

	mobile.help = function(){
		window.open("https://tfs.ups.com/tfs/UpsProd/P02AGit_UPSMOBILE/_wiki/wikis/P02AGit_UPSMOBILE.wiki?wikiVersion=GBwikiMaster&pagePath=%2FMobile%20Native%20JavaScript%20Library&pageId=1671");
	}
	
	mobile._getWindow = function getWindow(){
		return window.location.href;
	};

	mobile.isIphoneApp = function(){
		var url = mobile._getWindow();
		if(url.includes("iphone")|| url.includes("iPhoneOS")){
			return true;
		}
		return false
	}

	mobile.isAndroidApp = function(){
		var url = mobile._getWindow();

		if(url.includes("android")|| url.includes("androidOS")){
			return true;
		}
		return false;
	}

	mobile.invokeContact = function () {
		var url = mobile.urls["CONTACT"]
        window.location = url;
	};

	mobile.triggerContactEnv = function (contact) {
		// Create a new event
		var event = new CustomEvent(mobile.events['CONTACT'],{
			detail: {
			  data:contact
			}
		  });
		// Dispatch the event
		document.dispatchEvent(event);
	};

	mobile.invokeDimensionalizer = function(){
		var url = mobile.urls["DIMENSIONS"]
        window.location = url;
	}

	mobile.triggerDimensionalizerEnv = function (dimensions) {
		// Create a new event
		var event = new CustomEvent(mobile.events['DIMENSIONS'],{
			detail: {
			  data:dimensions
			}
		  });
		// Dispatch the event
		document.dispatchEvent(event);
	};

return mobile;

})();