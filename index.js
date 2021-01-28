let snake = null;
let food = {};

function setup(){
  createCanvas(400, 400);
  frameRate(6);
  snake = new Snake();
  renderFood();
}

function draw(){
  background(51);
  snake.render();

  fill('red');
  rect(food.x, food.y, 20,20);

  // Check the distance beetween the food and the snake head
  if(food.dist(snake.pos) < 2){
    snake.eat();
    renderFood();
  }
}


function renderFood(){
  const rows = floor(width / 20);
  const cols = floor(height / 20);

  food = createVector(floor(random(rows)), floor(random(cols)));
  food.mult(20);  
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