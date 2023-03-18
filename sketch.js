let imageRoad;
let imagePlayer;

function preload(){
  imageRoad = loadImage("assepts/road.png");
  imagePlayer = loadImage("assepts/player.png")
}

function setup() {
    createCanvas(500, 400);
  }
  
  function draw() {
    background(imageRoad);
    image(imagePlayer, 100, 366, 30, 30)
  }