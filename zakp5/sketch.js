var circle1, circle2;
var paused;

function setup() {
    var cnv = createCanvas(800, 600);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    background(200);
    drawColorBoxes();
    image(img, 400.9, 0.9);
}

function draw() {

    drawLine();
    drawTheLine();
}

function preload() {
    img = loadImage('refresh.png');
}
