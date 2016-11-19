function setup() {
  createCanvas(400,400);
  background(0);
  noStroke();
  
  for(var i = 10; i < 400; i += 10){
    stroke(255,50);
    strokeWeight(1);
    line(i, 0, i, 400);
    line(400, i, 0, i);
  }
  
  for(var j = 0; j < 400; j +=40){
    fill(255, 255, 0); //yellow
    rect(j, j, 10, 40);
    rect(40, 320, 10, 40);
  }
  
  for(var l = 0; l < 400; l +=40){
    fill(255, 0, 0); //red
    rect(l+20, l, 10, 40);
    rect(340, 40, 10, 40);
  }
}

function draw() {
  
}

function mousePressed(){
  save('image.jpg');
}
  
