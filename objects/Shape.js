class Shape {

  constructor(left, top, letter) {

    // Constants
    this.letter = letter;

    // Variables
    this.left = left;
    this.top = top;
    this.angle = 0;
  }


  displayOnGrid() {
    const blockPositions = this.letter.blockPositions(this.left, this.top, this.angle);
    for (let i = 0 ; i < blockPositions.length ; i++) {
      const currentCellPosition = grid.cellPosition(blockPositions[i][0], blockPositions[i][1]);
      if (this.letter.color === "W") {
        image(whiteBlockImage, currentCellPosition[0], currentCellPosition[1]);
      }
      else if (this.letter.color === "DB") {
        image(darkBlueBlockImage, currentCellPosition[0], currentCellPosition[1])
      }
      else if (this.letter.color === "HP") {
        image(hotPinkBlockImage, currentCellPosition[0], currentCellPosition[1])
      }
      else if (this.letter.color === "LP") {
        image(lightPinkBlockImage, currentCellPosition[0], currentCellPosition[1])
      }
      else if (this.letter.color === "P") {
        image(purpleBlockImage, currentCellPosition[0], currentCellPosition[1])
      }
      else if (this.letter.color === "SB") {
        image(skyBlueBlockImage, currentCellPosition[0], currentCellPosition[1])
      }
      else if (this.letter.color === "Y") {
        image(yellowBlockImage, currentCellPosition[0], currentCellPosition[1])
      }
    }
  }

  displayInPreview() {
    if (this.letter.color === "W") {
      image(iShapePreviewImage, this.left, this.top);
    }
    else if (this.letter.color === "DB") {
      image(oShapePreviewImage, this.left, this.top);
    }
    else if (this.letter.color === "HP") {
      image(sShapePreviewImage, this.left, this.top);
    }
    else if (this.letter.color === "LP") {
      image(lShapePreviewImage, this.left, this.top);
    }
    else if (this.letter.color === "P") {
      image(jShapePreviewImage, this.left, this.top);
    }
    else if (this.letter.color === "SB") {
      image(zShapePreviewImage, this.left, this.top);
    }
    else if (this.letter.color === "Y") {
      image(tShapePreviewImage, this.left, this.top);
    }    
  }
}