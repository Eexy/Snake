class Snake{
  constructor(){
    this.pos = createVector(0,0);
    this.speed = createVector(1, 0);
    this.size = 20;
  }

  render(){
    this.update();

    fill(255)
    rect(this.pos.x, this.pos.y, this.size, this.size);
  }

  eat(){
    console.log('miam');
  }

  update(){
    const copy = this.speed.copy().mult(this.size) 

    this.pos.add(copy)
    // console.log(this.pos)
  }

  direction(newSpeed){
    this.speed.set(newSpeed);
  }
}