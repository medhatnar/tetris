function Game() {

  // Variables
  this.score = 0;
  this.level = 0;
  this.gameOver = false;

  // Methods
  this.display = function() {
    strokeWeight(2);
    stroke("magenta");
    fill("blue");
    textSize(35);
    textFont(font0);

    text(`LEVEL: ${this.level}`, 650, 650);
    text(`SCORE: ${this.score}`, 650, 700);
  }

  this.updateScore = function(numOfFullLines) {
    if (numOfFullLines === 1) this.score += 10;
    else if (numOfFullLines === 2) this.score += 25;
    else if (numOfFullLines === 3) this.score += 50;
    else if (numOfFullLines === 4) this.score += 100;
  }
}