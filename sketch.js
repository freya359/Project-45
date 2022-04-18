
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var girl,girlImg, butterflies, butterfliesImg;

function preload(){
	girlImg = loadImage("girlg.png")
	butterfliesImg = loadImage("3Butterflies.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	girl=createSprite(500,600,50,70);
	girl.addImage("girl",girlImg);
	girl.scale=0.2

	butterflies=createSprite(300,350,50,70)
    butterflies.addImage("butterflies", butterfliesImg)
	butterflies.scale=0.2

	Engine.run(engine);
  
}


function draw() {
background(78,153,0)
  rectMode(CENTER);
  
  
  drawSprites();
}



