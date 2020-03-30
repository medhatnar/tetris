function Game() {

  // Variables
  this.score = 0;
  this.level = 0;
  let totalLines = 0;
  let lastScoreTetris = false;
  
  let intervalCounter = 0;

  let levelUpGraphicsInterval = 20;
  const levelUpGraphicsLines = [];
  for (let j = 0 ; j < 10 ; j++) {
    levelUpGraphicsLines[j] = randRange(0, 900);
  }

  // Methods
  this.display = function() {

    if(mode.game === "level up") {
      if (frameCount % levelUpGraphicsInterval === 0) {
        for (let j = 0 ; j < 10 ; j++) {
          levelUpGraphicsLines[j] = randRange(0, 900);
        }
      }
      strokeWeight(randRange(50, 100));
      // stroke(`rgba(255, 255, 255, ${randRange(3, 6) * 0.1})`);
      stroke(`rgba(255, 255, 255, 0.3)`);


      for (let j = 0 ; j < 10 ; j++) {
        // stroke(`rgba( ${levelUpGraphicsLines[j][0]},  ${levelUpGraphicsLines[j][1]},  ${levelUpGraphicsLines[j][2]}, ${randRange(3, 6) * 0.1})`);
        line(j * 100, 0, levelUpGraphicsLines[j], 900);
      }     
        
      strokeWeight(5);
      stroke(Math.floor(fallIntervalTimer.fallCyclePercentage() * 255));
      fill(0);
      textSize(200);
      text("LEVEL UP!", 100, 450);
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

    // if (Math.floor(totalLines / 10) !== this.level) {
    if (Math.floor(totalLines / 10) !== this.level) {

      // gameMusic[this.level].stop();
      gameMusic.stop();
      levelUpSound.play();
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
        if (this.level < 11) gameMusic.rate(gameMusic.rate() + 0.05);
        gameMusic.play();
        mode.game = "new shape";
        if (this.level < 11) fallIntervalTimer.fallInterval -= 3;
        intervalCounter = 0;
      }
    }
  }
}