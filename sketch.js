var Sun = {
  x: 320,
  y: 360,
  w: 400,
  h: 400
    // x = horizontal
    // y = vertical
    // w = width
    // h = heihgt
};

var Sky = {
  r: 5,
  g: 10,
  b: 50,
   //65-105-225
};

function setup() {
  createCanvas(1080, 720);

}

function draw() {
   
 Sky.r = map(mouseY,0,720,255,0);
 Sky.g = map(mouseY,0,720,255,0);
 Sky.b = map(mouseY,0,720,255,0);
 
  background(Sky.r,Sky.g,Sky.b)
  
  // Sun position
  fill(255, 230, 50);
  stroke(255, 204, 0);
//  Sun.y = Sun.y + -5
  ellipse(mouseX, mouseY, 100, 100);
  
}