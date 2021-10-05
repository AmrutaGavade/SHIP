var ship,shipimage,sea,seaimage
function preload(){
shipimage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaimage=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,20,20)
  sea.addImage(seaimage)
  sea.scale=0.3
  ship=createSprite(200,200,20,20)
  ship.addAnimation("ship",shipimage)
ship.scale=0.3
ship.velocityX=1
}

function draw() {
  background("blue");
 drawSprites();
}