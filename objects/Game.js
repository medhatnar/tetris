function Game() {

  // Variables
  this.score = Math.floor(Math.random() * 1000);
  this.level = 0;
  let totalLines = 0;
  let lastScoreTetris = false;
  
  let intervalCounter = 0;


  // Methods
  this.display = function() {

    if(mode.game === "level up") {
      strokeWeight(5);
      stroke(Math.floor(fallIntervalTimer.fallCyclePercentage() * 255));
      fill(0);
      textSize(50);
      text("LEVEL UP!", 650, 600);
    }

    strokeWeight(2);
    textFont(font0);
    textSize(35);
    stroke("magenta");
    fill("blue");

    text(`LEVEL: ${this.level}`, 650, 650);
    text(`SCORE: ${this.score}`, 650, 700);
  }

  this.updateScore = function(numOfFullLines) {
    if (numOfFullLines === 1) this.score += 100;
    else if (numOfFullLines === 2) {
      this.score += 250;
    }
    else if (numOfFullLines === 3) {
      this.score += 500;
    }
    else if (numOfFullLines === 4) {
      if (lastScoreTetris) {
        this.score += 1200;
      }
      else {
        this.score += 800;
      }
      lastScoreTetris = true;
    }

    if (numOfFullLines !== 4) {
      lastScoreTetris = false;
    }

    totalLines += numOfFullLines;

    if (Math.floor(totalLines / 10) !== this.level) {
      // gameMusic[this.level].stop();
      this.level += 1;
      mode.game = "level up";
      currentShape = null;
    }
  }

  this.levelUp = function() {
    if (fallIntervalTimer.lastFrame()) {
      gridAbsorbSound.play();
      intervalCounter += 1;
      if (intervalCounter === 4) {
        mode.game = "new shape";
        fallIntervalTimer.fallInterval -= 3;
        intervalCounter = 0;
      }
    }
  }
}