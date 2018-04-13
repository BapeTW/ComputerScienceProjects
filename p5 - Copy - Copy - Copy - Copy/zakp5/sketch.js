var state;
var start;
var message;

function setup() {
    createCanvas(800, 600);
    textAlign(CENTER);
    background(255);
    strokeWeight(3);

    state = "start";
}

function draw() {
    if (state == "start") {
       drawStartScreen();
    } else {
       rendDrawFrame();
    }
}

function keyPressed() {
    if (keyCode == 32) {
        setupDrawFrame();
        var randInt = floor(random(1, 4));
        if (randInt == 1) {
            message = "car";
        } else if (randInt == 2) {
            message = "elephant";
        } else {
            message = "tree";
        }
    }
}
