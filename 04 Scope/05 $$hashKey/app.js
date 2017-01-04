var module = angular.module("myApp", []);

module.controller("HomeCtrl", function($scope) {
    var ori = {id:1, name: "Ori"};
    $scope.contacts = [
        ori,
        {id:2, name: "Roni"},
        {id:3, name: "Udi", $$hashKey: "object:3"},
        ori
    ];

    $scope.dump = function() {
        console.log($scope.contacts);
    }
});

