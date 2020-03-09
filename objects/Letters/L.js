function L() {

  // Constants
  this.color = "LP";
  this.angles = 4;

  // Methods
  this.blockPositions = function(left, top, angle) {
    if (angle === 0) {
      return [
        [left, top], 
        [left, top + 1], 
        [left, top + 2],
        [left + 1, top + 2]
      ]
    }
    else if (angle === 1) {
      return [
        [left, top + 1],
        [left + 1, top + 1],
        [left + 2, top + 1],
        [left + 2, top]
      ]
    }
    else if (angle === 2) {
      return [
        [left, top],
        [left + 1, top],
        [left + 1, top + 1],
        [left + 1, top + 2]
      ]
    }
    else if (angle === 3) {
      return [
        [left, top],
        [left, top + 1],
        [left + 1, top],
        [left + 2, top]
      ]
    }
  }

  // this.blockPositions = function(left, top, angle) {
  //   if (angle === 0) {
  //     return [

  //     ]
  //   }
  // }

  this.width = function(angle) {
    if ((angle === 0) || (angle === 2)) {
      return 2;
    }
    else if ((angle === 1) || (angle === 3)) {
      return 3;
    }
  }
}