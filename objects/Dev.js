function Dev() {
	let fullScreenApplied = false;

  this.straightToGame = function() {
    if (fullScreenApplied !== true) {
      if (keyIsDown(ENTER)) {
        transistionToFullScreen();
        fullScreenApplied = true;
      }

    }
    else {
      if (screen.height === window.innerHeight) {
        mode.audioOn = true;
        gameArea.positionGameArea();
        mode.main = "input screen";
        // gameMusic[0].play();
      }
    }
  }
}
