let snake = null;
let food = {};
let width = 350;
let height = 450;

const screen = document.querySelector('.screen')
const gameover = document.querySelector(".gameover");
const score = document.querySelector(".score");
const arrows = document.querySelectorAll(".arrow");

arrows.forEach((arrow) => arrow.addEventListener("click", handleClickArrow));

function setup() {
  createCanvas(width, height);
  setWidth();
  resizeCanvas(width, height);

  // move arrow inside main
  const arrowWrapper = document.querySelector(".arrow-buttons");
  const main = document.querySelector("main");

  main.appendChild(arrowWrapper);
  frameRate(6);
  snake = new Snake();
  renderFood();
}

window.addEventListener('resize', windowResized);

function windowResized(){
  setWidth();

  resizeCanvas(width, height);
}

function setWidth() {
    if(windowWidth > 400){
      width = 370;
    }

    if(windowWidth > 450){
      width = 420;
    }

    if(windowWidth > 500){
      width = 460;
    }

    if(windowWidth > 550){
      width = 520;
    }

    if(windowWidth > 600){
      width = 560;
    }

    if(windowWidth > 650){
      width = 620;
    }

    if(windowWidth > 700){
      width = 670;
    }
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
  } else {
    screen.style.display = "flex";
    score.textContent = snake.length;
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
    selectArrow("arrow-up");
  } else if (keyCode === DOWN_ARROW) {
    snake.direction(createVector(0, 1));
    selectArrow("arrow-down");
  } else if (keyCode === RIGHT_ARROW) {
    snake.direction(createVector(1, 0));
    selectArrow("arrow-right");
  } else if (keyCode === LEFT_ARROW) {
    snake.direction(createVector(-1, 0));
    selectArrow("arrow-left");
  }
}

function handleClickArrow(e) {
  const arrow = e.target;
  if (arrow.classList.contains("arrow-up")) {
    snake.direction(createVector(0, -1));
  } else if (arrow.classList.contains("arrow-down")) {
    snake.direction(createVector(0, 1));
  } else if (arrow.classList.contains("arrow-right")) {
    snake.direction(createVector(1, 0));
  } else if (arrow.classList.contains("arrow-left")) {
    snake.direction(createVector(-1, 0));
  }
}

function selectArrow(className) {
  arrows.forEach((arrow) => {
    if (arrow.classList.contains(className)) {
      arrow.classList.add("active");
      setTimeout(() => {
        arrow.classList.remove("active");
      }, 300);
    }
  });
}

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  screen.style.display = "none";
  loop();
  setup();
});
