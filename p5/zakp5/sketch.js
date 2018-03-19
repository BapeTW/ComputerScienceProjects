var value = 0;
var yeet = 255;

function setup() {
  createCanvas(1270, 890);
  print("setup function!")
  background(255);
  frameRate(120);
  console.log(frameRate);
}

function draw() {
  ellipseMode(CENTER);
  rectMode(CENTER);
  
  noStroke();
  fill(value);
  ellipse(mouseX, mouseY, 60, 60);
  value = value + 1;
}

function mouseClicked() {
  background(value);
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}