function setup() {
  // create a canvas
createCanvas(1200, 1200);

  // disable animation
noLoop();
}

function draw()  {
  
background(220);

translate(100,100);

for (let x = 0; x < 8; x++) {
for (let y = 0; y < 8; y++){
  push();

  translate(x * 100, y * 100);
  // random stroke weight and color 
  strokeWeight(random(1, 5));
  stroke(random(255), random(255));
  fill(random(255), random(255), random(255)); // random colors for the circles

  // my circles
  ellipse(0,0,100,100);
   
  fill(random(225), random(225)); // another random fill for the rectenalges for a large variety

  rect(0, 0, random(20, 30), random(20, 30)); // random width and height of rectanles inside the circles

  pop();
  }
}
}