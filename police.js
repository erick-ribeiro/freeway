let yPlayer = [14, 72, 124];
let xPlayer = [570, 540, 600];
let speedPolice = [4, 2, 3];

let imagePoliceWidth = 90;
let imagePoliceHeight = 90;

function showPolice() {
  for (let i = 0; i < imagePolice.length; i++){
    image(
      imagePolice[i],
      xPlayer[i],
      yPlayer[i],
      imagePoliceWidth,
      imagePoliceHeight
    );
    movePolice(i);
  }
}

function movePolice(i) {
  if (xPlayer[i] < -80){
    xPlayer[i] = 570
  }
  xPlayer[i] -= speedPolice[i];
}
