function FallIntervalTimer() {

  // Constants
  let timerStartFrame = 0;

  // Variables
  this.fallInterval = 40;
  let musicPlaying = false;
  
  this.fallNow = function() {
    return ((frameCount - timerStartFrame) % this.fallInterval) === 0;
  }

  this.fallFrame = function() {
    return (frameCount - timerStartFrame) % this.fallInterval;
  }

  this.fallCyclePercentage = function() {
    return Math.round(((frameCount - timerStartFrame) % this.fallInterval) * (100 / this.fallInterval)) * 0.01;
  }

  this.playFallSound = function() {
    // if (this.fallInterval === 40) {
    //   if (this.fallNow()) {
    //     gameMusic[0].play();
    //   }
    //   if (this.fallFrame() === 20 || this.fallFrame() === 30) {
    //     gameMusic[1].play();
    //   }
    // }
    if (musicPlaying === false && this.fallNow()) {
      gameMusic[0].play();
      musicPlaying = true;
    }
  }
}