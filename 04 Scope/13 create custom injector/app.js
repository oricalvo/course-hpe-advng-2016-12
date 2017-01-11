var module = angular.module("myApp", []);

module.controller("HomeCtrl", function($scope) {
    var injector = angular.injector([function($provide) {
        console.log(!!$provide);

        $provide.factory("xxx", function() {
            return {
                run: function() {
                    console.log("run");
                }
            }
        });
    }]);

    var xxx = injector.get("xxx");
    xxx.run();

    console.log(!!injector);
});

function my() {
    setTimeout(function() {
    }, 10);

    while (true) {
    }
}
