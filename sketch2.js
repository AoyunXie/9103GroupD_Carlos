function setup() {
  createCanvas(800, 600);
}


function draw() {
  background(247,241,225);
  fill(0);
  ellipse(mouseX, mouseY, 10, 10);  // Track mouse position

  text(`x=${mouseX}, y=${mouseY}`, 10, 20);
}

 