function OpeningPrompt() {

  // STATE ///////////////////////////////////////////////////////////////////////////////////////////

  // Variables
  this.fullScreenPreSelected = false;
  this.enableFullScreen = null;
  this.enableAudio = null;
  let beginButtonPressed = false;

  // DISPLAY ///////////////////////////////////////////////////////////////////////////////////////

  // Constants
  const buttonWidth = 100;
  const buttonHeight = 50;
  const buttonDistance = 75;

  // METHODS //////////////////////////////////////////////////////////////////////////////////////
  this.display = function() {

    // PROMPTS
    textAlign(CENTER, CENTER);
    textFont(font0);
    fill("magenta");
    strokeWeight(0);
    textSize(30)
    text("ENABLE AUDIO", center(window.innerWidth, 200), (window.innerHeight / 2) - 200, 200, 100);
    if (! (this.fullScreenPreSelected)) {
      text("ENABLE FULLSCREEN", center(window.innerWidth, 400), (window.innerHeight / 2), 400, 100);
    }

    // YES AND NO BUTTON BOXES
    strokeWeight(5);
    stroke("purple");
    if (this.enableAudio) fill("magenta");
    else fill(0);
    rect(center(window.innerWidth, buttonWidth) - buttonDistance, (window.innerHeight / 2) - 100, buttonWidth, buttonHeight);
    if (this.enableAudio === false) fill("magenta");
    else fill(0);
    rect(center(window.innerWidth, buttonWidth) + buttonDistance, (window.innerHeight / 2) - 100, buttonWidth, buttonHeight);
    // We won't display this if fullscreen has been pre-selected.
    if (this.fullScreenPreSelected === false) {
      if (this.enableFullScreen) fill("magenta");
      else fill(0);
      rect(center(window.innerWidth, buttonWidth) - buttonDistance, (window.innerHeight / 2) + 100, buttonWidth, buttonHeight);
      if (this.enableFullScreen === false) fill("magenta");
      else fill(0);
      rect(center(window.innerWidth, buttonWidth) + buttonDistance, (window.innerHeight / 2) + 100, buttonWidth, buttonHeight);
    }  

    // YES AND NO BUTTON TEXT
    strokeWeight(0);
    if (this.enableAudio) fill("pink");
    else fill("purple");
    text("YES", center(window.innerWidth, buttonWidth) - buttonDistance, (window.innerHeight / 2) - 100, buttonWidth, buttonHeight)
    if (this.enableAudio === false) fill("pink");
    else fill("purple");
    text("NO", center(window.innerWidth, buttonWidth) + buttonDistance, (window.innerHeight / 2) - 100, buttonWidth, buttonHeight);
    // We won't display this if fullscreen has been pre-selected.
    if (this.fullScreenPreSelected === false) {
      if (this.enableFullScreen) fill("pink");
      else fill("purple");    
      text("YES", center(window.innerWidth, buttonWidth) - buttonDistance, (window.innerHeight / 2) + 100, buttonWidth, buttonHeight);
      if (this.enableFullScreen === false) fill("pink");
      else fill("purple");    
      text("NO", center(window.innerWidth, buttonWidth) + buttonDistance, (window.innerHeight / 2) + 100, buttonWidth, buttonHeight);    
    }
  
    // BEGIN BUTTON BOX
    strokeWeight(10);
    if (this.enableAudio !== null && this.enableFullScreen !== null) {
      fill("magenta");
    }
    else fill(0);
    rect(center(window.innerWidth, 200), window.innerHeight / 2 + 200, 200, 80);

    // BEGIN BUTTON TEXT
    strokeWeight(0);
    if (this.enableAudio !== null && this.enableFullScreen !== null) {
      fill(255);
    }
    else fill(20);
    text("BEGIN", center(window.innerWidth, 200), window.innerHeight / 2 + 200, 200, 80);
  }

  this.handleMouse = function() {
    cursor("default");

    if(collidePointRect(mouseX, mouseY, center(window.innerWidth, buttonWidth) - buttonDistance, (window.innerHeight / 2) - 100, buttonWidth, buttonHeight)) {
      cursor("pointer");
      if (mouseIsPressed) this.enableAudio = true;
    }
    else if (collidePointRect(mouseX, mouseY, center(window.innerWidth, buttonWidth) + buttonDistance, (window.innerHeight / 2) - 100, buttonWidth, buttonHeight)) {
      cursor("pointer");
      if (mouseIsPressed) this.enableAudio = false;
    }
    // This won't matter if fullscreen has been pre-selected. 
    if (this.fullScreenPreSelected === false) {
      if (collidePointRect(mouseX, mouseY, center(window.innerWidth, buttonWidth) - buttonDistance, (window.innerHeight / 2) + 100, buttonWidth, buttonHeight)) {
        cursor("pointer");
        if (mouseIsPressed) this.enableFullScreen = true;
      }
      else if (collidePointRect(mouseX, mouseY, center(window.innerWidth, buttonWidth) + buttonDistance, (window.innerHeight / 2) + 100, buttonWidth, buttonHeight)) {
        cursor("pointer");
        if (mouseIsPressed) this.enableFullScreen = false;
      }
    }
    // Click on Begin Button (if all relevant choices have been made). 
    if (
      this.enableAudio !== null
      && this.enableFullScreen !== null
      && collidePointRect(mouseX, mouseY, center(window.innerWidth, 200), window.innerHeight / 2 + 200, 200, 80)
    ) {
      cursor("pointer");
      if (mouseIsPressed) {
        if (this.enableAudio) mode.audioOn = true;
        if (this.fullScreenPreSelected === false && this.enableFullScreen) {
          transistionToFullScreen();
        }
        beginButtonPressed = true;
      }
    }
    if (beginButtonPressed) {
      if(this.enableAudio === false) {
        masterVolume(0);
      }
      if (this.enableFullScreen === true) {
        if (screen.width === window.innerWidth && screen.height === window.innerHeight) {
          gameArea.positionGameArea();
          mode.main = "title screen";
          // titleScreenMusic.play();
        }
      }
      else {
        gameArea.positionGameArea();
        mode.main = "title screen";
      }
    }
  }
}