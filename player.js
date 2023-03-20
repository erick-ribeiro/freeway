let imagePlayerX = 100;
let imagePlayerY = 360;
let imagePlayerWidth = 60;
let imagePlayerHeight = 60;
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
    imagePlayerY -= imagePlayerSpeed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    imagePlayerY += imagePlayerSpeed;
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
      10
      );
      if (collide){
        imagePlayerY = 360;
      }
  }
}
