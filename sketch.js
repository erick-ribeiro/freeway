let imageRoad;

let imagePlayer;
let imagePlayerX = 100;
let imagePlayerY = 360;
let imagePlayerWidth = 60;
let imagePlayerHeight = 60;
let imagePlayerSpeed = 3

let imagePolice;
let imagePoliceX = 410;
let imagePoliceY = 72;
let imagePoliceWidth = 90;
let imagePoliceHeight = 90;
let imagePoliceSpeed = 2

function preload(){
  imageRoad = loadImage("assepts/road.png");
  imagePlayer = loadImage("assepts/player.png");
  imagePolice = loadImage("assepts/police.png")
}

function setup(){
    createCanvas(500, 400);
  }
  
  function draw(){
    background(imageRoad);
    showPolice();
    showPlayer();
  }

  function showPlayer(){
    image(imagePlayer, imagePlayerX, imagePlayerY, imagePlayerWidth, imagePlayerHeight);
    movePlayer();
  }

  function showPolice(){
    image(imagePolice, imagePoliceX, imagePoliceY, imagePoliceWidth, imagePoliceHeight);
    movePolice();
  }

  function movePolice(){
    imagePoliceX -= imagePoliceSpeed
  }

  function movePlayer(){
    if (keyIsDown(UP_ARROW)){
      imagePlayerY -= imagePlayerSpeed
    }
    if (keyIsDown(DOWN_ARROW)){
      imagePlayerY += imagePlayerSpeed
    }
  }