const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground1;
var BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7, BlockBlue8;
var BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;
var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;
var polygon1;

function preload(){
  hexagonImg = loadImage("polygon.png");
}
function setup() {

  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world
  ground1 = new Ground(170, 200, 320, 20);

  //first level
  BlockBlue1 = new BoxBlue(200, 180, 20, 20);
  BlockBlue2 = new BoxBlue(230, 180, 20, 20);
  BlockBlue3 = new BoxBlue(260, 180, 20, 20);
  BlockBlue4 = new BoxBlue(290, 180, 20, 20);
  BlockBlue5 = new BoxBlue(320, 180, 20, 20);
  BlockBlue6 = new BoxBlue(350, 180, 20, 20);
  BlockBlue7 = new BoxBlue(380, 180, 20, 20);

  //second level
  BlockPink1 = new BoxPink(200, 50, 20, 20);
  BlockPink2 = new BoxPink(230, 50, 20, 20);
  BlockPink3 = new BoxPink(270, 50, 20, 20);
  BlockPink4 = new BoxPink(290, 50, 20, 20);
  BlockPink5 = new BoxPink(310, 50, 20, 20);
  BlockPink6 = new BoxPink(340, 50, 20, 20);
  BlockPink7 = new BoxPink(370, 50, 20, 20);

  //third level
  BlockBlue8  = new BoxBlue(202, 190, 20, 20);
  BlockBlue9  = new BoxBlue(220, 190, 20, 20);
  BlockBlue10 = new BoxBlue(240, 190, 20, 20);
  BlockBlue11 = new BoxBlue(260, 190, 20, 20);
  BlockBlue12 = new BoxBlue(280, 190, 20, 20);
  BlockBlue13 = new BoxBlue(300, 190, 20, 20);
  BlockBlue14 = new BoxBlue(320, 190, 20, 20);

  polygon1  = new poly(110, 100, 20, 20);

  sling = new SlingShot(polygon1.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);
  ground1.display();

  BlockBlue1.display();
  BlockBlue2.display();
  BlockBlue3.display();
  BlockBlue4.display();
  BlockBlue5.display();
  BlockBlue6.display();
  BlockBlue7.display();

  BlockPink1.display ();
  BlockPink2.display ();
  BlockPink3.display ();
  BlockPink4.display ();
  BlockPink5.display ();
  BlockPink6.display ();
  BlockPink7.display ();

  BlockBlue8.display ();
  BlockBlue9.display ();
  BlockBlue10.display();
  BlockBlue11.display();
  BlockBlue12.display();
  BlockBlue13.display();
  BlockBlue14.display();

  polygon1.display();
  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon1.body, {x: mouseX, y: mouseY})
}

function mouseReleased() {
  sling.fly();
}

function keyPressed(){
  if(keyPressed("space")){
    sling.attach(polygon1.body);
  }
}

