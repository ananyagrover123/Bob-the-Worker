var worker , Image1, backgroundImage , rock , rockImage , rock2 , rock2Image , hammer , hammerImage;
var rockX,rockY;
var rocksGroup;
var bomb , bombGroup , bombImage;
var bombX , bombY

var gameState=0;

function preload(){

Image1=loadAnimation("sprite_0.png","sprite2.png","sprite3.png");

backgroundImage=loadImage("cave background.png");

rockImage=loadImage("rock.png");
rock2Image=loadImage("rock 2.png");

hammerImage=loadImage("hammer.png");
bombImage=loadImage("Bomb_PNG5.png")


}



function setup() {
  createCanvas(500,500);

  Image1.frameDelay= 5

  worker=createSprite(250,420,10,10);
  worker.addAnimation("worker",Image1)
  worker.scale=1.5;

  

  

  

  rocksGroup=new Group();
  bombGroup=new Group();

  


  
  
}



function draw() {
  background(backgroundImage);  
  

  worker.x=mouseX;


 
  if(gameState===0){
    welcome=new Welcome();
    welcome.display();
    background(255)
    
  }
 

  if(worker.isTouching(rocksGroup)){
  rocksGroup.destroyEach();
  }

  
  rockGroup();
  drawSprites();
  
}

function rockGroup(){

  rockX=Math.round(random(10,480));
  rockY=Math.round(random(5,20));
if(frameCount % 100===0){

 
  rock=createSprite(rockX,rockY,5,5);
  rock.scale=0.15
  rock.velocityY=+4
 rocksGroup.add(rock);

 var randomRock=Math.round(random(1,2))
 switch(randomRock){
   case 1:rock.addImage(rockImage)
   break
   case 2:rock.addImage(rock2Image)
   break
   default:break
 }
}
}