function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  background(22);

  rectMode(CENTER);
 
  // Code from Canvas I just copied and pasted
  stroke("Gold"); // set the stroke (line) color 
  strokeWeight(6); // set the stroke thickness
  fill("yellow"); // set the fill color

  // draw an ellipse with 250 pixel diameter
  // with its center at x position 200
  // and at y position 200
  ellipse(200,200,250,250) 

  stroke('Black');
  strokeWeight(3);
  fill("white");
  ellipse(150, 150, 50, 50)

  stroke('Black');
  strokeWeight(3);
  fill("white");
  ellipse(250, 150, 50, 50)


 // First line
stroke('black');
strokeWeight(3);
line(100, 100, 300, 300);  

// Second line
stroke('black');
strokeWeight(3);
line(300, 100, 100, 300); 

  
  
  square();
  circle();
  rect();
  ellipse();
}