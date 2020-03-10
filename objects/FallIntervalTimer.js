function FallIntervalTimer() {

  // Constants
  let timerStartFrame = 0; // This will be set later, but only once, and essentially functions like a constant. 

  // Variables
  this.fallInterval = 40;

  // Methods 

  // Is the fall interval just starting?
  this.fallNow = function() {
    return ((frameCount - timerStartFrame) % this.fallInterval) === 0;
  }

  // How many frames are we into the fall interval?
  this.fallFrame = function() {
    return (frameCount - timerStartFrame) % this.fallInterval;
  }

  // What percentage of the fall interval have we gone through?
  this.fallCyclePercentage = function() {
    return Math.round(((frameCount - timerStartFrame) % this.fallInterval) * (100 / this.fallInterval)) * 0.01;
  }
}