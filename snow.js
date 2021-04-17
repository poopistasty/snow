class Snow{
    constructor(x,y,r){
        var options={
            restitution:0.3
        } 
        this.r=r;
        this.x= random(1,800);
        this.y=y;
        this.body = Bodies.circle(this.x,this.y, this.r,options);
        this.image=loadImage("snow4.webp");
        World.add(world,this.body);
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    imageMode(CENTER);
    image(this.image,0,0, this.r, this.r);
    pop();
    }
}