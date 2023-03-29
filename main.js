function preload()
{
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded() 
{
    console.log('posenet is initilized');
}

function draw()
{
    image(video, 0, 0, 300, 300);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
    }
}

function take_snapshot() {
    save("myfilterimage.png");
}
