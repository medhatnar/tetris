function center(context, size) {
  return Math.round((context / 2) - (size / 2));
}

function collidePointRect (pointX, pointY, x, y, xW, yW) {
  if (pointX >= x &&         // right of the left edge AND
      pointX <= x + xW &&    // left of the right edge AND
      pointY >= y &&         // below the top AND
      pointY <= y + yW) {    // above the bottom
          return true;
  }
  return false;
}

function randomLetter() {
  // const selection = randRange(0, 7);
  const selection = 0;
  if (selection === 0) return new I();
  else if (selection === 1) return new J();
  else if (selection === 2) return new L();
  else if (selection === 3) return new S();
  else if (selection === 4) return new Z();
  else if (selection === 5) return new T();
  else if (selection === 6) return new O();
}

function transistionToFullScreen() {
  resizeCanvas(screen.width, screen.height);
  const bodyElement = document.getElementById("body");
  bodyElement.requestFullscreen();
}

function randRange(min, max) {
  if (min < 0 && max <= 0) {
    return min + Math.floor(Math.random() * (Math.abs(min) + max));
  }
  else if (min < 0 && max >= 0) {
    return Math.floor(Math.random() * (Math.abs(min) + Math.abs(max))) + min;
  }
  else if (min >= 0) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}