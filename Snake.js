class Snake{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.size = 20;
    this.xspeed = 1;
    this.yspeed = 0;
  }

  render(){
    rect(this.x, this.y, this.size, this.size);
  }
}