"use strict";

class Manager {
    constructor() {
        this.queue = [];
    }

    monitor() {
        //const me = this;

        // function g() {
        //     console.log(this.queue.length);
        // };
        //
        // const callback = g.bind(this);

        // setInterval(function() {
        //     console.log(me.queue.length);
        // }, 1000)

        //const func = x => x*2;

        setInterval(() => {
            console.log(this.queue.length);
        }, 1000)
    }
}

// const obj = {
//     f: function() {
//         this.id = 1234;
//     }
// };
//
// const g = obj.f;
// g();

const m = new Manager();
m.monitor();