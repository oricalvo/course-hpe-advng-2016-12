var module = angular.module("myApp", []);

module.controller("HomeCtrl", function($scope, $compile) {
    $scope.run = function() {

        setTimeout(function() {
            var template = angular.element("<span>{{name}}</span>");
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
            //console.log(res);

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
