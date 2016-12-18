function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype = {
    dump: function() {
        console.log(this.x + ", " + this.y);
    },
    move: function(dx, dy) {
        this.x+=dx;
        this.y+=dy;
    }
};


var pt1 = new Point(5, 10);
var pt2 = new Point(10, 20);

pt1.dump();
pt2.dump();

console.log(pt1.dump == pt2.dump);