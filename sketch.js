var ball,img,paddle, ballimg;
function preload() {
  ballimg = loadImage("ball.png");
  img = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   paddle = createSprite(350, 200, 20, 150);
  ball = createSprite(100, 200, 20, 20);
ball.addAnimation("ball", ball.png);
paddle.addAnimation("paddle",img );
ball.addAnimation("ball", ballimg);
 ball.velocityX = 9; 

}

function draw() {
  background(205,153,0);
  var edges = createEdgeSprites();
  ball.bounceOff(edges[0]); 
  ball.bounceOff(paddle);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.collide(edges);
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
randomVelocity();

  drawSprites();
  }
  
function randomVelocity(){ 
  if(ball.bounceOff (paddle)){
     ball.velocityY=random(-8,8);
  }  
}

