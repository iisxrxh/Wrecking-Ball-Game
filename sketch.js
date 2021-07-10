const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, chain;




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    ball = new Ball(600,300, 100, 100)

//First storey
    block1 = new Block(700, 50, 50, 50)
    block2 = new Block(750, 50, 50, 50)
    block3 = new Block(800, 50, 50, 50)
    block4 = new Block(850, 50, 50, 50)
    block5 = new Block(900, 50, 50, 50)
    block6 = new Block(950, 50, 50,50)

//Second Storey
    block7 = new Block(700, 100, 50, 50)
    block8 = new Block(750, 100, 50, 50)
    block9 = new Block(800, 100, 50, 50)
    block10 = new Block(850, 100, 50, 50)
    block11 = new Block(900, 100, 50, 50)
    block12 = new Block(950, 100, 50,50)
 
//Third Storey
    block13 = new Block(700, 150, 50, 50)
    block14= new Block(750, 150, 50, 50)
    block15 = new Block(800, 150, 50, 50)
    block16 = new Block(850, 150, 50, 50)
    block17= new Block(900, 150, 50, 50)
    block18 = new Block(950, 150, 50,50)



   
    chain = new Chain(ball.body,{x: 200, y:50});
}

function draw(){
  background ("white")
    
    Engine.update(engine);
    //strokeWeight(4)
    fill("black")
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    fill("blue")
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    fill("red")
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()
    block18.display()

    chain.display()
    ball.display()
    ground.display()


    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    chain.fly();
    
}



