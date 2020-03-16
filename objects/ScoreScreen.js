function ScoreScreen() {
    this.display = function() {}
}

const titleScreen = new TitleScreen();


function preload() {
}

function setup() {
	createCanvas(900, 900);
}

function draw() {
  background(0);
	ScoreScreen.display();
}

