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


function collideRectRect (x, y, w, h, x2, y2, w2, h2) {
  //2d
  //add in a thing to detect rectMode CENTER
  if (x + w >= x2 &&    // r1 right edge past r2 left
      x <= x2 + w2 &&    // r1 left edge past r2 right
      y + h >= y2 &&    // r1 top edge past r2 bottom
      y <= y2 + h2) {    // r1 bottom edge past r2 top
        return true;
  }
  return false;
};

function transistionToFullScreen() {
  resizeCanvas(screen.width, screen.height);
  windowWidth = screen.width;
  windowHeight = screen.height;
  const bodyElement = document.getElementById("body");
  bodyElement.requestFullscreen();
}

function pauseEverything() {
  player.pause = true;
  enemySet.pause = true;
  for (const enemyIndex in enemySet.enemies) {
    enemySet.enemies[enemyIndex].pause = true;
  }
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

function minimum(min, comparative) {
  if (min > comparative) {
    return min;
  }
  else return comparative;
}

function maximum(max, comparative) {
  if (max < comparative) {
    return max;
  }
  else return comparative;
}