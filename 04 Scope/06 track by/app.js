var module = angular.module("myApp", []);

module.controller("HomeCtrl", function($scope) {
    //var ori = {id:1, name: "Ori"};

    $scope.contacts = [
        {id:1, name: "Ori"},
        {id:2, name: "Roni"},
        {id:3, name: "Udi"},
        //ori
    ];

    $scope.refresh = function() {
        $scope.contacts = [
            {id:4, name: "OriX"},
            {id:5, name: "RoniX"},
            {id:6, name: "UdiX"},
            {id:7, name: "Beni"},
        ];
    }

    $scope.dump = function() {
        console.log($scope.contacts);
    }

    $scope.clean = function() {
        $scope.contacts = [];
    }

    $scope.toggle = function() {
        var tmp = $scope.contacts[0];
        $scope.contacts[0] = $scope.contacts[1];
        $scope.contacts[1] = tmp;
    }

    $scope.add = function() {
        $scope.contacts.push({id:-1, name: "XXX"});
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

