// Initialization
document.documentElement.style.overflow = 'hidden';

// ASSETS /////////////////////////////////////////////////////////////////////////////////////
// FONTS ///////////
const font0 = 'VT323';
// COLORS ///////////
const darkBlue = 'rgb(0, 0, 254)';
const hotPink = 'rgb(255, 33, 140)';
const lightBlue = 'rgb(91, 207, 250)';
const lightPink = 'rgb(500, 170, 185)';
const purple = 'rgb(188, 39, 252)';
const white = 'rgb(255, 255, 255)';
const yellow = 'rgb(255, 216, 0)';

// SOUNDEFFECTS ////
let lineCollapseSound;
let cannotRotateSound;
let moveSound;
let gameOverSound;
let gridAbsorbSound;
let rotateSound;
let fullLineSound;

// MUSIC ////
// const gameMusic = [];
let gameMusic;
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

// ARROWS ///////////////
let arrows = {};

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
	darkBlueBlockImage = loadImage(
		'./assets/images/blocks/42pxSize/Dark_Blue_Block.png'
	);
	hotPinkBlockImage = loadImage(
		'./assets/images/blocks/42pxSize/Hot_Pink_Block.png'
	);
	lightPinkBlockImage = loadImage(
		'./assets/images/blocks/42pxSize/Light_Pink_Block.png'
	);
	purpleBlockImage = loadImage(
		'./assets/images/blocks/42pxSize/Purple_Block.png'
	);
	skyBlueBlockImage = loadImage(
		'./assets/images/blocks/42pxSize/Sky_Blue_Block.png'
	);
	whiteBlockImage = loadImage(
		'./assets/images/blocks/42pxSize/White_Block.png'
	);
	yellowBlockImage = loadImage(
		'./assets/images/blocks/42pxSize/Yellow_Block.png'
	);

	// Preview Shape Images
	iShapePreviewImage = loadImage(
		'./assets/images/blocks/Preview Shapes/IShape.png'
	);
	zShapePreviewImage = loadImage(
		'./assets/images/blocks/Preview Shapes/ZShape.png'
	);
	tShapePreviewImage = loadImage(
		'./assets/images/blocks/Preview Shapes/TShape.png'
	);
	sShapePreviewImage = loadImage(
		'./assets/images/blocks/Preview Shapes/SShape.png'
	);
	oShapePreviewImage = loadImage(
		'./assets/images/blocks/Preview Shapes/OShape.png'
	);
	lShapePreviewImage = loadImage(
		'./assets/images/blocks/Preview Shapes/LShape.png'
	);
	jShapePreviewImage = loadImage(
		'./assets/images/blocks/Preview Shapes/JShape.png'
	);

	// Arrow Images
	arrows.up = loadImage('../assets/images/arrows/arrowUp.png');
	arrows.left = loadImage('../assets/images/arrows/arrowLeft.png');
	arrows.right = loadImage('../assets/images/arrows/arrowRight.png');
	arrows.down = loadImage('../assets/images/arrows/arrowDown.png');

  // Sound Effects
  // lineCollapseSound;
  moveSound = loadSound("./assets/sounds/move.mp3");
  gridAbsorbSound = loadSound("./assets/sounds/gridAbsorb0.mp3");
  rotateSound = loadSound("./assets/sounds/rotate0.mp3");
  cannotRotateSound = loadSound("./assets/sounds/cannotRotate1.mp3");
  fullLineSound = loadSound("./assets/sounds/fullLine1.mp3");
  gameOverSound = loadSound("./assets/sounds/gameOver0.mp3");
  // 3, 4 6!
  levelUpSound = loadSound("./assets/sounds/gameOver7.mp3");


  // Music
  // gameMusic[0] = loadSound("./assets/sounds/gameMusic.mp3");
	gameMusic = loadSound("./assets/sounds/gameMusic.mp3");
	gameMusic.loop();
	// titleScreenMusic = loadSound("./assets/sounds/titleScreenMusic.mp3");
	// titleScreenMusic.loop();
}

// OBJECTS ////////////////////////////////////////////////////////////////////////////////////
const gameArea = new GameArea();
const windowObject = new Window();
const mode = new Mode();
const openingPrompt = new OpeningPrompt();
const titleScreen = new TitleScreen();
const inputField = new InputField();
const scoreScreen = new ScoreScreen();
const display = new Display();
const grid = new Grid();
const dev = new Dev();
const fallIntervalTimer = new FallIntervalTimer();
let currentShape = new CurrentShape(5, 0, randomLetter());
const preview = new Preview();
const game = new Game();
const gameOverScreen = new GameOverScreen();

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	inputField.setup();
	windowObject.screenSize();
}

function draw() {
	// Redraw the background as black every frame.
	background(0);

	// We set the 0,0 coordinate to be relative to the GameArea, though initially this is just set to 0, 0 anyway.
	// This won't matter until we reach the main mode of "title screen".
	// The values 'top' and 'left' for 'gameArea' are set within the 'handleMouse' method of opening prompt.
	translate(gameArea.left, gameArea.top);

	if (mode.main === 'window test') {
		windowObject.windowSize();
	} else if (mode.main === 'dev') {
		dev.straightToGame();
	} else if (mode.main === 'opening prompt') {
		openingPrompt.handleMouse();
		openingPrompt.display();
	} else if (mode.main === 'title screen') {
		gameArea.display();
		titleScreen.display();
		titleScreen.enterButtonDown();
	} else if (mode.main === 'game') {
		if (mode.game === 'new shape') {
			preview.newShape();
		}

		if (mode.game === 'shape in play') {
			currentShape.move();
		}

		if (mode.game === 'update grid') {
			if (fallIntervalTimer.fallNow()) {
				grid.absorbCurrentShape();
				if (!(mode.game === 'game over')) grid.lineCheck();
			}
		}

		if (mode.game === 'level up') {
			game.levelUp();
		}
		display.display();
	} else if (mode.main === 'input screen') {
    gameArea.display();
		inputField.display();
	} else if(mode.main === 'score screen') {
    gameArea.display();
    scoreScreen.display();
  }
}
