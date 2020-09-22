const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var particle, turn=0;
var score=0;


function setup() {
  var canvas =createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  
 
  ground = new Ground(450, height, 780,20);
  
  for (var j = 40; j <=width;j=j+50) {
        plinkos.push(new Plinko(j,75));
  }
  
  for (let j = 15; j <=width-10; j=j+50) {
    
     plinkos.push(new Plinko(j,175));
  }
  
  for (var j = 40; j <=width-10;j=j+50) {
        plinkos.push(new Plinko(j,225));
  }
  
  for (let j = 15; j <=width-10; j=j+50) {
    
     plinkos.push(new Plinko(j,275));
  }
  
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
}

function draw() {
if (frameCount % 60 === 0) {
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  
}

  background("black"); 
  Engine.update(engine);

  noStroke();
  textSize(35)
  fill("white")
  text("Score" +score,width-300,50)
  
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
    
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
    
  }
 
  for (let k = 0; k < plinkos.length; k++) {
    plinkos[k].display();
    
  }
  ground.display();
  //drawSprites();
  function mousePressed(){

    if(gameState!=="end")
  {
     count++;
     particle=new Particle(mouseX,10,10,10);

     

  }
  if(partice!=null){
       particle.display();
            
                if(particle.body.position.y>760){
                  if(particle.body.position.x<300){

                    score=score+500;
                    particle=null;
                    if(count>=5)gameState="end";


                  }
                }
     }
}
}