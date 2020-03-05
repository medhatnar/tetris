// cd Desktop/Code/2020/'04 Abyss'

// GLOBAL VARIABLES

// Window size and minimum display
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
const minWidth = 800;
const minHeight = 600;

// Get rid of scroll bars
document.documentElement.style.overflow = "hidden";

// Mode and Objects
let mode = "screen check";
let gameArea;
let titleScreen;
let survivalClock;
let player;
let enemySet;

// VARIABLES
// Opening Prompt
let yesButtonFill;
let noButtonFill;

// Game
let survivalTime = 0;
let explosion = false;

// Assets //////////////////////////////////////////////////////////////////////////////////////////
// Images
const arrowImages = [];

// Sounds
let music;
let playerShootsSound;
let enemyEntersSound;
let enemyHitSound0;
let enemyHitSound1;
let enemyExplodesSound;

function preload() {

  // Arrow Images
  arrowImages[0] = loadImage("./assets/images/arrowUp.png");
  arrowImages[1] = loadImage("./assets/images/arrowRight.png");
  arrowImages[2] = loadImage("./assets/images/arrowDown.png");
  arrowImages[3] = loadImage("./assets/images/arrowLeft.png");

  // Title Screen Music
  music = loadSound("./assets/sounds/music/music.mp3");

  // Sound effects /////////////////////////////////////////////////////////////////////
  // Player
  playerAttacksSound = loadSound("./assets/sounds/soundEffects/playerAttacks.wav");

  // Enemy ////////////////////////////////////////////////////////////////////////////
  enemyEntersSound = loadSound("./assets/sounds/soundEffects/enemyEnters.wav");
  enemyHitSound0 = loadSound("./assets/sounds/soundEffects/enemyHit0.wav");
  enemyHitSound0.setVolume(0.5);
  enemyHitSound1 = loadSound("./assets/sounds/soundEffects/enemyHit1.wav");
  enemyHitSound1.setVolume(0.5);
  enemyExplodesSound = loadSound("./assets/sounds/soundEffects/enemyExplosion.mp3");
}


// Setup ////////////////////////////////////////////////////////////////////////////////////////////
function setup() {

  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  textFont("Dosis");
  textSize(20);

  // Screen is too small.
  if (screen.width < minWidth || screen.height < minHeight) {
    text(`Sorry, this game requires at least a ${minWidth} x ${minHeight} pixel display.`, 50, 50, windowWidth - 100, windowHeight);
    text(`Your current device's screen: ${screen.width} x ${screen.height} display.`, 50, 200, windowWidth - 100, windowHeight);
  }
  else {
    mode = "opening prompt";
  }
}

