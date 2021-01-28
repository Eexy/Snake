class Snake{
  constructor(){
    this.pos = createVector(0,0);
    this.speed = createVector(1, 0);
    this.size = 20;
    this.length = 0;
    this.tails = [];
  }

  render(){
    this.update();

    fill(255)
    rect(this.pos.x, this.pos.y, this.size, this.size);

    this.tails.forEach((tail) => {
      rect(tail.x, tail.y, this.size, this.size);
    })
  }

  eat(){
    this.tails.push(createVector(0,0));
    ++this.length;
  }

  update(){
    const copy = this.speed.copy().mult(this.size) 

    if(this.length > 0){
      for(let i = this.length - 1; i > 0; i--){
        this.tails[i] = this.tails[i - 1];
      }

      this.tails[0] = this.pos.copy();
    }


    this.pos.add(copy)
  }

  direction(newSpeed){
    this.speed.set(newSpeed);
  }
}