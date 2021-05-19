class Ball {
    constructor(x,y,r) {
        var options = {
            restitution: 0.4
        }
        this.r=r
        this.body = Bodies.circle(x,y,this.r,options);
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
      }
      display(){
          push()
          translate(this.body.position.x,this.body.position.y)
          rotate (this.body.angle)
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill(this.color);
      ellipse(0,0,this.r,this.r);
      }
    };
