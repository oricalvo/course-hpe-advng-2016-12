var module = angular.module("myApp", []);

module.directive("myModel", function($parse) {

    var log = console.log.bind(console, "myModel:");

    var ddo = {
        restrict: "A",
        compile: function(element, attrs) {
            log("compile");

            var expr = attrs.myModel;
            log("parsing: " + expr);
            var exprFn = $parse(expr);
            if(!exprFn.assign) {
                throw new Error("my-model expects assignable expression");
            }

            return function link(scope, element, attrs) {
                log("link");

                scope.$watch(expr, function(newValue) {
                    element.val(newValue);
                });

                element.on("input", function() {
                    scope.$apply(function() {
                        var val = element.val();

                        exprFn.assign(scope, val);
                    });
                });
            }
        },
    };

    return ddo;
});


module.controller("HomeCtrl", function($scope, $compile, $timeout) {
    $scope.name = "123";

    $scope.contacts = [
        {id: 1, name: "Ori1", model: "YYY"},
        {id: 2, name: "Ori2", model: "YYY"},
        {id: 3, name: "Ori3", model: "YYY"},
    ];

    $timeout(function() {
        $scope.name = "XXX";
    }, 1000);

    $scope.run = function() {
    }
});
