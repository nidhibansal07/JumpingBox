var canvas;
var music;
var fixedRect1, fixedRect2, fixedRect3, fixedRect4, movingRect;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
        fixedRect1 = createSprite(100,578,195,30);
        fixedRect1.shapeColor = "blue";
        fixedRect2 = createSprite(300,578,195,30);
        fixedRect2.shapeColor = "orange";
        fixedRect3 = createSprite(500,578,195,30);
        fixedRect3.shapeColor = "red";
        fixedRect4 = createSprite(700,578,195,30);
        fixedRect4.shapeColor = "green";

    //create box sprite and give velocity

    movingRect = createSprite(random(20,750),300,40,40);
    movingRect.shapeColor = "white";
    movingRect.velocityX = 6;
    movingRect.velocityY = 6;

    music.play();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
        edges = createEdgeSprites();
        movingRect.bounceOff(edges);

        

    //add condition to check if box touching surface and make it box

    drawSprites();

    if(movingRect.isTouching(fixedRect1) && movingRect.bounceOff(fixedRect1)){
        movingRect.shapeColor = "blue";
    }

    if(movingRect.isTouching(fixedRect2) ){
        movingRect.shapeColor = "orange";
        movingRect.velocityX = 0;
        movingRect.velocityY = 0;
        music.stop();
    }

    if(movingRect.isTouching(fixedRect3) && movingRect.bounceOff(fixedRect3)){
        movingRect.shapeColor = "red";
    }

    if(movingRect.isTouching(fixedRect4) && movingRect.bounceOff(fixedRect4)){
        movingRect.shapeColor = "green";
    }

}
