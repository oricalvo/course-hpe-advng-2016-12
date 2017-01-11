function createLogger(prefix) {
    return console.log.bind(console, prefix + "> ");
}

var module = angular.module("myApp", []);
