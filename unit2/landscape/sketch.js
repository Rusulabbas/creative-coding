
function setup() {
  createCanvas(800, 800);  
  noLoop();               
  noStroke();              
  fill("white");           
}
// I picked a landscape I've always wanted to see. 
//It's about driving in the middle of nowhere, 
//surrounded by trees and mountains in the background, 
//right after the sun goes down but before it's totally
// dark. I'm pretty sure that time is called Astronomical Twilight.
// It's a little spooky but also peaceful, and I've always 
// thought it'd be amazing to experience that.

function draw() {
  background("#371F63");   // Dark blueish / purplish background for sky to resemble the sky after sunset 
  
  // Loop to create stars scattered in the sky, 
  for (let x = 0; x <= width; x += 17) {  // Move across canvas width
    let stars = randomGaussian(0, 26);   // Random y I called stars for scattered star placement
    let y = height / 6 + stars;          // Position stars in upper part of canvas
    fill("White");                        // white color
    circle(x, y, 4);                      // Small circles for stars
  }

  // Creating mountains using smooth peaks with noise()
  fill('#724535');                        // Brown for mountain color
  beginShape();                           // Start custom shape for mountains
  vertex(0, height);                      // Start shape at bottom left of canvas

  // Loop to generate mountain peaks using noise for randomness 
  for (let x = 0; x <= width; x += 10) {  // Move horizontally in small steps
    let y = noise(x * 0.01) * height / 2 + height / 2.5;  // Mountain peaks with noise
    vertex(x, y);                         //   positions of the mountain peaks
  }

  vertex(width, height);                  // End shape at bottom right corner
  endShape(CLOSE);                        // Complete the mountain shape
  
  //used https://p5js.org/reference/p5/beginShape/ and https://p5js.org/reference/p5/endShape/ ^^

  // Drawing random trees in the midground
  for (let i = 0; i < 40; i++) {          // 40 trees
    let X = random(width);                // Random position for each tree
    let Y = height / 1.1;                 // Positioning the trees on the the road im creating next
    fill("#3B5323");                      // Tree is Green 
    ellipse(X, Y - 40, 30, 60);           // Tree as ellipse
    fill("#8B4513");                      // Brown for tree trunk
    rect(X - 5, Y - 40, 10, 40);          // Tree trunk rectangle
  }

  // Road at the bottom
  fill("black");
  rect(0, height / 1.1, width, 80);  

  // Yellow dashed lines on the road
  for (let x = 0; x <= width; x += 40) {  // Move horizontally with 40px gaps
    let y = height / 1.05;                 // Position of dashed lines on the road
    fill("yellow");                       // Yellow for dashed lines
    rect(x, y - 5, 20, 10);               // Rectangles to make dashed lines
  }
}
