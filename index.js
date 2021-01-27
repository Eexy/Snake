const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let foodExist = false;
let frameCount = 0;
let then = null;
let fpsInterval = 0;
let startTime = null;
let now = null;
let ellapsed = 0;

const food = {
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    fill: 'red'
}

function startAnimate(fps){
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    render();
}

let snake = new Snake();

function clear(){
    ctx.clearRect(0,0,300,150);
}

function render(){
    requestAnimationFrame(render);
    now = Date.now();
    ellapsed = now - then;

    if(ellapsed > fpsInterval){
        then = now - (ellapsed % fpsInterval);
        clear();
        snake.show(ctx);    
    }
}

function generateFood(){
    // We divide the board into column and row
    const rows = 300/rect.width;
    const cols = 150/rect.height;

    // Select a random pos;
    const row = Math.floor(Math.random() * (rows - 1));
    const col = Math.floor(Math.random() * (cols - 1));

    // render food
    food.x = row * food.width;
    food.y = col * food.height;

    foodExist = true;
}

function renderFood(){
    ctx.fillStyle = food.fill;
    ctx.fillRect(food.x, food.y, food.width, food.height);
}

function move(e){
    if(e.key === 'ArrowDown'){
        snake.changeDirection(3);
    }else if(e.key === 'ArrowUp'){
        snake.changeDirection(1);
    }else if(e.key === 'ArrowRight'){
        snake.changeDirection(2);
    }else if(e.key === 'ArrowLeft'){
        snake.changeDirection(4);
    }
}

function checkCollision(){
    if(rect.x < 0 - rect.width){
        rect.x = 300;
    }else if(rect.x > 300+rect.width){
        rect.x = 0;
    }else if(rect.y < 0 - rect.width){
        rect.y = 150;
    }else if(rect.y > 150 + rect.width){
        rect.y = 0;
    }
}

function showPos(){
    console.log(`x: ${rect.x}, y:${rect.y}`);
}

startAnimate(10);

window.addEventListener('keydown', move);