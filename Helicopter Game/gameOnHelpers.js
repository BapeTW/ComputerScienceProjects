function moveHelicopter() {
    if (mouseIsPressed) {
        heli.y -= 3;
    } else {
        heli.y += 5;
    }
}

function moveWalls() {
    wall1.x += -5;
    if (wall1.x + wall1.w < 0) {
        wall1.x = width;
        wall1.y = random(50, height - 150);
    }

    wall2.x += -5;
    if (wall2.x + wall2.w < 0) {
        wall2.x = width;
        wall2.y = random(50, height - 150);
    }
    console.log(wall2.x);

    wall3.x += -5;
    if (wall3.x + wall3.w < 0) {
        wall3.x = width;
        wall3.y = random(50, height - 150);
    }
}

function checkCollision() {
    // ROOF FLOOR
    if (heli.y < 50 || heli.y + 41 > height - 50) {
        gameState = "gameOver";
        gameOverTimer = frameCount;
    }
    
    // WALLS
    if (heli.x > wall1.x && heli.x < wall1.x + wall1.w && heli.y > wall1.y && heli.y < wall1.y + wall1.h) {
        gameState = "gameOver";
        gameOverTimer = frameCount;
    }
    
    if (heli.x > wall2.x && heli.x < wall2.x + wall2.w && heli.y > wall2.y && heli.y < wall2.y + wall2.h) {
        gameState = "gameOver";
        gameOverTimer = frameCount;
    }
    
    if (heli.x > wall3.x && heli.x < wall3.x + wall3.w && heli.y > wall3.y && heli.y < wall3.y + wall3.h) {
        gameState = "gameOver";
        gameOverTimer = frameCount;
    }
}

function drawGameOn() {
    // DRAWING
    background(0);
    noStroke();
    fill(0, 255, 0);
    rect(0, 0, width, 50); // Ceiling
    rect(0, height - 50, width, 50); // Floor
    rect(wall1.x, wall1.y, wall1.w, wall1.h); // Wall 1
    rect(wall2.x, wall2.y, wall2.w, wall2.h); // Wall 2
    rect(wall3.x, wall3.y, wall3.w, wall3.h);
    image(heli.img, heli.x, heli.y); // Helicopter
}
