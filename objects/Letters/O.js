function O() {

  // Constants
  this.color = "DB";
  this.angles = 0;

  // Methods
  this.blockPositions = function(left, top, angle) {
    return [
      [left, top],
      [left + 1, top],
      [left, top + 1],
      [left + 1, top + 1]
    ]
  }

}