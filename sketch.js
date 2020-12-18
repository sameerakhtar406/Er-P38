var Plane,PImg
var FuelImg

function preload() {
  PImg=loadImage("m Plane.png")
  FuelImg=loadImage("fuel-petrol-png-gas.png")
}
function setup() {
  canvas = createCanvas(displayWidth-20,displayHeight-30);

  Plane=createSprite(displayWidth/4,displayHeight-150)
  Plane.addImage(PImg)  
  
}
function draw() {
  background(87,224,255);
  stone();
  
 // if(keyDown("space")&& monkey.y >= 290) {
 // monkey.velocityY = -19;
 //   monkey.velocityX = 0.4;}  monkey.velocityY=monkey.velocityY + 0.8  monkey.collide(invisibleGround)

 // if(obstacleGroup.isTouching(monkey)){
 //   monkey.velocityX=0 monkey.velocityY=0  bg.velocityX = 0; obstacleGroup.setVelocityXEach(0); } 
  drawSprites(); 
}
function stone(){
    var Fuel=createSprite(displayWidth/2-50,displayHeight/3)
    Fuel.addImage(obstacleImage);
    Fuel.velocityX = -3;
    Fuel.scale = 0.2;
    Fuel.lifetime = 300;
    
    //obstacleGroup.add(Fuel);
}