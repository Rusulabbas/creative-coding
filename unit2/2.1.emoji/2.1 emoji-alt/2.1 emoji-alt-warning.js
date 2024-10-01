
// This is my attempt on the warning emoji
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

  // Draw the warning triangle
  fill('orange ');
  stroke('black');
  strokeWeight(5);
  triangle(200, 100, 120, 300, 280, 300); // Yellow triangle
  
  //  the vertical line for the exclamation mark
  stroke('black');
  strokeWeight(10);
  line(200, 160, 200, 240); // Vertical line in the middle
  
  // the dot under the line
  noStroke();
  fill('black');
  ellipse(200, 270, 20, 20); // Black circle for the dot

}