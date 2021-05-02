var boy1, boy2;
var skyImg, sky;
var plane1Img, plane2Img;
var box = Math.round(random(1,6))
var box2 = Math.round(random(1,6))


function preload(){
  skyImg = loadImage("sky_2.jpg")
  plane1Img = loadImage("plane_1.png")
  plane2Img = loadImage("plane_2.png")
  boy1Img = loadImage("boy_1.png")
  boy2Img = loadImage("boy_2.png")
  


}


function setup(){
  canvas = createCanvas(1500,800)
  boy1 = createSprite(1400,700,50,100)
  boy2 = createSprite(100,700,50,100)
  boy1.addImage(boy1Img)
  boy1.scale = 0.3
  boy2.addImage(boy2Img)
  boy2.scale = 0.5
  plane1 = createSprite(1200,600,80,30)
  plane1.addImage(plane1Img)
  plane1.scale = 0.2
  plane2 = createSprite(300,600,80,30)
  plane2.addImage(plane2Img)
  plane2.scale = 0.5

  
}

function draw(){
  background(skyImg)
  if(KeyIsDown(UP_ARROW)){
 // plane1.velocityX = -box
  plane2.velocityX = (Math.random(1,6))
 }

  


  drawSprites()
}

