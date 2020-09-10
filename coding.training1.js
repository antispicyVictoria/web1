
var data = [];
var m = 1;
var b = 0;
function setup() {
    createCanvas(400, 400);
}

function linearRegression() {
    var xsum = 0;
    var ysum = 0;
    for (var i = 0; i < data.length; i++) {
        xsum += data[i].x;
        ysum += data[i].y;
    }
    var xmean = xsum / data.length;
    var ymean = ysum / data.length;
    var num = 0;
    var den = 0;
    //for (var i = 0; i < )
}

function mousePressed() {
    var x = map(mouseX, 0, width, 0, 1);
    var y = map(mouseY, 0, height, 1, 0);
    var point = createVector(x, y);
    data.push(point);
}

function draw() {
    backgroud(51);

    for (var i = 0; i < data.length; i++) {
        var x = map(data[i].x, 0, 1, 0, width);
        var y = map(data[i].y, 0, 1, height, 0);
        fill(255);
        stroke(255);
        ellipse(x, y, 8, 8);
    }
}