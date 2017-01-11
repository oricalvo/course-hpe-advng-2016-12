var log = createLogger("myPopup");

function PopupController($scope) {
    this.$scope = $scope;
    $scope.$parent["popup"] = this;

    $scope.run = function () {
        log("run");
    }
}

PopupController.prototype.show = function() {
    this.$scope.wrapper.addClass("active");
}

module.directive("myPopup", function ($http, $compile) {
    return {
        scope: {},
        compile: function(element) {
            var content = element.html();
            element.empty();

            return function link(scope, element, attrs) {
                $http.get("components/popup.html").then(function(res) {
                    var wrapper = $(res.data);
                    wrapper.append(content);

                    scope.wrapper = wrapper;

                    var linkFn = $compile(wrapper);
                    linkFn(scope.$parent);

                    angular.element("body").append(wrapper);
                });
            }
        },
        terminal: true,
        controller: PopupController,
    };
});
