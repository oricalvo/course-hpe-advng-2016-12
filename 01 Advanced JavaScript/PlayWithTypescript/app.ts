class Point {
    x: number;
    y: number;
    
    constructor(x: number, y:number) {
        this.x = x;
        this.y = y;
    }
    
    dump() {
        console.log(this.x + ", " + this.y);
    }
}

const pt = new Point(5, 10);
pt.dump();

interface Contact {
    id: number;
    name: string;
}

var c: Contact = {
    id: 1,
    name: "Ori"
};

function runTasks() {
    for(let i=0; i<10; i++) {
        runTask(i, function () {
            console.log("Task " + i + " completed");
        });
    }
}

function runTask(id, callback) {
    setTimeout(function() {
        callback();
    }, 1000)
}

runTasks();