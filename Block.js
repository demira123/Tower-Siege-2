class Block{
  constructor(x, y, width, height) {
      var options = {
         
        
        super(x,y),
        this.Visiblity = 255,
         
      }}
      display(){
        //console.log(this.body.speed);
        if(this.body.speed < 3){
         super.display();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          var angle = this.body.angle;
           var pos= this.body.position;
          
           translate(pos.x, pos.y);
          rotate(angle);
           rectMode(CENTER);
           rect(0,0,this.width, this.height);
        
          pop();
        }
        
      
     
     
     
     };
     
    }