// position and speed for the shapes
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

// inactivity timer variables
let lastInteractionTime = 0;  // Variable to track when the last interaction happened
let inactivityTimeout = 5000; // 5 seconds of inactivity before pausing the animation

function setup() {
  createCanvas(400, 300);
  fill('white');
}

function draw() {
  // Check inactivity and pause animation
  if (millis() - lastInteractionTime > inactivityTimeout) {
    background(0); // Set background to black when paused
    fill(255); // Display a message
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Screensaver Paused", width / 2, height / 2);
    return; // Pause the animation here
  }
  
  // Continue drawing the bouncing shapes
  background('black');
  noStroke();
  translate(width / 2, height / 2);

  // Square logic
  if (x > 175 || x < -175) {
    xspeed = -xspeed; // Bounce the square
    fill(random(255), 90, 90);
  }
  if (y > 125 || y < -125) {
    yspeed = -yspeed;
    fill(random(255), 90, 90);
  }
  square(x, y, 30);

  // Second square logic
  if (r > 175 || r < -175) {
    rspeed = -rspeed;
    fill(random(255), 200, 200);
  }
  if (s > 140 || s < -140) {
    sspeed = -sspeed;
    fill(random(255), 200, 200);
  }
  square(r, s, 20);

  // Circle logic
  if (z > 175 || z < -175) {
    zspeed = -zspeed;
    fill(random(225), 100, 100);
  }
  if (o > 125 || o < -125) {
    ospeed = -ospeed;
    fill(random(225), 100, 100);
  }
  circle(z, o, 10);

  // Update positions
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

/* Links to resources used:

- p5.js `millis()` function to track time:
  - https://p5js.org/reference/#/p5/millis

- p5.js `textSize()` function to control text size:
  - https://p5js.org/reference/#/p5/textSize

- p5.js `textAlign()` function to center text:
  - https://p5js.org/reference/#/p5/textAlign

- p5.js `fill()` function to set color:
  - https://p5js.org/reference/#/p5/fill

- p5.js `mouseMoved()` event function to detect mouse movement:
  - https://p5js.org/reference/#/p5/mouseMoved

- p5.js `keyPressed()` event function to detect key presses:
  - https://p5js.org/reference/#/p5/keyPressed
*/