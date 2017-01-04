var module = angular.module("myApp", []);

module.controller("HomeCtrl", function($scope) {
    $scope.title = "XXX";

    $scope.$watch("counter", function(newValue, oldValue) {
        if(newValue == oldValue) {
            return;
        }

        console.log(oldValue + " --> " + newValue);
    });
});
