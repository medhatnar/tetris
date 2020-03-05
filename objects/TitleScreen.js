function TitleScreen() {
  this.display = function(){
    push();
    angleMode(DEGREES);
    ellipseMode(CENTER);
    translate(200, 200);
    rotate(-45);
    textFont("Dosis");
    textSize(20);
    strokeWeight(5);
    stroke(25, 43, 127);
    fill(255);
    text("Hello World", 100, 100, 500, 500);
    ellipse(300, 300, 50, 50);
    pop();
  }
}