function Display() {
  // Constants
  this.borderSize = 50;
  this.floorHeight = 30;

  this.display = function() {

    // Display the game area first
    gameArea.display();

    // Draw the walls and the floor.
    stroke('rgba(200, 0, 200, 0.8)');
    fill(`rgba(0, 0, 0, 0)`);
    strokeWeight(5); 
    rect(0, 0, this.borderSize, gameArea.size);
    rect(0, gameArea.size - this.floorHeight, (this.borderSize * 2) + (grid.unit * grid.width), this.floorHeight);
    rect(this.borderSize + (grid.width * grid.unit), 0, this.borderSize, gameArea.size);

    grid.display();
    currentShape.displayOnGrid();
    preview.display();
    game.display();
  }
}