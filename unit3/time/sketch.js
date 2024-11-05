function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

//using hour() to get the current hour 
  let currentHour = hour();

  // mapping the hour to energy levels
  let y = map(currentHour, 6, 20, 100, 300); // Morning is 6am to evening is 8pm I selected 
  //these because thats when most people are up getting ready for work or whinding down after work
  // thought it would be a good way to select

  //  size of circle changes based on energy level
  let size = map(currentHour, 6, 20, 100, 40); // Larger in the morning, smaller in evening

  // color of the circle changes to represent energy level throughtout the day 
  let color1 = map(currentHour, 6, 20, 255, 100); // bright in the morning 
  let color2 = map(currentHour, 6, 20, 200, 50);
  let color3 = map(currentHour, 6, 20, 100, 200); //  darker in evening

  // drawing the circle 
  fill(color1, color2, color3);
  noStroke();
  ellipse(width / 2, y, size);
}
