let yPlayer = [24, 82, 134, 195, 247, 304];
let xPlayer = [570, 540, 600, 570, 540, 600];
let speedPolice = [4, 2, 3, 2, 3, 4];

let imagePoliceWidth = 70;
let imagePoliceHeight = 70;

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
