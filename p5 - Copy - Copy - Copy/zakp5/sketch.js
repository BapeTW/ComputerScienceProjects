var circle1, circle2;
var paused;

function setup() {
    createCanvas(800, 600);
    background(0);
    noFill();

    circle1 = {
        x: width / 2,
        y: height / 2,
        r: 10
    };

    circle2 = {
        x: width / 2,
        y: height / 2,
        r: 15
    };

    paused = false;
}

function draw() {
    if (!paused) {
        circle1.x += random(-10, 10);
        circle1.y += random(-10, 10);

        circle2.x += random(-10, 10);
        circle2.y += random(-10, 10);

        stroke(255, 150, 0, 80);
        ellipse(circle1.x, circle1.y, 2 * circle1.r, 2 * circle1.r);
        stroke(255, 90, 140, 80);
        ellipse(circle2.x, circle2.y, 2 * circle2.r, 2 * circle2.r);
    }
}

function keyPressed() {
    if (keyCode == 82) {
        setup();
    } else if (keyCode == 67) {
        circle1.x = width / 2;
        circle1.y = height / 2;
        circle2.x = width / 2;
        circle2.y = height / 2;
    } else if (keyCode == 80) {
        paused = !paused;
    }
}
