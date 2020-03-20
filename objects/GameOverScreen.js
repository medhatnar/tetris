function GameOverScreen() {
  let localFrameCount = 0;
  const colorChangeInterval = 5;

  this.display = function() {
    fill(`rgba(0, 0, 0, ${0.01 * localFrameCount})`);
    rect(0, 0, gameArea.size, gameArea.size);
    textSize(200);
    fill(`rgba(255, 0, 0, ${0.01 * localFrameCount})`);
    textAlign(CENTER, CENTER);
    text("GAME OVER", 0, 0, gameArea.size, gameArea.size);
    if (frameCount % colorChangeInterval === 0) localFrameCount += 1;

    if (localFrameCount >= 150) {
      mode.main = "input screen";
    }
  }
}