function draw() {

  if (mode !== "screen check" && explosion === false) background(0);
 
  // OPENING PROMPT ////////////////////////////////////////////////////////////////////////////////////////
  if (mode === "opening prompt") {
    // Window is too small?
    if (windowWidth < minWidth || windowHeight < minHeight) {
      // Instructions
      textAlign(CENTER, TOP);
      textSize(20);
      fill(255);
      text(`Sorry, this game requires at least an ${minWidth} x ${minHeight} pixel display.`, 50, 50, windowWidth - 100, windowHeight);
      text(`Your current window: ${window.innerWidth} x ${window.innerHeight}.`, 50, 150, windowWidth - 100, windowHeight);
      text("Please resize your window to an appropriate display and REFRESH THE PAGE.", 50, 250, windowWidth - 50, windowHeight);
      text("Alternatively, enable fullscreen.", 50, 350, windowWidth - 50, windowHeight); 

      // Full Screen Button
      textSize(25); 
      textAlign(CENTER, CENTER);
      const fsbcoordinates0 = [center(windowWidth, 300), 450, 300, 50];
      stroke(255);
      strokeWeight(3);
      fill(0);
      rect(fsbcoordinates0[0], fsbcoordinates0[1], fsbcoordinates0[2], fsbcoordinates0[3]);  

      if (collidePointRect(mouseX, mouseY, fsbcoordinates0[0], fsbcoordinates0[1], fsbcoordinates0[2], fsbcoordinates0[3])) {
        fill(255);
        cursor("pointer");
        // Full screen enabled and transistion to game setup and then title screen.
        if (mouseIsPressed) {
          mode = "game setup";
          cursor("default");
          transistionToFullScreen();
        }
      }
      else {
        fill(100);
        cursor("default");
      }
      strokeWeight(0); 
      text("ENABLE FULLSCREEN", fsbcoordinates0[0], fsbcoordinates0[1], fsbcoordinates0[2], fsbcoordinates0[3]);
    }
    // Window is minimum size or larger.
    else {
      textAlign(CENTER, CENTER);
      textSize(40);

      // Prompt.
      fill(255);
      text("ENABLE FULLSCREEN?", center(windowWidth, 300), center(windowHeight, 100) - 40, 300, 100 );
      
      // Yes and No Buttons.
      stroke(255);
      strokeWeight(2);
      fill(0);
      yesBoxCoords = [center(windowWidth, 100) - 60, center(windowHeight, 50) + 40, 100, 50];
      noBoxCoords = [center(windowWidth, 100) + 60, center(windowHeight, 50) + 40, 100, 50];
      rect(yesBoxCoords[0], yesBoxCoords[1], yesBoxCoords[2], yesBoxCoords[3]);
      rect(noBoxCoords[0],noBoxCoords[1],noBoxCoords[2],noBoxCoords[3] );

      // Click yes for full screen.
      if (collidePointRect(mouseX, mouseY, yesBoxCoords[0], yesBoxCoords[1], yesBoxCoords[2], yesBoxCoords[3])) {
        yesButtonFill = 255;
        noButtonFill = 0;
        cursor("pointer");
        // Full screen enabled and transistion to game setup and then title screen.
        if (mouseIsPressed) {
          mode = "game setup";
          cursor("default");
          transistionToFullScreen();
        }
      }
      // Click no for regular window view. 
      else if (collidePointRect(mouseX, mouseY,noBoxCoords[0],noBoxCoords[1],noBoxCoords[2],noBoxCoords[3])) {
        noButtonFill = 255;
        yesButtonFill = 0;
        cursor("pointer");
        // Transistion to game setup and then title screen.
        if (mouseIsPressed) {
          mode = "game setup";
          cursor("default");
        }
      }
      else {
        yesButtonFill = 0;
        noButtonFill = 0;
      }
      fill(yesButtonFill);
      text("YES", yesBoxCoords[0], yesBoxCoords[1], yesBoxCoords[2], yesBoxCoords[3]);
      fill(noButtonFill);
      text("NO", noBoxCoords[0],noBoxCoords[1],noBoxCoords[2],noBoxCoords[3] );
    }      
  }
  else if (mode === "game setup") {
    gameArea = new GameArea(windowWidth, windowHeight);
    titleScreen = new TitleScreen(gameArea.width, gameArea.height, arrowImages);
    survivalClock = new SurvivalClock(gameArea.width, gameArea.height);
    player = new Player(gameArea.width, gameArea.height);
    enemySet = new EnemySet();
    music.play();
    music.loop();
    mode = "title screen";
  }
  else if (mode === "title screen") {
    gameArea.display();
    translate(gameArea.corner[0], gameArea.corner[1]);
    titleScreen.display();
    if(keyCode === ENTER) {
      mode = "game";
    }
  }
  else if (mode === "game") {
    // Set up the game area and move the coordinate grid to it's top left corner.
    if (explosion === false) gameArea.display();
    else {music.stop()}
    translate(gameArea.corner[0], gameArea.corner[1]);

    survivalClock.display();

    enemySet.generateEnemies();
    enemySet.checkIfEnemiesCollide(player);

    for (const enemy in enemySet.enemies) {
      enemySet.enemies[enemy].move();
      enemySet.enemies[enemy].display();
    }

    player.move();
    player.display();
    player.attack();

    // Cover the left and right edges with black blocks
    if (gameArea.corner[0] > 0) {
      fill(0);
      strokeWeight(0);
      rect(-gameArea.corner[0], -gameArea.corner[1], gameArea.corner[0], windowHeight);
      rect(gameArea.width, gameArea.corner[1], windowWidth - gameArea.width, windowHeight);
    }
  }
  else if (mode === "game over") {
    translate(gameArea.corner[0], gameArea.corner[1]);
    textSize(100);
    textFont("Dosis");
    strokeWeight(20);
    stroke(255);
    fill(0);
    text("GAME OVER", 0, gameArea.height / 4, gameArea.width, 200);
    textSize(50);
    text(`Survival Time:    ${survivalClock.timeString}`, 0, gameArea.height / 2, gameArea.width, 100);
    textSize(35);
    text("Refresh the page to play again.", 0, gameArea.height - 100, gameArea.width, 50);
  }
}
