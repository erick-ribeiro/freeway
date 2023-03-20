let imagePlayerX = 100;
let imagePlayerY = 360;
let imagePlayerWidth = 60;
let imagePlayerHeight = 60;
let imagePlayerSpeed = 3;

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
}
