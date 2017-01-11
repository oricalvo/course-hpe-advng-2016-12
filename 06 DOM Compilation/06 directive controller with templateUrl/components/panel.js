module.directive("myPanel", function () {
    var log = createLogger("myPanel");

    return {
        controller: function() {
            log("controller");
        },
        compile: function() {
            return function postLink(scope, element) {
                setTimeout(function() {
                    var time = element.find("my-clock").text();
                    console.log(time);
                }, 5);
            }
        },
        template: "<div><my-clock></my-clock></div>"
    };
});
