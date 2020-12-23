class Box {
  constructor(x,y,width,height)
  {
   var options = {
       //restitution: 0.7,
       friction: 4.0,
       density: 4.0,
   }
  //this.body = Bodies.rectangle(200,200,50,50,options);
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  this.image = loadImage("Brick1.jpg");
  World.add(Dworld,this.body);
  }
  display()
  {
   var pos = this.body.position;
   var angle = this.body.angle;
   //push();
   //translate(pos.x,pos.y);
   //rotate(angle);
   //rectMode(CENTER);
   imageMode(CENTER);
   //strokeWeight(6);
   //stroke("maroon");
   image(this.image,pos.x,pos.y,this.width,this.height);
   //fill(255);
   //rect(0,0,this.width,this.height);
   //pop();

  }
}