var module = angular.module("myApp", []);

module.controller("HomeCtrl", function($scope, $parse) {
    var expr = "a.b.c";

    var exprFn = $parse(expr);

    var obj = {
        a: {
            b: {
            }
        }
    };

    console.log(!!exprFn.assign);

    //exprFn.assign(obj, 11);

    var val = exprFn(obj);

    console.log(val);
});
