var module = angular.module("myApp", []);

module.controller("HomeCtrl", function($scope, $element) {
    $scope.title = "XXX";

    $scope.change = function() {
        $element.append("<span>{{yyy}}</span>");
    }
});

