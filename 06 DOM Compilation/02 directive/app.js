var module = angular.module("myApp", []);

module.directive("myDir", function() {
    var ddo = {
        restrict: "A",
        compile: function(element, attrs) {
            console.log("element", element);
            console.log("attrs", attrs);
        }
    };

    return ddo;
});


module.controller("HomeCtrl", function($scope, $compile) {
    $scope.run = function() {

        setTimeout(function() {
            var template = angular.element("<span id='8' my-dir>{{name}}</span>");
            console.log(template[0].outerHTML);

            console.log("");
            console.log("Compiling");
            var linkFn = $compile(template);
            console.log(template[0].outerHTML);

            console.log("");
            console.log("Linking");
            $scope.name = "Blabla";
            linkFn($scope);
            console.log(template[0].outerHTML);

            console.log("");
            console.log("Run digest");
            $scope.$apply();
            console.log(template[0].outerHTML);
        }, 0);

    }
});

function my() {
    setTimeout(function() {
    }, 10);

    while (true) {
    }
}
