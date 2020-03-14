function Grid() {

  // CONSTANTS
  this.unit = 42;
  this.width = 10;
  // this.width = 15;
  // this.height = 33;
  this.height = 24;
  this.left = display.borderSize - this.unit;
  this.top = -(this.unit * 4);
  const blockOffset = 7;

  // VARIABLES
  this.gridArray = [];

  for (let i = 0; i <= this.height; i++) {
    const gridRow = [];
    for (let j = 0; j < this.width; j++) {
      if (i === this.height) gridRow[j] = "Floor";
      else gridRow[j] = null;
    }
    gridRow.unshift("Wall");
    gridRow.push("Wall");
    this.gridArray[i] = gridRow;
  }

  let fullLines = [];

  // METHODS
  this.display = function() {
    strokeWeight(3);

    // Vertical Lines
    stroke(`rgba(255, 0, 100, ${fallIntervalTimer.fallCyclePercentage()})`);

    for (let i = 2; i <= this.width; i++) {
      line(
        this.left + this.unit * i,
        0,
        this.left + this.unit * i,
        gameArea.size - display.floorHeight
      );
    }

    // Horizontal Lines
    stroke("blue");
    for (let i = 0; i < this.height - 4; i++) {
      line(
        this.left + this.unit,
        this.unit * i,
        (this.left + this.unit) + (this.width * this.unit),
        this.unit * i
      );
    }

    // Draw block images for any shapes absorbed into the grid.
    // Iterate through each row.
    for (let i = 0; i < this.gridArray.length; i++) {
      // Iterate through each cell of each row.
      for (let j = 0; j < this.gridArray[i].length; j++) {
        // Check to see if cell is null.
        if (this.gridArray[i][j]) {
          // Let's locate the exact spot we want to draw our image.
          const gridCell = this.gridArray[i][j];
          const gridCellLeft = this.left + this.unit * j + blockOffset;
          const gridCellTop = this.unit * i + this.top + blockOffset;

          // Now let's draw an image based on the string stored in our grid array.
          if (gridCell === "P") {
            image(purpleBlockImage, gridCellLeft, gridCellTop);
          } else if (gridCell === "DB") {
            image(darkBlueBlockImage, gridCellLeft, gridCellTop);
          } else if (gridCell === "SB") {
            image(skyBlueBlockImage, gridCellLeft, gridCellTop);
          } else if (gridCell === "HP") {
            image(hotPinkBlockImage, gridCellLeft, gridCellTop);
          } else if (gridCell === "LP") {
            image(lightPinkBlockImage, gridCellLeft, gridCellTop);
          } else if (gridCell === "W") {
            image(whiteBlockImage, gridCellLeft, gridCellTop);
          } else if (gridCell === "Y") {
            image(yellowBlockImage, gridCellLeft, gridCellTop);
          }
        }
      }
    }
  };

  // The CurrentShape object uses this function to correctly position it's own block images.
  this.cellPosition = function(left, top) {
    return [
      this.left + this.unit * left + blockOffset,
      this.unit * top + this.top + blockOffset
    ];
  };

  // Takes the CurrentShape and integrates its blocks into the grid.
  this.absorbCurrentShape = function() {
    const blockColor = currentShape.letter.color;
    const blockPositions = currentShape.letter.blockPositions(
      currentShape.left,
      currentShape.top,
      currentShape.angle
    );
    for (let i = 0; i < 4; i++) {
      grid.gridArray[blockPositions[i][1]][blockPositions[i][0]] = blockColor;
    }
    gridAbsorbSound.play();
  };

  this.lineCheck = function() {

    // Note we use the 'height' variable, as we don't want to include the "floor" row in our check.
    // We also are not checking above the screen, hence 'i' starting at 4. 
    for (let i = 4 ; i < this.height ; i++) {
      // We also don't want to check the "wall" cells in a given row. Hence we start 'j' at 1.
      for (let j = 1 ; j < this.width + 1 ; j++) {
        // If we get a single null cell, we know the line is not full. 
        if (this.gridArray[i][j] === null) break;

        // If we reach the end of a row and have not gotten a null value, we know it's full. 
        // Thus we add the row number to our 'fullLines' array. 
        if (j === this.width) {
          fullLines.push(i);
        }
      }
    }
    
    // If there are full lines, we want to switch to the game mode of "line collapse".
    if (fullLines.length !== 0) {
      mode.game = "line collapse";
      fullLineSound.play();
    }
    else mode.game = "new shape";
  }

  this.lineCollapse = function() {
    const percentage = fallIntervalTimer.fallCyclePercentage();
    if (percentage < 0.9) {
      
      strokeWeight(0);
      fill(`rgba(255, 255, 255, ${percentage/2})`);
      for (let i = 0 ; i < fullLines.length ; i++) {
        rect(
          this.left + this.unit, 
          this.top + (this.unit * fullLines[i]), 
          this.unit * this.width, 
          this.unit
        );
      }
    }
    else if (fallIntervalTimer.lastFrame()) {
      const newGridArray = this.gridArray.filter((row, index) => {
        return (!(fullLines.includes(index)));
      })
      for(let i = 0; i < fullLines.length ; i++) {
        newGridArray.unshift(["Wall", null, null, null, null, null, null, null, null, null, null, "Wall"]) 
      }

      // We want to update the score before we dispose of the full lines in our logic.
      game.updateScore(fullLines.length);
      fullLines = [];
      this.gridArray = newGridArray;
      if (! (mode.game === "level up")) mode.game = "new shape";
    }
  }
}
