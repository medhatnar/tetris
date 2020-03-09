class CurrentShape extends Shape {

  // Constructor
  constructor(letter) {
    super(letter);

    // Constants
    this.playerControlInterval = 10;
  }

  // Methods
  move() {
    if (frameCount % this.playerControlInterval === 0) {
      if (
        keyIsDown(LEFT_ARROW) 
        && !(keyIsDown(RIGHT_ARROW) || keyIsDown(DOWN_ARROW))
        && this.left > 0
      ) {
        this.left -= 1;
      }
      else if (
        keyIsDown(RIGHT_ARROW)
        && !(keyIsDown(LEFT_ARROW) || keyIsDown(DOWN_ARROW))
        && this.left < (grid.width - this.width)
      ){
        this.left += 1;
      }
      else if (
        keyIsDown(DOWN_ARROW)
        && !(keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW))
        && this.top < (grid.height - this.height)
      ) {
        this.top += 1;
      }
    }

    if (fallIntervalTimer.fallNow() && this.top < (grid.height - this.height)) {
      this.top += 1;
    }
  }
}