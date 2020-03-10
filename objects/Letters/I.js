function I() {

  // Constants
  this.color = "W";
  this.angles = 2;

  this.blockPositions = function(left, top, angle) {
    const blockPositionsArray = [];
    for (let i = 0; i < 4 ; i++) {
      if (angle === 0) blockPositionsArray.push([left + 1, top + i]);
      else if (angle === 1) blockPositionsArray.push([left + i, top + 1]);
    }
    return blockPositionsArray;
  }
}