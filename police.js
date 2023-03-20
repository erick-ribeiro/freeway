let imagePoliceX = 410;
let imagePoliceY = 72;
let imagePoliceWidth = 90;
let imagePoliceHeight = 90;
let imagePoliceSpeed = 2;

function showPolice() {
  image(
    imagePolice,
    imagePoliceX,
    imagePoliceY,
    imagePoliceWidth,
    imagePoliceHeight
  );
  movePolice();
}

function movePolice() {
  imagePoliceX -= imagePoliceSpeed;
}
