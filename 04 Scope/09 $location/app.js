var module = angular.module("myApp", []);

function MyProvider() {
    this.$get = function() {
        //console.log("$get");

        var service = {

        };

        return service;
    }
}

// MyProvider.prototype.$get = function() {
// }

module.provider("my", MyProvider);

module.factory("blabla", function() {
    return {

    };
});

//var x;
module.config(function($locationProvider, myProvider, blablaProvider, $httpProvider) {

    //x = blablaProvider.$get();
    //var y = blablaProvider.$get();
    //console.log(x == y);

    $locationProvider.html5Mode(true);

    var originalGet = $httpProvider.$get;
    $httpProvider.$get = function() {
        console.log("XXX");

        return {
            myHttp: true,
        };
    }

    //console.log(!!myProvider);
});

module.decorator("blabla", function($delegate) {

    $delegate.xxx = function() {
    }

    return $delegate;
});

module.controller("HomeCtrl", function($scope, $location, my, blabla, $http) {
    $scope.run = function() {
        $location.url("abc?id=1");
    }

    console.log($http);
    console.log(blabla);

    //console.log(blabla == x);

    //console.log(!!my);
});

function MyCtrl1($scope) {
    $scope.xxx = xxxFactory($scope);
}

function MyCtrl2($scope) {
    $scope.xxx = xxxFactory($scope);
}

function xxxFactory($scope) {
    return function xxx(noDataStatus) {
        console.log($scope.id);
    }
}
