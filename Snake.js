class Snake{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.size = 20;
    this.previous = [];
    this.tails = [];
    this.direction = 2;
  }

  show(ctx){
    this.update();
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, this.y, this.size,this.size);

    this.tails.forEach((el) => el.show(ctx));
  }

  update (){
    // save current position
    this.previous = [this.x, this.y];

    this.checkWallCollision();

    // set new position
    this.y +=  this.yspeed * this.size;
    this.x +=  this.xspeed * this.size;

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
  }

  changeDirection(xspeed, yspeed){
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }

  checkWallCollision(){
    if(this.x < 0){
      this.x = 350;
    }else if(this.x > 350){
      this.x = 0 - this.size;
    }else if(this.y < 0){
      this.y = 150;
    }else if(this.y > 150){
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