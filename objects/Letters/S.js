function S() {

  // Constants
  this.color = "HP";
  this.angles = 2;

  // Methods
  this.blockPositions = function(left, top, angle) {
    if (angle === 0) {
      return [
        [left, top],
        [left, top + 1],
        [left + 1, top + 1],
        [left + 1, top + 2]
      ]
    }
    else if (angle === 1) {
      return [
        [left, top + 1],
        [left + 1, top],
        [left + 1, top + 1],
        [left + 2, top]
      ]
    }
  }
}