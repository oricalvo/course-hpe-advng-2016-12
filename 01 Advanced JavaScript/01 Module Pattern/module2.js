var myApp = myApp || {};

myApp.module2 = (function() {
	"use strict";

	function run() {
		console.log("module2.run");
	}
	
	return {
		run: run,
	}
})();