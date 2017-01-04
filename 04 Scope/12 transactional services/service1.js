appModule.factory("service1", function() {
    return {
        reset: function(state) {
            var newState = Object.assign({}, state, {
                counter: 0
            });

            return newState;
        }
    };
});
