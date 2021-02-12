var canvas;
var music;
var fixedRect;
var movingRect;
var gameObject1;
var gameObject2;
var gameObject3;   

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1200,800);
    fixedRect = createSprite(1000,750,100,50);
    fixedRect.shapeColor = "green"

    movingRect = createSprite(800,400,100,30);
    movingRect.shapeColor = "white"; 
    
    gameObject1 = createSprite(850,750,100,50);
    gameObject1.shapeColor = "red";
    
    gameObject2 = createSprite(700,750,100,50);
    gameObject2.shapeColor = "cyan";

    gameObject3 = createSprite(550,750,100,50);
    gameObject3.shapeColor = "orange";
}

function draw() {
    background(0,0,0);
    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;

    
       if (movingRect.isTouching( gameObject1    )){
        movingRect.shapeColor = "red";
        //gameObject1.shapeColor = "red";
    }
   /*else if{
       movingRect.shapeColor = "white";
        gameObject1.shapeColor = "red";
       }*/

       if (movingRect.isTouching( gameObject2    )){
        movingRect.shapeColor = "cyan";
        //gameObject2.shapeColor = "cyan";
    }
    /*else{
        movingRect.shapeColor = "white";
gameObject2.shapeColor = "cyan";
}*/
       if (movingRect.isTouching( gameObject3   )){
       movingRect.shapeColor = "orange";
        //gameObject3.shapeColor = "orange";
    }
    /*else{
        movingRect.shapeColor = "white";
        gameObject3.shapeColor ="orange" ;
       }*/

       if (movingRect.isTouching( fixedRect  )){
        movingRect.shapeColor = "green";
     //fixedRect.shapeColor = "green";
     
     
     
    }
    /*else{
        movingRect.shapeColor = "white";
        fixedRect.shapeColor = "green";
     
       }*/
        drawSprites();
}

/*function isTouching(object1 , object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2
        && object1.y - object2.y < object2.height/2 + object1.height/2
        && object2.y - object1.y < object2  .height/2 + object1.height/2) {
      return  true;     
}
else{
    return false;
}
} */  