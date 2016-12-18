function Point(x, y) {
    return {
        dump: function() {
            console.log(x + ", " + y);
        },
        move: function(dx, dy) {
            x+=dx;
            x+=dy;
        }
    };
}

var pt1 = new Point(5, 10);
var pt2 = new Point(10, 20);

pt1.dump();
pt2.dump();

console.log(pt1.dump == pt2.dump);