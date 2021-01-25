const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let foodExist = false;

const rect = {
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    fill: 'black',
    speed: 1,
    direction: 2,
    eat: (food) => {
        const distX = Math.abs(rect.x - food.x);
        const distY =  Math.abs(rect.y - food.y);
        
        if(distX < rect.width-5 && distY < rect.height-5){
            foodExist = false
            rect.tails.push({
                x: 0,
                y: 0,
                previousX: 0,
                previousX: 0,
                height: 20,
                width: 20,
                fill: 'black'
            });
        }

    },
    tails: [],
    renderTails : () => {
        rect.tails.forEach((el, i) => {
            el.x = ((i+1)*rect.speed)+(rect.width*(i+1));
            el.y = rect.y;

            ctx.fillStyle = el.fill;
            ctx.fillRect(el.x, el.y, rect.width, rect.height);
        });
    }
}

const food = {
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    fill: 'red'
}

function clear(){
    ctx.clearRect(0,0,300,150);
}

function render(){
    clear();
    if(rect.direction === 2){
        rect.x += rect.speed;
    }else if(rect.direction === 4){
        rect.x -= rect.speed;
    }else if(rect.direction === 3){
        rect.y += rect.speed;
    }else if(rect.direction === 1){
        rect.y -= rect.speed;
    }



    ctx.fillStyle = rect.fill;
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    rect.renderTails();
    checkCollision()

    if(!foodExist){
        generateFood();
    }

    if(foodExist){
        renderFood();
        rect.eat(food);
    }

    requestAnimationFrame(render);
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
        clear();
        rect.direction = 3;
    }else if(e.key === 'ArrowUp'){
        clear();
        rect.direction = 1;
    }else if(e.key === 'ArrowRight'){
        clear();
        rect.direction = 2;
    }else if(e.key === 'ArrowLeft'){
        clear();
        rect.direction = 4;
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

requestAnimationFrame(render);

window.addEventListener('keydown', move);

ctx.fillRect(rect.x, rect.y, rect.width, rect.height);