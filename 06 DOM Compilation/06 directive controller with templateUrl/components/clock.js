module.directive("myClock", function () {
    var log = createLogger("myClock");

    return {
        controller: function($scope) {
            log("controller");

            $scope.time = new Date();
        },
        link: function(scope) {
            console.log("link");

            scope.$emit("clockReady");
        },
        templateUrl: "components/clock.html"
    };
});
