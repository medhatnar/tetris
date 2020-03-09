class Shape {

  constructor(letter) {

    // Constants
    this.letter = letter;

    // Variables
    this.left = 5;
    this.top = 5;
    this.angle = 0;
  }

  displayOnGrid() {
    const blockPositions = this.letter.blockPositions(this.left, this.top, this.angle);
    for (let i = 0 ; i < 4 ; i++) {
      grid.gridArray[blockPositions[i][1]][blockPositions[i][0]] = this.letter.color;
    }
  }
}