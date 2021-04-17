const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy,boy_img;
var bg_img;
var snow=[]

function preload(){
  boy_img =loadImage("unnamed.png")
  bg_img =loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,400);
  boy= createSprite(400,250,10,10)
  boy.addImage(boy_img)
  boy.scale=0.5;
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bg_img);  
  Engine.update(engine);
  if(keyDown(LEFT_ARROW)){
    boy.x=boy.x-10;
  }
  if(keyDown(RIGHT_ARROW)){
    boy.x=boy.x+10;
  }
  if (frameCount%0.5===0) {
    snow.push(snow1 = new Snow(random(1,800), 5, 20, 20));
  }
  for (var j = 0; j < snow.length; j++) {
    snow[j].display();
  }
  drawSprites();
}