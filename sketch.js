
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;

var wall1, wall2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,100,20);
	ground = new Ground(400,680, 800, 20);

	wall1 = new Ground(600, 635, 15, 70);
	wall2 = new Ground(700, 635, 15, 70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();

  wall1.display();
  wall2.display();
  
  drawSprites();
 
}

function keyPressed(){

	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:60, y:-60})
	}
}



