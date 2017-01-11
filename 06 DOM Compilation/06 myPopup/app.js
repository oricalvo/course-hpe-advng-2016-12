
module.controller("HomeCtrl", function($scope, $parse) {
    $scope.xxx = 42;

    console.log("ng-controller", $scope);

    $scope.showPopup = function() {
        $scope.popup.show();
    }

    $scope.run = function() {
        console.log("run");
    }
});
