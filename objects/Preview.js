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

  // this.newShape = function() {
  //   shapes[0].left = 7;
  //   shapes[0].top = -4;
  //   currentShape = shapes.pop();
  //   // shapes[0].top = 50;
  //   // shapes[1]
  //   // shapes.push(new Shape(shapeImageLeft, ))
  // }
}