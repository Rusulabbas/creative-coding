// I added a variable to track interaction and inactivty. I know I used this code for another assignment but I thought it would
// nice to itterate it becuase most screensaver have movement and the DVD screen saver is similar to what I created for the bounce exercise
//this was hard and not my best work but I think I got the right idea from the assignment description 

let x = 0;
let y = 0;
let xspeed = 2;
let yspeed = 2;
let z = 0;
let o = 0;
let zspeed = 2;
let ospeed = 2;
let a = 0;
let r = 0;
let s = 0;
let rspeed = 2;
let sspeed = 2;

// inactivity timer variables
let lastInteractionTime = 0;  // Variable to track when the last interaction happened
let inactivityTimeout = 5000; // 5 seconds of inactivity before pausing the animation


//size of Canvas
function setup() {
  createCanvas(400, 300);
  fill('white');
}

function draw() {
  // Check inactivity and pause animation 
  if (millis() - lastInteractionTime > inactivityTimeout) {
    background(250); // Set background to black when paused
    return; // Pause the animation here
  }
  
  // Continue drawing the bouncing shapes
  background('black');
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

// this updates the variables speed
x += xspeed;
  y += yspeed;
  z += zspeed;
  o += ospeed;
  r += rspeed;
  s += sspeed;
}

// Event listeners to reset the inactivity timer
function mouseMoved() {
  lastInteractionTime = millis(); // Update the last interaction time
}

function keyPressed() {
  lastInteractionTime = millis(); // Update the last interaction time
}

// Links to resources used:
// https://p5js.org/reference/p5/millis/
  //https://p5js.org/reference/p5/mouseMoved/
  //https://p5js.org/reference/p5/keyPressed/
//