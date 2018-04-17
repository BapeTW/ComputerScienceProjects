function initialize() {
    heli.x = 100;
    heli.y = height / 2;
    gameState = "start"; // or gameOn or gameOver
    wall1 = {
        x: 500,
        y: random(50, height - 150),
        w: 50,
        h: 100
    };
    wall2 = {
        x: 800,
        y: random(50, height - 150),
        w: 50,
        h: 100
    };
    wall3 = {
        x: 1100,
        y: random(50, height - 150),
        w: 50,
        h: 100
    };
}

function drawStartScreen() {
    background(0);
    noStroke();
    fill(0, 255, 0);
    rect(0, 0, width, 50); // Ceiling
    rect(0, height - 50, width, 50); // Floor
    image(heli.img, heli.x, heli.y); // Helicopter
    fill(255);
    textSize(42);
    text("CLICK TO START!", width / 2, height / 2);
}

function gameOn() {
    moveHelicopter();
    moveWalls();
    checkCollision();
    drawGameOn();
}

function gameOver() {
    if (frameCount - gameOverTimer < 120) {
        fill(255);
        text("GAME OVER", width / 2, height / 2);
    } else {
        initialize();
    }
}
