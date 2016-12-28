var module = angular.module("myApp", []);

module.controller("HomeCtrl", function($scope, $element) {
    $scope.title = "XXX";

    $scope.contacts = [
        {id:1, name: "Ori"},
        {id:2, name: "Roni"},
    ];

    $scope.change = function() {
        $element.append("<span>{{yyy}}</span>");
    }
});

