var module = angular.module("myApp", []);

module.controller("HomeCtrl", function($scope, contactService) {
    $scope.contacts = [
        {id:1, name: "Ori"},
        {id:2, name: "Roni"},
        {id:3, name: "Udi"},
    ];

    $scope.clean = function() {
        $scope.contacts = [];
    }

    $scope.run = function() {
        setTimeout(function() {
            $scope.$applyAsync();
        }, 5);
    }

    $scope.loadData = function() {
        contactService.loadAll();
    }
});

function ContactDetailsComponent($scope, $rootScope) {
    console.log("ctor");

    $scope.$on("CONTACTS_LOADED", function() {
        console.log("Reacting to event CONTACTS_LOADED");
    });
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

module.factory("contactService", function($rootScope) {
    return {
        loadAll: function() {
            $rootScope.$broadcast("CONTACTS_LOADED");
        }
    };
});

