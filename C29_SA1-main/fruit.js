class Fruit 
{
  constructor(x, y, r) 
  {
    let options = {
     restitution:1
    };
    
    this.body = Bodies.circle(x, y,r ,options);
this.r = r
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    ellipseMode(CENTER);
    noStroke();
    fill(148,127,146);
    ellipse(pos.x,pos.y, this.r);
    pop();
  }
}
