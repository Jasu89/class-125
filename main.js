noseX = 0; 
noseY = 0;
difference = 0;
rightWristX=0;
rightWristY=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(550,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded(){
    console.log('Posenet is intialized!')
}

function gotposes(results){
    if (result.legnth > 0)
{
        console.log(results);}
{
     console.log(results);
     noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;
     console.log('Posenet Is Initilzed!');

     leftWristX = results[0].pose.net.leftWrist.x;
     rightWristY = results[0].pose.net.rightWrist.y;
     difference = floor(leftWristX - rightWristY);

     console.log("leftWristX - rightWristY");

}
}

function draw() {
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}