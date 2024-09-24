
// This is my attempt at the pill emoji
// I used this link to make the lines
// https://p5js.org/reference/p5/line/


function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  background('white');

  rectMode(CENTER);
  // Pill shape (even thicker line for the pill)
  strokeWeight(40); 

  // Left half of the pill 
  stroke('red');
  line(150, 200, 200, 200); // red half of the pill

  // Right half of the pill (blue)
  stroke('blue');
  line(200, 200, 250, 200); //blue half of the pill

  // Add rounded ends to complete the pill shape
  noStroke();
  fill('red');
  ellipse(150, 200, 40, 40); // Red rounded end 

  fill('blue');
  ellipse(250, 200, 40, 40); // Blue rounded end 
}
