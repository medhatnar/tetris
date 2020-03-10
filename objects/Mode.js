function Mode() {

  // VARIABLES /////////////////

  // Main modes include:
  // 0) window test
  // 1) opening prompt
  // 2) title screen
  // 3) game
  // 4) score screen
  // this.main = "window test";
  this.main = "dev";

  // Game modes include
  // 0) new shape
  // 1) shape in play
  // 2) update grid
  // 3) line collapse
  // 4) game over screen
  this.game = "shape in play";

  this.audioOn = false;
  this.paused = false;
}