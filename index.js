let snake = null;
let food = null;

function setup(){
  createCanvas(400, 400);
  frameRate(6);
  snake = new Snake();
}

function draw(){
  background(51);
  snake.render();
}

function renderFood(){
  const rows = floor(width / 20);
  const cols = floor(height / 20);
  
  food = {x,y};
}


function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.direction(createVector(0, -1));
  }else if(keyCode === DOWN_ARROW){
    snake.direction(createVector(0, 1));
  }else if(keyCode === RIGHT_ARROW){
    snake.direction(createVector(1, 0));
  }else if(keyCode === LEFT_ARROW){
    snake.direction(createVector(-1, 0));
  }
}