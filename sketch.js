function setup() {
  createCanvas(800, 600);
  background(247,241,225)
}

function draw() {
  // Thick 5
   push();
   translate(189, 343);       
   drawLinGroup(0, 0, 500, 2, 1, 1, 255);  
   pop();
 
   push();
   translate(198, 360);
   drawLinGroup(0, 0, 350, 2, 1, 1, 255);  
   pop();
 
 // Thick 6
   push();
   translate(424, 430);     
   drawLinGroup(0, 0, 150, 2, 1, 1, 255); 
   pop();
   
   push();
   translate(419, 436);     
   drawLinGroup(0, 0, 155, 2, 1, 1, 255); 
   pop();
 
 // Thick 7
   push();
   translate(130, 550);     
   drawLinGroup(0, 0, 600, 2, 1, 1, 255); 
   pop();
 
 // Thick 8
   push();
   translate(423, 450);     
   drawLinGroup(0, 0, 155, 4, 1, 1, 255); 
   pop();
 
   push();
   translate(131, 489);     
   drawLinGroup(0, 0, 100, 3, 1, 1, 255); 
   pop();
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