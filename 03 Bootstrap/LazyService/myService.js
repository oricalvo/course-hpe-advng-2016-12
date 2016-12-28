console.log("yyy");

$provide.factory("myService", function() {
    return {
        run: function() {
            console.log("run");
        }
    };
});

// angular.module("myApp").factory("myService", function() {
//     return {
//         run: function() {
//             console.log("run");
//         }
//     };
// });
//
//
