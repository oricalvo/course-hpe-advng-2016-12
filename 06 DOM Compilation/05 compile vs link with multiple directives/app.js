var module = angular.module("myApp", []);

for(var i=1; i<=2; i++) {
    (function() {
        var log = console.log.bind(console, "myDir" + i);

        module.directive("myDir" + i, function () {
            return {
                controller: function() {
                    this.xxx = this.xxx || 0;
                    ++this.xxx;
                    log("controller", this.xxx);
                },
                compile: function () {
                    log("compile");

                    return {
                        pre: function (scope) {
                            this.xxx = this.xxx || 0;
                            ++this.xxx;

                            scope.xxx = scope.xxx || 0;
                            ++scope.xxx;

                            log("pre", this.xxx, scope.xxx);
                        },
                        post: function () {
                            log("post", this.xxx);
                        }
                    }
                }
            };
        });
    })();
}

module.controller("HomeCtrl", function($scope, $parse) {
});
