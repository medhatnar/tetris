// Initialization
document.documentElement.style.overflow = "hidden";

// ASSETS /////////////////////////////////////////////////////////////////////////////////////
// FONTS ///////////
const font0 = "VT323";

// SOUNDEFFECTS ////
let lineCollapseSound;
let cannotRotateSound;
let moveSound;
let gameOverSound;
let gridAbsorbSound;

// MUSIC ////
const gameMusic = [];
let titleScreenMusic;
let scoreScreenMusic;
let gameOverMusic;
let levelUpMusic;

// IMAGES ////
// BLOCKS ///////////////
let darkBlueBlockImage;
let hotPinkBlockImage;
let lightPinkBlockImage;
let purpleBlockImage;
let skyBlueBlockImage;
let whiteBlockImage;
let yellowBlockImage;

// PREVIEW SHAPES //////////////
let iShapePreviewImage;
let zShapePreviewImage;
let oShapePreviewImage;
let sShapePreviewImage;
let tShapePreviewImage;
let jShapePreviewImage;
let lShapePreviewImage;

function preload() {

  // Block Images
  darkBlueBlockImage = loadImage("./assets/images/blocks/30px Size/Dark_Blue_Block.png");
  hotPinkBlockImage = loadImage("./assets/images/blocks/30px Size/Hot_Pink_Block.png");
  lightPinkBlockImage = loadImage("./assets/images/blocks/30px Size/Light_Pink_Block.png");
  purpleBlockImage = loadImage("./assets/images/blocks/30px Size/Purple_Block.png");
  skyBlueBlockImage = loadImage("./assets/images/blocks/30px Size/Sky_Blue_Block.png");
  whiteBlockImage = loadImage("./assets/images/blocks/30px Size/White_Block.png");
  yellowBlockImage = loadImage("./assets/images/blocks/30px Size/Yellow_Block.png");

  // Preview Shape Images
  iShapePreviewImage = loadImage("./assets/images/blocks/Preview Shapes/IShape.png");
  zShapePreviewImage = loadImage("./assets/images/blocks/Preview Shapes/ZShape.png")
  tShapePreviewImage = loadImage("./assets/images/blocks/Preview Shapes/TShape.png");
  sShapePreviewImage = loadImage("./assets/images/blocks/Preview Shapes/SShape.png");
  oShapePreviewImage = loadImage("./assets/images/blocks/Preview Shapes/OShape.png");
  lShapePreviewImage = loadImage("./assets/images/blocks/Preview Shapes/LShape.png");
  jShapePreviewImage = loadImage("./assets/images/blocks/Preview Shapes/JShape.png");

  // Sound Effects
  // lineCollapseSound;
  // cannotRotateSound;
  // Best move sounds: 1, 7, 8, 9
  moveSound = loadSound("./assets/sounds/move.mp3");
  gridAbsorbSound = loadSound("./assets/sounds/gridAbsorb0.mp3");
  // gameOverSound;

  // Music
  // gameMusic[0] = loadSound("./assets/sounds/testMusic.mp3");
}

// OBJECTS ////////////////////////////////////////////////////////////////////////////////////
const gameArea = new GameArea();
const windowObject = new Window();
const mode = new Mode();
const openingPrompt = new OpeningPrompt();
const titleScreen = new TitleScreen();
const display = new Display();
const grid = new Grid();
const dev = new Dev();
const fallIntervalTimer = new FallIntervalTimer();
let currentShape = new CurrentShape(7, 0, randomLetter());
const preview = new Preview();

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  windowObject.screenSize();
}

function draw() {

  // Redraw the background as black every frame. 
  background(0);

  // We set the 0,0 coordinate to be relative to the GameArea, though initially this is just set to 0, 0 anyway. 
  // This won't matter until we reach the main mode of "title screen". 
  // The values 'top' and 'left' for 'gameArea' are set within the 'handleMouse' method of opening prompt. 
  translate(gameArea.left, gameArea.top);



  if (mode.main === "window test") {
    windowObject.windowSize();
  }
  else if (mode.main === "dev") {
    dev.straightToGame();
  }
  else if (mode.main === "opening prompt") {
    openingPrompt.handleMouse();
    openingPrompt.display();
  }
  else if (mode.main === "title screen") {
    gameArea.display();
    titleScreen.enterButtonDown();
  }
  else if (mode.main === "game") {

    if (mode.game === "new shape") {
      preview.newShape();
    }

    if (mode.game === "shape in play")
    {
      currentShape.move();
      // grid.absorbCurrentShape();
    }

    if (mode.game === "update grid") {
      grid.absorbCurrentShape();
    }
    
    display.display();
  }
}

