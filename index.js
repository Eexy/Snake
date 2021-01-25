const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const rect = {
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    fill: 'black',
    speed: 1,
    direction: 2
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

    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    checkCollision()
    requestAnimationFrame(render);
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