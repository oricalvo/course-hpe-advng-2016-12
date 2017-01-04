appModule.factory("appStore", function() {
    var state = {
        state1: {
            counter: 1000,
        },
        state2: {
            counter: 1000,
        }
    };

    return {
        get: function() {
            return state;
        },

        set: function(s) {
            state = s;
        }
    };
});


var state = {
    contacts: [1,2,3],
    counter: 999,
};

Object.assign({}, state, {counter: 1000});