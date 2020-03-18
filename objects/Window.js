function Window() {

  let windowTooSmall = false;
  let initialWindowCheck = false;

  // METHODS ////////////////////////////////////////////////////////////////////////////////////////////
  this.screenSize = function() {
    textFont(font0);
    textSize(30);
    fill("magenta");
    if (screen.width < gameArea.size || screen.height < gameArea.size) {
      text(`Sorry, this game requires at least a 900 x 900 pixel display.`, 50, 50, windowWidth - 100, windowHeight);
      text(`Your current device's screen: ${screen.width} x ${screen.height} display.`, 50, 200, windowWidth - 100, windowHeight);
    }
  }

  this.windowSize = function() {
    if (initialWindowCheck === false) {
      if (window.innerWidth < gameArea.size || window.innerHeight < gameArea.size) {
        windowTooSmall = true;
        initialWindowCheck = true;
      }
      else {
        mode.main = "opening prompt";
        console.log("here");
      }
    }

    if (windowTooSmall) {

      fill("magenta");
      stroke("purple");


      // MESSAGE /////////
      textFont(font0);
      textSize(25);
      textAlign(LEFT, TOP);
      strokeWeight(0);
      text(`Sorry, this game requires at least a 900 x 900 pixel display.`, 50, 50, window.innerWidth - 100, window.innerHeight);
      text(`Your current window: ${window.innerWidth} x ${window.innerHeight}.`, 50, 150, window.innerWidth - 100, window.innerHeight);
      text("Please resize your window to an appropriate display and REFRESH THE PAGE.", 50, 225, 400, window.innerHeight);
      text("Alternatively, enable fullscreen.", 50, 350, window.innerWidth - 50, window.innerHeight); 

      // FULL SCREEN BUTTON ////////////
      textSize(25); 
      textAlign(CENTER, CENTER);
      // const fsbcoordinates = [center(window.innerWidth, 300), 420, 300, 50];
      const fsbcoordinates = [100, 420, 300, 50];

      strokeWeight(3);
      fill(0);
      rect(fsbcoordinates[0], fsbcoordinates[1], fsbcoordinates[2], fsbcoordinates[3]);
      
      // HOVER OVER BUTTON
      if (collidePointRect(mouseX, mouseY, fsbcoordinates[0], fsbcoordinates[1], fsbcoordinates[2], fsbcoordinates[3])) {
        fill("magenta");
        cursor("pointer");

        // CLICK BUTTON
        if (mouseIsPressed) {
          mode.main = "opening prompt";
          cursor("default");
          openingPrompt.fullScreenPreSelected = true;
          openingPrompt.enableFullScreen = true;
          transistionToFullScreen();
        }
      }
      // NOT HOVERING OVER BUTTON
      else {
        fill("purple");
        cursor("default");
      }

      // BUTTON TEXT
      strokeWeight(0); 
      text("ENABLE FULLSCREEN", fsbcoordinates[0], fsbcoordinates[1], fsbcoordinates[2], fsbcoordinates[3]);
    }
  }

}