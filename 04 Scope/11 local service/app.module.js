var appModule = angular.module("myApp", []);
var $injector;

appModule.run(["$injector", function(_$injector) {
    $injector = _$injector;
}]);

function getService(scope, serviceName) {
    while(true) {
        if (scope.$ctrl && scope.$ctrl.$injector) {
            try {
                var service = scope.$ctrl.$injector.get(serviceName);
                return service;
            }
            catch (err) {
            }
        }

        scope = scope.$parent;
        while(!scope.$ctrl) {
            scope = scope.$parent;
        }

        if(!scope) {
            return $injector.get(serviceName);
        }
    }
}
