function setup() {
  createCanvas(400, 400);
  background(247,241,225)
}

function drawLinGroup(x, y, len, count, spacing, weight, alpha) {
  strokeWeight(weight);
  stroke(0,alpha);
  
  for (let i = 0; i < count; i++){
    let yOffset = y + i * spacing;
    line(x, yOffset, x+len, yOffset)
  } 
}
