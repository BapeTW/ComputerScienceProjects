function drawStartScreen() {
    background(85);
    fill(255, 0, 0);
    text("PAINT IT!", width / 2, 200);
    fill(255);
    text("Press SPACE to begin...", width / 2, 300);
    textSize(36);
    text("You have 10 seconds to draw the given word.", width / 2, 400);
}

function rendDrawFrame() {
    if (frameCount - start < 600) {
        if (mouseIsPressed) {
            stroke(0);
            line(mouseX, mouseY, pmouseX, pmouseY);
        }
    } else {
        message = "TIMES UP! Press SPACE to play again...";
    }
    fill(85);
    noStroke();
    rect(0, 0, width, 50);
    fill(255);
    textSize(36);
    text(message, width / 2, 40);
}

function setupDrawFrame() {
    state = "draw";
    background(255);
    start = frameCount;
}
