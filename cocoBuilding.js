class cocoBuilding{
    constructor(){
      
      this.image =cbi;
      this.Visiblity = 255;
      this.startButton=createButton('start');
      this.greeting1=createElement('h2');
      this.greeting2=createElement('h2');
      this.greeting3=createElement('h2');
      this.lessonInput=createInput('Enter Lesson Number');
       

      //this.startButton.Visiblity=0;

        }
  
   display(){
     //console.log(this.body.speed);

       background("black");
       
       push();
       
       //this.lessonInput.position(400,200);
       
       if(frameCount%5===0)
       {
        this.Visiblity = this.Visiblity - 5;
       }
       
       tint(255,this.Visiblity);
       imageMode(CENTER);
       image(this.image,400, 200, 800, 400);
       pop();
       if(this.Visiblity===0)
       {
         this.showStart();
       }
     }

showStart()
{
 
  this.startButton.Visiblity=255;
  this.startButton.position(370,200);

  this.startButton.mousePressed(()=>
  {
    
     
   gs=2;
  });
  
 


}
}


    
  
  
  
