let imagePlayerX = 100;
let imagePlayerY = 367;
let imagePlayerWidth = 30;
let imagePlayerHeight = 30;
let imagePlayerSpeed = 3;
let collide = false;

function showPlayer() {
  image(
    imagePlayer,
    imagePlayerX,
    imagePlayerY,
    imagePlayerWidth,
    imagePlayerHeight
  );
  movePlayer();
}

function movePlayer() {
  if (keyIsDown(UP_ARROW)) {
    if (imagePlayerY > 0){
      imagePlayerY -= imagePlayerSpeed;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (imagePlayerY < 375){
      imagePlayerY += imagePlayerSpeed;
    }
  }
  collideCommand();
}

function collideCommand() {
  for (let i = 0; i < imagePolice.length; i++) {
    collide = collideRectCircle(
      xPlayer[i],
      yPlayer[i],
      imagePoliceWidth,
      imagePoliceHeight,
      imagePlayerX,
      imagePlayerY,
      15
    );
    if (collide) {
      imagePlayerY = 375;
      if (score > 0){
        score--;
      }
    }
  }
}

function win() {
  if (imagePlayerY < 15) {
    score++;
    imagePlayerY = 375;
  }
}
