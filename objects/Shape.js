class Shape {

  constructor(letter) {

    // Constants
    this.letter = letter;

    // Variables
    this.left = 5;
    this.top = 5;
    this.angle = 0;
    this.width = letter.width(this.angle);
    this.height = letter.width(this.angle + 1);
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


    // for (let i = 0 ; i < blockPositions.length ; i++) {
      // grid.gridArray[blockPositions[i][1]][blockPositions[i][0]] = this.letter.color;
      // image(this.letter.image, 200, 200);
    // }
  }
}