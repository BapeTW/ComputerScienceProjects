var hairX;
var mouthH;
var leftEyeSize;
var animate;

function setup() {
    createCanvas(600, 600);

    mouthH = 60;
    hairX = 200;
    leftEyeSize = 60;
    animate = true;
}

function draw() {
    if (animate) {
        hairX += random(-1, 1);
        mouthH += random(-1, 1);
        leftEyeSize += random(-1, 1);
    }


    background(255);
    noStroke();

    fill(85);
    rect(80, 260, 460, 80); // Ear Bar

    fill(185);
    rect(100, 100, 400, 400); // Head

    fill(225);
    ellipse(200, 250, 100, 100); // Left Eye Socket
    ellipse(400, 250, 100, 100); // Right Eye Socket
    rect(200, 350, 200, mouthH); // Mouth

    fill(85);
    ellipse(200, 250, leftEyeSize, leftEyeSize); // Left Pupil
    ellipse(400, 250, 20, 20); // Right Pupil
    rect(hairX, 80, 200, 20); // Hair
    rect(220, 500, 160, 100); // Neck

    stroke(85);
    strokeWeight(3);
    line(150, 180, 250, 180); // Left Eyebrow
    line(350, 160, 450, 180); // Right Eyebrow
}

function mousePressed() {
    animate = !animate;
}

function keyPressed() {
    animate = !animate;
}