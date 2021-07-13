nose_x = ''
nose_y = ''



function preload(){
img = loadImage('https://i.postimg.cc/TPHYwBKW/455-4557163-icon-clown-nose-circle-hd-png-download-removebg-preview.png')
}

function setup(){
canvas = createCanvas(300,300)
canvas.center()

video = createCapture(VIDEO)
video.size(300,300);
video.hide();

posenet = ml5.poseNet(video,modelLoaded)

posenet.on('pose',gotPoses);
}

function draw(){
    
    image(video,0,0,300,300);
    fill('#db3012')
    stroke('#db3012')
    //circle(nose_x, nose_y,20)
    image(img,nose_x,nose_y,40,30)
}

function take_snapshot(){
    save('photo.jpg')
}

function modelLoaded(){
    console.log('PoseNet is Intialiaed')
}

function gotPoses(results){
    if(results.length > 0 ){
        console.log(results)
        console.log('nose x is =' + results[0].pose.nose.x)
        console.log('nose y is =' + results[0].pose.nose.y)

        nose_x = results[0].pose.nose.x-18
        nose_y = results[0].pose.nose.y-20

    }
}

