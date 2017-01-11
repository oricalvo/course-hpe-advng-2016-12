module.directive("myPanel", function () {
    var log = createLogger("myPanel");

    return {
        controller: function($scope, $element) {
            log("controller");

            $scope.$on("clockReady", function() {
                var time = $element.find("my-clock").text();
                console.log(time);
            });
        },
        compile: function() {
            return function postLink(scope, element) {
                console.log("link");

                setTimeout(function() {
                    var time = element.find("my-clock").text();
                    console.log(time);
                }, 5);
            }
        },
        template: "<div><my-clock></my-clock></div>"
    };
});
