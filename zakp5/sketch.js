var moveSun = 430;
var ellipseMove = {
	one : 130,
	two : 180,
	three : 230,
	four : 280,
	five : 330,
	six : 230,
	seven : 180,
	eight : 280
};

var skyColor = {
	r : 250,
	g : 128, 
	b : 114
};

function setup() {
	createCanvas(850, 500);
	print("setup function!")
	frameRate(600);
	console.log(frameRate);
}

function draw() {
	ellipseMode(CENTER);
	rectMode(CENTER);
	background(skyColor.r, skyColor.g, skyColor.b);
	skyColor.r = map(moveSun, 0, 500, 250, 250);
	skyColor.g = map(moveSun, 0, 500, 128, 255);
	skyColor.b = map(moveSun, 0, 500, 114, 135);
	
	noStroke();
	fill(255, 162, 0);
	ellipse(425, moveSun, 150, 150);
	noStroke();
	fill(255, 201, 0);
	ellipse(425, moveSun, 140, 140);
	moveSun = moveSun - 0.25;
	
	fill(255);
	ellipse(ellipseMove.one, 100, 90, 90);
	ellipse(ellipseMove.two, 100, 90, 90);
	ellipse(ellipseMove.three, 100, 90, 90);
	ellipse(ellipseMove.four, 100, 90, 90);
	ellipse(ellipseMove.five, 100, 90, 90);
	ellipse(ellipseMove.six, 45, 90, 90);
	ellipse(ellipseMove.seven, 60, 90, 90);
	ellipse(ellipseMove.eight, 70, 90, 90);
	ellipseMove.one = ellipseMove.one + 0.5;
	ellipseMove.two = ellipseMove.two + 0.5;
	ellipseMove.three = ellipseMove.three + 0.5;
	ellipseMove.four = ellipseMove.four + 0.5;
	ellipseMove.five = ellipseMove.five + 0.5;
	ellipseMove.six = ellipseMove.six + 0.5;
	ellipseMove.seven = ellipseMove.seven + 0.5;
	ellipseMove.eight = ellipseMove.eight + 0.5;
	
	stroke(0);
	fill(0);
	line(270, 240, 300, 230);
	line(270, 240, 240, 230);
	
	noStroke();
	fill(77, 175, 13);
	rect(425, 460, 850, 90);
//	if (value < 250) {
//		value = value + 1;
//	} else {
//		value = value - 1;
//	}

}
