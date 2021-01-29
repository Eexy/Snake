let snake = null;
let food = {};

const gameoverScreen = document.querySelector('.gameover');

function setup() {
  createCanvas(600, 600);
  frameRate(6);
  snake = new Snake();
  renderFood();
}

function draw() {
  background(0);
  // render if snake is not dead
  if (!snake.collision()) {
    snake.render();
    fill("red");
    rect(food.x, food.y, 20, 20);

    // Check the distance beetween the food and the snake head
    if (food.dist(snake.pos) < 2) {
      snake.eat();
      renderFood();
    }
  }else{
    gameoverScreen.style.display = 'flex';
    noLoop();
  }
}

function renderFood() {
  const rows = floor(width / 20);
  const cols = floor(height / 20);

  food = createVector(floor(random(rows)), floor(random(cols)));
  food.mult(20);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.direction(createVector(0, -1));
  } else if (keyCode === DOWN_ARROW) {
    snake.direction(createVector(0, 1));
  } else if (keyCode === RIGHT_ARROW) {
    snake.direction(createVector(1, 0));
  } else if (keyCode === LEFT_ARROW) {
    snake.direction(createVector(-1, 0));
  }
}

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  gameoverScreen.style.display = 'none';
  loop();
  setup();
});
