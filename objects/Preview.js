function Preview() {
  
  // Constants
  const top = -3;
  const left = 650;
  const width = 150;
  const height = 450;
  const shapeImageLeft = 700;

  // Variables
  // The randomLetter function is in the helper functions file. 
  const shapes = [
    new Shape(shapeImageLeft, 50, randomLetter()),
    new Shape(shapeImageLeft, 150, randomLetter()),
    new Shape(shapeImageLeft, 250, randomLetter()),
    new Shape(shapeImageLeft, 350, randomLetter())
  ]

  // Methods
  this.display = function() {
    stroke("magenta");
    strokeWeight(3);
    rect(left, top, width, height);
    for (let i = 0 ; i < shapes.length ; i++ ) {
      shapes[i].displayInPreview();
    }
  }

  this.newShape = function() {
    currentShape = new CurrentShape(7, 0, shapes[0].letter);
    shapes.shift();
    shapes[0].top = 50;
    shapes[1].top = 150;
    shapes[2].top = 250;
    shapes.push(new Shape(shapeImageLeft, 350, randomLetter()));
    mode.game = "shape in play";
  }
}