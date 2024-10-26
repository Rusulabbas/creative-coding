let debug = true;
let x = 0; 
let y = 0;
let d = 0;
let score = 0;
let speedfactor = 3;
let speedx = speedfactor
let speedy = speedfactor;
let goalx = 0;
let goaly = 0;

function setup() {
  createCanvas(800, 800);
  x = random(width);
  y = random(height);
  speedx = speedfactor;
}

function draw() {
  background(220);

  rect(goalx, goaly, 20, 20);

  // This is the Distance Formula
  d = sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);

  // Add the movement
  x += speedx;
  y += speedy;


  // Draw a circle for the follower
  circle(x, y, 50);

  // Control the x-axis movement
  if (mouseX > x) {
    speedx = speedfactor; // move to the right
  } else {
    speedx = -speedfactor; // move to the left
  }

  // Control the y-axis movement
  if (mouseY > y) {
    speedy = speedfactor; // move down
  } else {
    speedy = -speedfactor; // move up
  }

  // check for collision with follower
  if (d < 25){
    score -= 1;
    x = random(width);
    y = random(height);

    goalx = random(wudth);
    goaly = random(height);

  }

  
  // Debug information
  if (debug) {
    textSize(30);
    text("mouseX: " + mouseX, 50, 50);
    text("mouseY: " + mouseY, 50, 80);
    text("x: " + x, 50, 120);
    text("y: " + y, 50, 150);
    text("d: " + d, 50, 180); // Display distance as "d"
    text("score: " + score, 50, 210);
  }
}



