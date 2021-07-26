const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var hour=0;
var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg)
background(backgroundImg);
    Engine.update(engine);

    // write code to display time in correct format here
    noStroke();
    textSize(35)
     fill("white") 
     text("Time:" + hour, 100, 50);

}

async function getBackgroundImg()

    // write code to fetch time from API
{var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responsejson=await response.json();
    
    // write code slice the datetime
   
    var dateTime=responsejson.datetime;
     hour=dateTime.slice(11,13);
   

    // add conditions to change the background images from sunrise to sunset
    if(hour>=06 && hour<=12){
        hour=hour-12;
        hour=(hour+" AM")
        backgroundImg=loadImage("sunrise6.png")
        
        }else if(hour>=12 && hour<=19){
            backgroundImg=loadImage("sunrise6.png")
            hour=hour-12;
            hour=(hour+" PM")
        }else if(hour>=19 && hour<=24){
            backgroundImg=loadImage("sunset7.png")
            hour=hour-12;
            hour=(hour+" PM")
        }else if(hour>=24 && hour<=06){
            backgroundImg=loadImage("sunset7.png")
            hour=hour-12;
            hour=(hour+" AM")
        }

    //load the image in backgroundImg variable here
 
}
