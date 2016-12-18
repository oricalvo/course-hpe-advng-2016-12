var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.dump = function () {
        console.log(this.x + ", " + this.y);
    };
    return Point;
}());
var pt = new Point(5, 10);
pt.dump();
var c = {
    id: 1,
    name: "Ori"
};
function runTasks() {
    var _loop_1 = function(i) {
        runTask(i, function () {
            console.log("Task " + i + " completed");
        });
    };
    for (var i = 0; i < 10; i++) {
        _loop_1(i);
    }
}
function runTask(id, callback) {
    setTimeout(function () {
        callback();
    }, 1000);
}
runTasks();
//# sourceMappingURL=app.js.map