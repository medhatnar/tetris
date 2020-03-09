function Grid() {

  // CONSTANTS
  this.unit = 30;
  this.width = 15;
  this.height = 29;
  this.left = display.borderSize;
  const blockOffset = 5;

  // VARIABLES
  this.gridArray = [];

  for (let i = 0; i < this.height ; i++) {
    const gridRow = [];
    for (let j = 0; j < this.width; j++) {
      gridRow[j] = null;
    }
    this.gridArray[i] = gridRow;
  }

  // METHODS
  this.display = function() {
    
    strokeWeight(3);

    // Vertical Lines
    stroke(`rgba(255, 0, 100, ${fallIntervalTimer.fallCyclePercentage()})`);
  
    for(let i = 1 ; i < this.width ; i++) {
      line(this.left + (this.unit * i), 0, this.left + (this.unit * i), gameArea.size - display.floorHeight);
    }

    // Horizontal Lines
    stroke("blue");

    for (let i = 1 ; i < this.height; i++) {
      line(this.left, (this.unit * i), this.left + (this.width * this.unit), (this.unit * i));
    }

    // Draw block images for any shapes absorbed into the grid.
    // Loop through each row. 
    for(let i = 0; i < this.gridArray.length; i++) {
      // Loop through each cell of each row.
      for (let j = 0 ; j < this.gridArray[i].length ; j++) {
        // Check to see if cell is null.
        if (this.gridArray[i][j]) {
          // Let's locate the exact spot we want to draw our image. 
          const gridCell = this.gridArray[i][j];
          const gridCellLeft = (this.left + (this.unit * j)) + blockOffset;
          const gridCellTop = (this.unit * i) + blockOffset;

          // Now let's draw an image based on the string stored in our grid array. 
          if (gridCell === "P") {
            image(purpleBlockImage, gridCellLeft, gridCellTop);
          }
          else if (gridCell === "DB") {
            image(darkBlueBlockImage, gridCellLeft, gridCellTop);
          }
          else if (gridCell === "SB") {
            image(skyBlueBlockImage, gridCellLeft, gridCellTop);
          }
          else if (gridCell === "HP") {
            image(hotPinkBlockImage, gridCellLeft, gridCellTop);
          }
          else if (gridCell === "LP") {
            image(lightPinkBlockImage, gridCellLeft, gridCellTop);
          }
          else if (gridCell === "W") {
            image(whiteBlockImage, gridCellLeft, gridCellTop);
          }
          else if (gridCell === "Y") {
            image(yellowBlockImage, gridCellLeft, gridCellTop);
          }
        }
      }
    }
  }

  this.cellPosition = function(left, top) {
    return [
      this.left + (this.unit * left) + blockOffset,
      (this.unit * top) + blockOffset
    ]
  }
  // this.cellPosition = function(left, top) {
  //   return [this.borderSize + left, top];
  // }
}