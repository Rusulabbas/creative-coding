let ripplers = []; // array to keep track of all the ripples

class Rippler {
  constructor(x, y) {
    this.x = x; // the x position where the ripple starts
    this.y = y; // the y position where the ripple starts
    this.d = 0; // diameter of the ripple which starts small
    this.alpha = 255; // how visible the ripple is which starts fully visable
    this.strokeWeight = 4; // how thick the ripple outline is which starts thick
  }

  draw() {
    // makes the ripple grow bigger
    this.d += 2;

    // makes the ripple fade out over time
    this.alpha -= 4;

    // makes the ripple outline thinner over time
    if (this.strokeWeight > 0) {
      this.strokeWeight -= 0.04;
    }

    noFill(); 
    stroke(255, 255, 255, this.alpha); // white color with fading effect
    strokeWeight(this.strokeWeight); // line thickness gets thinner
    circle(this.x, this.y, this.d); 
  }

  isFaded() {
    // check if the ripple has completely faded away
    return this.alpha <= 0;
  }
}

function setup() {
  createCanvas(800, 800); // canvas size
}

function draw() {
  background(80, 80, 150); // background color (looks like waterish)

  // loops through all ripples and draw them
  for (let i = ripplers.length - 1; i >= 0; i--) {
    ripplers[i].draw();

    // if a ripple is faded, this removes it from the array
    if (ripplers[i].isFaded()) {
      ripplers.splice(i, 1); // removes the ripple from the list
    }
  }
}

function mousePressed() {
  // adds a new ripple where the mouse is clicked
  ripplers.push(new Rippler(mouseX, mouseY));
}
