img = "" ;
objects = [] ;
status1 = "";

function preload()
{
    img = loadImage("bedroom.jpg");
}

function setup()
{
    canvas = createCanvas(500,350);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded");
    status1 = true;
    objectDetector.detect(img,gotresults);
}

function gotresults(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        objects = results;
    }
}

function back()
{
    window.location = "index.html";
}

function draw()
{
    image(img,0,0,500,350) ;
}