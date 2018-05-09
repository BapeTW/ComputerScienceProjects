var colers = 0;
var cancel = {};

function drawLine() {
    if (mouseX < 50 && mouseY < 50 && mouseIsPressed) {
        colers = 0;
    } else if (mouseX < 100 && mouseY < 50 && mouseX > 50 && mouseIsPressed) {
        colers = 255;
    } else if (mouseX < 150 && mouseY < 50 && mouseX > 100 && mouseIsPressed) {
        colers = "red";
    } else if (mouseX < 200 && mouseY < 50 && mouseX > 150 && mouseIsPressed) {
        colers = "green";
    } else if (mouseX < 250 && mouseY < 50 && mouseX > 200 && mouseIsPressed) {
        colers = "blue";
    } else if (mouseX < 300 && mouseY < 50 && mouseX > 250 && mouseIsPressed) {
        colers = "yellow";
    } else if (mouseX < 350 && mouseY < 50 && mouseX > 300 && mouseIsPressed) {
        colers = [255, 51, 255];
    } else if (mouseX < 400 && mouseY < 50 && mouseX > 350 && mouseIsPressed) {
        colers = "cyan";
    } else if (mouseX < 450 && mouseY < 50 && mouseX > 400 && mouseIsPressed) {
        setup();
    }
}

function drawTheLine() {
    if (mouseY > 70 && mouseIsPressed) {
         strokeWeight(20);
        stroke(colers);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function drawColorBoxes() {
    strokeWeight(1);
    fill(0);
    rect(0, 0, 50, 50);
    fill(255);
    rect(50, 0, 50, 50);
    fill("red");
    rect(100, 0, 50, 50);
    fill("green");
    rect(150, 0, 50, 50);
    fill("blue");
    rect(200, 0, 50, 50);
    fill("yellow");
    rect(250, 0, 50, 50);
    fill(255, 51, 255);
    rect(300, 0, 50, 50);
    fill("cyan");
    rect(350, 0, 50, 50);
    fill(255);
    rect(400, 0, 50, 50);
}