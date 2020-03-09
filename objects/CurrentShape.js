class CurrentShape extends Shape {

  // Constructor
  constructor(left, top, letter) {
    super(left, top, letter);

    // Constants
    this.playerControlInterval = 10;
  }

  // Methods
  move() {
    if (frameCount % this.playerControlInterval === 0) {
      if (
        keyIsDown(LEFT_ARROW) 
        && !(keyIsDown(RIGHT_ARROW) || keyIsDown(DOWN_ARROW) || keyIsDown(32))
        && this.left > 0
      ) {
        this.left -= 1;
        moveSound.play();
      }
      else if (
        keyIsDown(RIGHT_ARROW)
        && !(keyIsDown(LEFT_ARROW) || keyIsDown(DOWN_ARROW) || keyIsDown(32))
        && this.left < (grid.width - this.width)
      ){
        this.left += 1;
        moveSound.play();
      }
      else if (
        keyIsDown(DOWN_ARROW)
        && !(keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(32))
        && this.top < (grid.height - this.height)
      ) {
        this.top += 1;
        moveSound.play();
      }
      else if (
        keyIsDown(32)
        && !(keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(DOWN_ARROW))
      ) {
        this.angle = (this.angle + 1) % this.letter.angles;
      }
    }

    // if (fallIntervalTimer.fallNow() && this.top < (grid.height - this.height)) {
    //   this.top += 1;
    // }
  }
}