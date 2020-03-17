function GameOverScreen() {
  let localFrameCount = 0;
  const colorChangeInterval = 5;

  this.display = function() {
    strokeWeight(0);
    fill(`rgba(0, 0, 0, ${0.01 * localFrameCount})`);
    rect(0, 0, gameArea.size, gameArea.size);
    textSize(200);
    fill(`rgba(255, 0, 0, ${0.01 * localFrameCount})`);
    text("GAME OVER", 90, 450);
    if (frameCount % colorChangeInterval === 0) localFrameCount += 1;

    if (localFrameCount >= 150) {
      mode.main = "input screen";
    }
  }
}