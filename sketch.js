
var wizard, potion, book, heart, ghost, crow, crowImage;
var platformLadder, floatingPlatform, ground1, backgroundImg, groundImage,wizardImage;
var PLAY= 1;
var END=0;
var gameState= PLAY;
function preload(){
    backgroundImg = loadImage("backgroundIMG.jpg");
    groundImage = loadImage("ground.png");
    wizardImage= loadImage("wizard.png");
    crowImage= loadImage("crow.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    ground1 = createSprite(600,390,1200,20);
   invisibleGround = createSprite(600,400,1200,10);
   wizard = createSprite(75,360,20,20);
   ground1.scale= 5;
   wizard.scale=0.3;
   
    ground1.x = ground1.width/2;
    ground1.velocityX =-6;
    
   
    wizard.addImage("wizard",wizardImage);
    ground1.addImage ( "ground", groundImage);
}
function draw(){
    background(backgroundImg);
    
    
    if(gameState===PLAY){
        ground1.velocityX = -6;

        if (ground1.x < 0){
      ground1.x = ground1.width/2;
    }
    //if(keyCode===32 && wizard.y >= 370){
     // wizard.velocityY = -10 ;
    //}
    
     wizard.velocityY = wizard.velocityY + 0.8;
    }
    spawnCrows();
    console.log(gameState);
    drawSprites();
    }

function spawnCrows(){
  
  
  if(frameCount % 190===0){
    
    var crow = createSprite(1200,200,40,10);
    crow.addImage("crow", crowImage);
    crow.velocityX = -3;
    crow.scale= 0.2;
    crow.lifetime=400;
    wizard.depth= crow.depth;
    wizard.depth= wizard.depth+1;

  }
}
 
