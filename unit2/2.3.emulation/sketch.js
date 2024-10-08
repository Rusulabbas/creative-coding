/*
Emulation of a piece by Georg Nees I think this is from a book - it has no title :( . 
Source: http://dada.compart-bremen.de/item/artwork/1457 
I picked this piece because I love its simplicity and structure. 
The clean lines and geometric patterns feel kind of familiar, like something I've seen before 
but can't quite place. It's just really cool and visually satisfying. 
*/

function setup() {

  createCanvas(500, 900); //I couldnt find the exact length; this is just an estimated length 

  // background color white
  background('#white');

  // disable animation
  noLoop();

  // the bars and the line in the middle
  drawBars();
}

function drawBars() {
  let barHeight = 10; // height of the bars
  let barSpacing = 20; // space between each bar

  //  horizontal bars
  for (let y = 0; y < height; y += barSpacing) {
    let barWidth = random(width * 0.05, width * 0.5); //  making a loop to make random width for each bar
    fill(0); //  color for the bars
    rect((width - barWidth) / 2, y, barWidth, barHeight); // centering the lines 
  }

  // vertical black line in the middle
  stroke(0); // making the line black
  strokeWeight(5); // thickness of the line
  line(width / 2, 0, width / 2, height); // postion of the line 
}
