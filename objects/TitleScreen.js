var width = 900;
var height = 900;
//  fill, stokeweight, color should be set before anything
// set to 0 if not being used

function TitleScreen() {
	this.display = function() {
		push();
		angleMode(DEGREES);
		textFont('VT323');
		textSize(350);
		strokeWeight(10);
		stroke(255, 255, 255);
		fill(91, 207, 250);
		textAlign(CENTER, CENTER);
		text('Q', 200, 250);
		text('T', 550, 250);
		textSize(50);
		text('u e e r', 360, 300);
    text('e t r i s', 700, 300);
    image(arrows.up, 380, 440)
    image(arrows.left, 180, 535)
    image(arrows.right, 750, 535)
    image(arrows.down, 360, 640)
    textSize(40);
    stroke(0)
    fill(255, 33, 140);
    text('rotate', 515, 455);
    fill(0, 0, 254);
    text('go left', 300, 545);
    fill(188, 39, 252);
    text('go right', 660, 545);
    fill(255, 33, 140);
    text('death drop', 520, 650);
    text('press <Enter> to start', 500, 750);
		pop();
	};
}

const titleScreen = new TitleScreen();

let arrows = {};

function preload() {
	arrows.up = loadImage('../assets/images/arrows/arrowUp.png');
	arrows.left = loadImage('../assets/images/arrows/arrowLeft.png');
	arrows.right = loadImage('../assets/images/arrows/arrowRight.png');
	arrows.down = loadImage('../assets/images/arrows/arrowDown.png');
}

function setup() {
	createCanvas(900, 900);
}

function draw() {
  background(0);
  titleScreen.display();
}
