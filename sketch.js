const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, sky;
var box1, box2, pig1, log1, box3, box4, box5, bird;

function preload() {
    sky = loadImage("sprites/bg.png")
}


function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,350,70,70);
    box2 = new Box(920,350,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,300,300, PI/2);

    box3 = new Box(700, 270, 70, 70)
    box4 = new Box(920, 270, 70, 70)
    box5 = new Box(810, 180, 70, 70)
    pig2 = new Pig(810, 280)

    log2 = new Log(810, 180, 300, PI/2)
    log3 = new Log(760, 140, 150, PI/7)
    log4 = new Log(860, 140, 150, -PI/7)
    bird = new Bird(200, 200, 50, 50)
}

function draw(){
    background(sky);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log4.display();
    log3.display();

    bird.display();
}