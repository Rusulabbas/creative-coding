
// This is my attempt on the cross mouth emoji
// I used your sample code on canvas and this link to make the lines
// https://p5js.org/reference/p5/line/


function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  background('black');

  rectMode(CENTER);
 
  // Code from Canvas I just copied and pasted
  stroke("Gold"); // set the stroke (line) color 
  strokeWeight(6); // set the stroke thickness
  fill("yellow"); // set the fill color

  // draw an ellipse with 250 pixel diameter
  // with its center at x position 200
  // and at y position 200
  ellipse(200,200,250,250) 


  // This is the left eye 
  stroke('Black');
  strokeWeight(3);
  fill("white");
  ellipse(150, 150, 50, 50) 

  // This is the right eye
  stroke('Black');
  strokeWeight(3);
  fill("white");
  ellipse(250, 150, 50, 50)

  // This is the left pupil 
  fill("black");
  ellipse(150, 150, 20, 20); 
  
 // this is the right pupil
  fill("black");
  ellipse(250, 150, 20, 20);

}