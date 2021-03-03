var mobileNative = (function () {

	'use strict';

	var mobile = {};

	mobile.urls = {
		MOBILENATIVEINTERCEPT: "https://stTest.com/STTEST?interceptType=",
	}

	mobile.invokeAlert = function invokeAlert() {
		alert("Test Success!!");
	}

	mobile.invokeTracktoMobile = function simplifiedTrackingToMobile(){  
		var url = mobile._getTrackUrl();
		alert(url);
		window.location = url;
	} 

	
	mobile._getTrackUrl = function getTrackUrl(){
		return mobile.urls["MOBILENATIVEINTERCEPT"] + "st_test";;
	};


return mobile;

})();