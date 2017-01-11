module.directive("myClock", function () {
    var log = createLogger("myClock");

    return {
        controller: function($scope) {
            log("controller");

            $scope.time = new Date();
        },
        templateUrl: "components/clock.html"
    };
});
