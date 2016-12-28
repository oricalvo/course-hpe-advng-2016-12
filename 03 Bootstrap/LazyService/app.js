var module = angular.module("myApp", []);

module.config(function($provide) {
    //window.$provide = $provide;

    //module.factory = $provide.factory;
});

module.controller("HomeCtrl", function($scope, $injector) {
    $scope.title = "XXX";

    $scope.load = function() {
        //$.getScript("myService.js");

        require(["myService.js"], function() {
            console.log("DONE");

            var myService = $injector.get("myService");
            myService.run();
        });
    }
});

