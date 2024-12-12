//  targets
// Total number of targets
// Player's score
// Game timer
// Total clicks by the player
// Number of misses

let targets = []; 
let numTargets = 5; 
let score = 0; 
let timer = 30; 
let totalClicks = 0; 
let misclicks = 0; 

function setup() {
  createCanvas(1500, 700); 
  textSize(20); 
  textAlign(CENTER, CENTER); 
  for (let i = 0; i < numTargets; i++) {
    addTarget(); 
  }
}

function draw() {
  background(190); 

  // Drawing each target
  for (let i = 0; i < targets.length; i++) {
    fill(255, 0, 0); 
    ellipse(targets[i].x, targets[i].y, 50, 50); 
  }

  // Shows score and time left
  fill(0); 
  text("Score: " + score, width / 2, 20);
  text("Time: " + timer, width / 2, 50);

  //  countdown
  if (frameCount % 60 == 0 && timer > 0) {
    timer -= 1;
  }

  // Ending the game if time runs out and clearing the screen
  if (timer === 0) {
    background(200); 
    textSize(30);
    text("Game Over!", width / 2, height / 2 - 60);

    // Calculating accuracy and stoping the game 
    let accuracy = totalClicks > 0 ? (score / totalClicks) * 100 : 0;
    textSize(20);
    text("Score: " + score, width / 2, height / 2 - 20);
    text("Misclicks: " + misclicks, width / 2, height / 2 + 20);
    text("Accuracy: " + accuracy.toFixed(2) + "%", width / 2, height / 2 + 60);
    noLoop(); 
  }
}


// Some parts of this code were generated with the help of AI to fix errors and ensure the logic is as clear and effective as possible.
function mousePressed() {
  totalClicks++; // Counting every click

  let hit = false; // Checking if a target is hit
  for (let i = 0; i < targets.length; i++) {
    let d = dist(mouseX, mouseY, targets[i].x, targets[i].y); // Distance formula
    if (d < 25) { // Checking if inside target
      score++; // Increasing score
      targets.splice(i, 1); // Removing target
      addTarget(); // Adding a new target
      hit = true; // Marking as hit
      break;
    }
  }
// Counting misses
  if (!hit) {
    misclicks++; 
  }
}

// Randomly positioning x
// Randomly  positioning y
// Adding target to the list
function addTarget() {
  let newTarget = {
    x: random(50, width - 50), 
    y: random(50, height - 50) 
  };
  targets.push(newTarget);
}


