const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  engine = Engine.create();
  world = engine.world;
	
  var playerbase = new ComputerBase(300,random(450,height - 300),180,150);



 }

function draw() {

  background(180);

  Engine.update(engine);

  
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   playerbase.display();



}
