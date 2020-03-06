var width = 900;
var height = 900;
//  fill, stokeweight, color should be set before anything
// set to 0 if not being used

function TitleScreen() {
  this.display = function() {
    push();
    angleMode(DEGREES);
    textFont("VT323");
    textSize(350);
    strokeWeight(10);
    stroke(255, 255, 255);
    fill(91, 207, 250);
    textAlign(CENTER, CENTER);
    text("Q", 200, 250);
    text("T", 550, 250);
    textSize(50);
    text("u e e r", 360, 300);
    text("e t r i s", 700, 300);
    pop();
  }
}

const titleScreen = new TitleScreen();

let soundEffect1;
let image1;

function preload() {
  //soundEffect1 = loadSound("./file/path/to/sound.mp3");
}

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(0);
  titleScreen.display();
}