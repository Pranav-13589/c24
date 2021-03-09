class Log{

    constructor(x,y,height,angle){
        var options ={//JASON format
          density : 1,
          restitution :0.2,
          friction :  3,
            
        }
    
       this.body= Bodies.rectangle(x,y,20,height,options);
       Matter.Body.setAngle(this.body, angle)
        World.add(world,this.body);

        this.width = 20;
        this.height = height;
    }
    display(){

        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("red")
        rect(0,0,this.width,this.height);
        pop();
    }
}