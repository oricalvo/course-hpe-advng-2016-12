var module = angular.module("myApp", []);

module.run(function($rootScope) {
    console.log($rootScope.constructor.prototype);

    var originalDigest = $rootScope.constructor.prototype.$digest;

    var digestCount = 0;
    var iterationCount = 0;

    $rootScope.constructor.prototype.$digest = function() {
        iterationCount = 0;

        ++digestCount;
        console.log("DIGEST:" + digestCount);

        return originalDigest.apply(this, arguments);
    }

    $rootScope.$watch(function() {
        iterationCount++;

        console.log("ITERATION:" + iterationCount);
    });
});

module.controller("HomeCtrl", function($scope, $element, $timeout) {
    $scope.counter = 0;
    $scope.counter2 = 0;
    $scope.contacts = [
        {id:1, name: "Ori"},
    ];

    $scope.run = function() {
        $scope.counter++;

        //$scope.contacts.push({id: 1, name: "Ori"});
        //$scope.contacts[0].name = "XXX";
        $scope.contacts[0] = {id:1, name: "Ori"};

        $scope.$apply(function() {
            $scope.xxx = 123;
        });

        // $scope.xxx = 123;
        // $scope.$apply();
    }

    $timeout(function() {
        $scope.$watch("counter", function () {
            ++$scope.counter2;
        });
    }, 0);

    $scope.$watchCollection("contacts", function() {
        console.log("contacts CHANGED");
    });
});

