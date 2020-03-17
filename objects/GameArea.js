function GameArea() {
  
  // CONSTANTS
  this.size = 900;
  this.top = 0; // 'top' and 'left' will actually be reset later on, but essentially function as constants.
  this.left = 0; 

  // METHODS
  this.display = function() {
    strokeWeight(2);
    stroke("magenta");
    fill(0);
    rect(0,-1, this.size, this.size);
  }

  this.positionGameArea = function() {
    this.left = center(window.innerWidth, this.size);
    // this.top = center(window.innerHeight, this.size);
  }
}