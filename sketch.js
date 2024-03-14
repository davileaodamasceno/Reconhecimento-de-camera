console.log("versão atual", ml5.version);
let video;
let detector;

function preload() {

  detector = ml5.objectDetector('cocossd');
}

function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO);
  video.size(400, 400);

  video.hide();
  detector.detect(video, obterResult);
  
}


function obterResult(error, results) {
  if (error) {
    console.error(error);
  }
  else {
    console.log(results);
  }
  for (let i = 0; i < results.length; i++) {
    let objeto = results[i];
    stroke(0, 255, 0);
    strokeWeight(9);
    noFill();
    rect(objeto.x, objeto.y, objeto.width, objeto.height);
    stroke(255);
    strokeWeight(2);
    textSize(20);
    text(objeto.label, objeto.x, objeto.y);
  }
  detector.detect(video, obterResult);
}

function draw() {
  image(video, 0, 0);
}
