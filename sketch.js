var cb;
var cbi;
var ii;
var gs=1;
var lessonN;
function preload()
{
cbi=loadImage("cocoBuilding.jpg");
ii=loadImage("inside.jpg");
}
function setup() {
  createCanvas(800,400);
  
  cb=new cocoBuilding();
}

function draw() {
  background(255,255,255);  
  cb.display();
  if(gs===2)
  {
    

    textFont("Andale Mono");
    background(ii);
    textAlign(CENTER);
    fill("black");
    stroke("white");
    textSize(20);
    text("Welcome to C.O.C.O",400,50);
    cb.startButton.hide();
    textSize(15)
    text("C.O.C.O : Central Office of Coding Operatives ",400,150);
    text("We will help you become a Master of Coding ",400,200);
    cb.lessonInput.position(340,250);
    lessonN=cb.lessonInput.value();
    
    //gs=3;
  }
  switch(lessonN)
  {
    case 1: window.open("https://yellowcloud.in/2020/01/26/introduction-to-java/")
    break;
    case 2 : window.open("https://yellowcloud.in/features-of-java/Java Tutorial | Java Programming Made Easy | Learn Java ...");
    break;
    case 3: window.open("https://www.edureka.co › blog › java-tutorial");
    break;
    case 4: 
    textSize("Yay!! You are ready to start writing your own Programs");
    break;
    default :
    gs=2;

  }
  
}