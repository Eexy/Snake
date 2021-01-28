const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let foodExist = false;
let frameCount = 0;
let then = null;
let fpsInterval = 0;
let startTime = null;
let now = null;
let ellapsed = 0;
let isLost = false;
const dpi = window.devicePixelRatio;
let height = 0;
let width = 0;
let snake = null;

const food = {
  x: 0,
  y: 0,
  fill: "red",
};

function startAnimate(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  render();
}

function clear() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
}

function render() {
  if (!snake.dead) {
    requestAnimationFrame(render);
    now = Date.now();
    ellapsed = now - then;

    if (ellapsed > fpsInterval) {
      then = now - (ellapsed % fpsInterval);
      clear();
      snake.show(ctx);

      if (!foodExist) {
        generateFood();
      }

      if (foodExist) {
        renderFood();
      }

      foodExist = snake.eat(food);
    }
  } else {
    gameoverScreen.style.display = "flex";
  }
}

function generateFood() {
  // We divide the board into column and row
  const rows = width / 20;
  const cols = height / 20;

  // Select a random pos;
  const row = Math.floor(Math.random() * (rows - 1));
  const col = Math.floor(Math.random() * (cols - 1));

  // render food
  food.x = row * 20;
  food.y = col * 20;

  foodExist = true;
}

function renderFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, 20, 20);
}

function move(e) {
  if (e.key === "ArrowDown") {
    snake.changeDirection(0, 1);
  } else if (e.key === "ArrowUp") {
    snake.changeDirection(0, -1);
  } else if (e.key === "ArrowRight") {
    snake.changeDirection(1, 0);
  } else if (e.key === "ArrowLeft") {
    snake.changeDirection(-1, 0);
  }
}
window.addEventListener("keydown", move);

// setup canvas
function setup() {
  clear();
  fixBlur();

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  snake = new Snake(height, width);
}

// fix canvas blurry effect
function fixBlur() {
  height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
  width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);

  canvas.setAttribute("height", height * dpi);
  canvas.setAttribute("width", width * dpi);

  ctx.scale(dpi, dpi);
}

const startBtn = document.querySelectorAll(".start-btn");

startBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    startupScreen.style.display = "none";
    gameoverScreen.style.display = "none";
    setup();
    startAnimate(5);
  });
});

const startupScreen = document.querySelector(".startup-screen");
const gameoverScreen = document.querySelector(".gameover-screen");
