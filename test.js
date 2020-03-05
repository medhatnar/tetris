const titleScreen = new TitleScreen();

let soundEffect1;
let image1;

function preload() {
  //soundEffect1 = loadSound("./file/path/to/sound.mp3");
  //image1 = loadImage("./file/path/to/sound.jpg");
}

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(0);
  titleScreen.display();
}
