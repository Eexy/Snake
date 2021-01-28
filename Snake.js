class Snake{
  constructor(height, width){
    this.x = 0;
    this.y = 0;
    this.canvasHeight = height;
    this.canvasWidth = width;
    this.xspeed = 1;
    this.yspeed = 0;
    this.size = 20;
    this.previous = [];
    this.tails = [];
    this.direction = 2;
    this.dead = false;
  }

  show(ctx){
    // check if the snake bit it's tail
      this.update();
      
      if(!this.dead){
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.size,this.size);
        this.tails.forEach((el) => el.show(ctx));
      }
  }

  update (){
    // save current position
    this.previous = [Math.round(this.x), Math.round(this.y)];

    this.checkWallCollision();

    
    // set new position
    this.y +=  Math.round(this.yspeed * this.size);
    this.x +=  Math.round(this.xspeed * this.size);

    console.log(this.previous)
    console.log([this.x, this.y]);

    // give the old position to the tails
    this.tails.forEach((el, i) => {
      if(i == 0){
        el.update(this.previous[0], this.previous[1]);
      }else{
        const x = this.tails[i-1].previous[0];
        const y = this.tails[i-1].previous[1];
        el.update(x, y);
      }
    });

    this.checkTailCollision();
  }

  checkTailCollision(){
    if(this.tails.length){
      this.tails.forEach((el) => {
        if(el.x == this.x && this.y == el.y){
          this.dead = true;
        }
      })
    }
  }

  changeDirection(xspeed, yspeed){
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }

  checkWallCollision(){
    if(this.x < 0){
      this.x = this.canvasWidth;
    }else if(this.x > this.canvasWidth){
      this.x = 0 - this.size;
    }else if(this.y < 0){
      this.y = this.canvasHeight;
    }else if(this.y > this.canvasHeight){
      this.y = 0 - this.size;
    }
  }

  eat(food){
    if(this.x == food.x && this.y == food.y){
      const rect = new Rect();
      this.tails.push(rect);
      return false;
    }

    return true;
  }
}