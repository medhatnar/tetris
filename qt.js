// Initialization
document.documentElement.style.overflow = "hidden";

// ASSETS /////////////////////////////////////////////////////////////////////////////////////
// FONTS ///////////
const font0 = "VT323";

// SOUNDEFFECTS ////
let fallIntervalSound;
let lineCollapseSound;
let cannotRotateSound;
let moveSound;
let gameOverSound;

// MUSIC ////
const gameMusic = [];
let titleScreenMusic;
let scoreScreenMusic;
let gameOverMusic;
let levelUpMusic;

// IMAGES ////
let darkBlueBlockImage;
let hotPinkBlockImage;
let lightPinkBlockImage;
let purpleBlockImage;
let skyBlueBlockImage;
let whiteBlockImage;
let yellowBlockImage;

function preload() {
  darkBlueBlockImage = loadImage("./assets/images/blocks/15px Size/Dark_Blue_Block.png");
  hotPinkBlockImage = loadImage("./assets/images/blocks/15px Size/Hot_Pink_Block.png");
  lightPinkBlockImage = loadImage("./assets/images/blocks/15px Size/Light_Pink_Block.png");
  purpleBlockImage = loadImage("./assets/images/blocks/15px Size/Purple_Block.png");
  skyBlueBlockImage = loadImage("./assets/images/blocks/15px Size/Sky_Blue_Block.png");
  whiteBlockImage = loadImage("./assets/images/blocks/15px Size/White_Block.png");
  yellowBlockImage = loadImage("./assets/images/blocks/15px Size/Yellow_Block.png");
}

// OBJECTS ////////////////////////////////////////////////////////////////////////////////////
const gameArea = new GameArea();
const windowObject = new Window();
const mode = new Mode();

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  windowObject.screenSize();
}

function draw() {

  // Redraw the background as black every frame. 
  background(0);

  if (mode.main === "window test") {
    windowObject.windowSize();
  }
  else if (mode.main === "opening prompt") {
    
  }
}

