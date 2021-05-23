var starImg,bgImg;
var star, starBody;
var fairy;
var fairyImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	musicSound = loadSound("JoyMusic.mp3")
	fairyImg = loadAnimation("fairyImage1.png", "fairyImage2.png")
}

function setup() {
	createCanvas(800, 750);

	musicSound.play();

	fairy = createSprite(200, 600, 20, 20)
	fairy.addAnimation("flying", fairyImg);
	fairy.scale = 0.2

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  keyPressed();

  if(star.y > 500 && starBody.position.y > 500 && fairy.x >400){
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyDown("right")){
		fairy.velocityX = 3;
	}else if(keyDown("left")){
		fairy.velocityX = -3;
	}else{
		fairy.velocityX = 0;
	}

	if (keyWentDown("down")) {
		Matter.Body.setStatic(starBody,false); 
	}

	
}
