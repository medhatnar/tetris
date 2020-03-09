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
}