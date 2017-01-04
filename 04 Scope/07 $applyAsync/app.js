var module = angular.module("myApp", []);

module.controller("HomeCtrl", function($scope) {
    $scope.contacts = [
        {id:1, name: "Ori"},
        {id:2, name: "Roni"},
        {id:3, name: "Udi"},
    ];

    $scope.run = function() {
        setTimeout(function() {
            $scope.$applyAsync();
        }, 5);
    }
});

function ContactDetailsComponent() {
    console.log("ctor");
}

ContactDetailsComponent.prototype.$onDestroy = function() {
    console.log("dtor");
}

module.component("contactDetails", {
    controller: ContactDetailsComponent,
    template: "<span>{{$ctrl.contact.name}}</span>",
    bindings: {
        "contact": "<",
    }
});

