class Rect{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.size = 20;
    this.previous = [];
  }

  show(ctx){
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, this.y, this.size,this.size);
  }

  update(x, y){
    // save current position
    this.previous = [this.x, this.y];

    // set new position
    this.x = x;
    this.y = y;
  }

  // changeDirection(xspeed, yspeed){
  //   this.xspeed = xspeed;
  //   this.yspeed = yspeed;
  // }
}