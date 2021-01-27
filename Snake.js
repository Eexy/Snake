class Snake{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.speed = 20;
    this.history = [];
    this.direction = 2;
  }

  show(ctx){
    this.update();
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, this.y, 20,20);

    this.history.forEach((pos) => {
      ctx.fillStyle = 'red';
      ctx.fillRect(pos[0], pos[1], 1, 20);
    });
  }

  update (){

    // save current position
    const current = [this.x, this.y+20];
    this.history.push(current);

    if(this.history.length > 20){
      this.history.shift();
    }

    // set new position
    if(this.direction === 1){
      this.y -= this.speed;
    }else if(this.direction === 2){
      this.x += this.speed;
    }else if(this.direction === 3){
      this.y += this.speed;
    }else if(this.direction === 4){
      this.x -= this.speed;
    }
  }

  changeDirection(newDirection){
    this.direction = newDirection;
    console.log(this.direction)
  }
}