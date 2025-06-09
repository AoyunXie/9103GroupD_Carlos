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

function drawTrapezoidLines(x1, x2, x3, x4, y, h, spacing = 3, alpha = 255) {
  stroke(0, alpha);
  strokeWeight(1);
  for (let i = 0; i < h; i++) {
    let yi = y + i * spacing;
    let xi1 = lerp(x1, x3, i / h);
    let xi2 = lerp(x2, x4, i / h);
    line(xi1, yi, xi2, yi);
  }
}