var myApp = myApp || {};

myApp.module1 = (function($) {
	"use strict";
	
	var lastActivity;
	var cachedProducts;
	
	function run() {
		console.log("module1.run");
	}

	function getAllProducts() {
	}

	return {
		run: run,
	};
})(jQuery);
