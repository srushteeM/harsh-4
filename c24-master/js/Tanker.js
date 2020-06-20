class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width; 
      this.height = height;
      World.add(world, this.body);
    };

    display(){
       var pos=this.body.position;
        var angle=this.body.angle;
        if(keyIsDown(UP_ARROW)&& angle>=-0.9){
          angle=angle-0.02;
          Matter.Body.setAngle(cannon.body,angle);
        }
         if(keyIsDown(DOWN_ARROW)&& angle<=0.55){
          angle=angle+0.02;
          Matter.Body.setAngle(cannon.body,angle);
        }
         push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        fill("brown");
        ellipse(220,270,75,75);
        fill("red");
        rect(135,310,160,40);
        fill("red");
        ellipse(160,375,40,40);
        fill("red");
        ellipse(280,375,40,40);


    };
}
