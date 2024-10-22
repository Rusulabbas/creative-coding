let x = 0;
let y = 0;
let xspeed = 7;
let yspeed = 7;
let z = 0;
let o = 0;
let zspeed = 8;
let ospeed = 8;
let a = 0;
let r = 0;
let s = 0;
let rspeed = 9;
let sspeed = 9;

// I followed along your youtube video for this assignment and created additonal shapes/tweaked some things.
// Don't look at it too long it will make your head hurt..learned that the hard way. 
function setup() {
  createCanvas(400, 300);
  fill('white');
  noLoop();  // Start with the animation stopped because user will eventually click to start + stop
}

function draw() {
  //  background with transparency to create trail like animation used this as reference https://editor.p5js.org/JLizardo019/sketches/EHhiLLzxM
  background(0, 0, 0, 80);  // The last value (80) controls the transparency

  noStroke();
  translate(width / 2, height / 2);

  // checks where the square is 
  if (x > 175 || x < -175) {
    xspeed = -xspeed; // if the square has gone too far to the 
    //left or right the opposite direction
    //randomizes the color of the shape
    fill(random(255), 90, 90);
  }
  if (y > 125 || y < -125) {
    yspeed = -yspeed;
    fill(random(255), 90, 90);
  }
  square(x, y, 30);

  if (r > 175 || r < -175) {
    rspeed = -rspeed;
    fill(random(255), 200, 200);
  }
  if (s > 140 || s < -140) {
    sspeed = -sspeed;
    fill(random(255), 200, 200);
  }
  square(r, s, 20);

  if (z > 175 || z < -175) {
    zspeed = -zspeed;
    fill(random(225), 100, 100);
  }
  if (o > 125 || o < -125) {
    ospeed = -ospeed;
    fill(random(225), 100, 100);
  }
  circle(z, o, 10);  

  // Update the variables 
  x += xspeed;
  y += yspeed;
  z += zspeed;
  o += ospeed;
  r += rspeed;
  s += sspeed;
}

// used https://p5js.org/examples/animation-and-variables-animation-with-events/
// as a reference - stuggled a little with the location
function mousePressed() {
  // Start/stop the animation loop
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}

function keyPressed() {
  // Draws one frame when a key is pressed
  redraw();
}

