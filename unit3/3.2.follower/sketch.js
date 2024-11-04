let debug = false;
let x = 0; 
let y = 0;
let d = 0;
let score = 0;
let speedfactor = 3;
let speedx = speedfactor;
let speedy = speedfactor;
let goalx = 0;
let goaly = 0;
let goalsize = 30;

function setup() {
  createCanvas(800, 800);
  x = random(width);
  y = random(height);
  goalx = random(width);
  goaly = random(height);
}

function draw() {
  background(220);

  // Draw the goal
  rect(goalx, goaly, goalsize, goalsize);

  // Calculate distance between follower and mouse
  d = sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);

  // Add movement
  x += speedx;
  y += speedy;

  // Draw follower
  circle(x, y, 50);

  // Control x-axis movement
  if (mouseX > x) {
    speedx = speedfactor;
  } else {
    speedx = -speedfactor;
  }

  // Control y-axis movement
  if (mouseY > y) {
    speedy = speedfactor;
  } else {
    speedy = -speedfactor;
  }

  // Check for collision with follower
  if (d < 25) {
    score += 1;
    x = random(width);
    y = random(height);
  }

  // Check for collision with goal
  if (
    mouseX > goalx &&
    mouseX < goalx + goalsize &&
    mouseY > goaly &&
    mouseY < goaly + goalsize
  ) {
    score += 1;
    goalx = random(width);
    goaly = random(height);
  }

  // Display score and debug information
  textSize(32);
  fill(0);
  text("Score: " + score, 10, 40);

  if (debug) {
    textSize(20);
    text("mouseX: " + mouseX, 50, 50);
    text("mouseY: " + mouseY, 50, 80);
    text("x: " + x, 50, 120);
    text("y: " + y, 50, 150);
    text("d: " + d, 50, 180);
    text("Score: " + score, 50, 210);
  }
}


