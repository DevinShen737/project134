function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initailized')
}

function draw() {
    background('grey');
}

function gotPoses(result)
{
    if(result.lengh > 0)
    {
        console.log(result);
    }
}