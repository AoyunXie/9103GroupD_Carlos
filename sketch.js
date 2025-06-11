function setup() {
  createCanvas(800, 600);
  background(247,241,225)
  
}

function draw() {
  push();

  // Step 1: 把中心移到画布中心
  translate(width / 2, height / 2);

  // Step 2: 统一缩小一点，避免线出界
  scale(0.8);

  // Step 3: 旋转整体 30 度
  rotate(radians(-30));

  // Step 4: 移回左上角坐标
  translate(-width / 2, -height / 2);

  // Thick 5
  push();
  translate(189, 343);       
  drawLinGroup(0, 0, 500, 2, 1, 1, 200);  
  pop();

  push();
  translate(198, 360);
  drawLinGroup(0, 0, 350, 2, 1, 1, 200);  
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

// Thick 1
  push();     
  translate(110, 383); 
  drawLinGroup(0, 0, 80, 4, 1, 1, 255);  
  pop();

  push();
  translate(115, 392); 
  drawLinGroup(0, 0, 80, 3, 1, 1, 255);
  pop();
 
// Thick 2
  push();
  translate(515, 315); 
  drawLinGroup(0, 0, 170, 8, 1, 1, 255);
  pop();

  push();
  translate(517, 350); 
  drawLinGroup(0, 0, 170, 6, 1, 1, 255);
  pop();

// Thick 3
  push();
  translate(448, 316);
  drawLinGroup(0, 0, 30, 8, 1, 1, 255);
  pop();

  push();
  translate(432, 347);
  drawLinGroup(0, 0, 50, 5, 1, 1, 255);
  pop();

  push();
  translate(413, 380);
  drawLinGroup(0, 0, 70, 5, 1, 1, 255);
  pop();

//Thick 4
  push();
  translate(190, 348);
  drawLinGroup(0, 0, 190, 6, 1, 1, 255);
  pop();

  push();
  translate(196, 364);
  drawLinGroup(0, 0, 179, 6, 1, 1, 255);
  pop();

  push();
  translate(240, 438);
  drawLinGroup(0, 0, 20, 6, 1, 1, 255);
  pop();

  push();
  translate(246, 452);
  drawLinGroup(0, 0, 10, 6, 1, 1, 255);
  pop();

//Thin 1
  push();
  translate(125, 448);
  drawLinGroup(0, 0, 600, 22, 2.5, 0.2, 120)
  pop();

  push();
  translate(125,525);
  drawLinGroup(0, 0, 600, 22, 2.5, 1, 255)
  pop();

//Thin 2
  push();
  translate(137,320);
  drawTrapezoidLines(0, 18, 34, 52, 0, 20, 3, 255);
  pop();

  push();
  translate(176, 390);
  drawTrapezoidLines(0, 18, 34, 52, 0, 20, 3, 255);
  pop();

  push();
  translate(212, 455);
  drawTrapezoidLines(0, 18, 34, 52, 0, 20, 3, 255);
  pop();

//Trapezoid3
  push();
  translate(190,356);
  drawTrapezoidLines(0, 80, 23, 55, 0, 15, 2.5, 255);
  pop();

  push();
  translate(172,320);
  drawTrapezoidLines(0, 103, 14, 85, 0, 13, 2, 255);
  pop();

//Trapezoid2
  push();
  translate(110,320);
  drawTrapezoidLines(0, 165, 40, 115, 0, 30, 2.5, 255);
  pop();

  push();
  translate(456,300);
  drawTrapezoidLines(0, 56, -47, 66, 0, 35, 2.5, 255);
  pop();

  push();
  translate(105,354);
  drawTrapezoidLines(0, 145, 0, 120, 0, 13, 3.2, 255);
  pop();

//Trapezoid1
  push();
  translate(135, 440);
  drawTrapezoidLines(0, 255, 0, 215, 0, 25, 2.5, 255);
  pop();

  push();
  translate(440,440);
  drawTrapezoidLines(0, 70, -40, 80, 0, 23, 2.5, 255);
  pop();

  push();
  translate(135,550);
  drawTrapezoidLines(0, 201, 0, 180, 0, 12, 2.8, 255);
  pop();

  push();
  translate(400,522);
  drawTrapezoidLines(0, 120, -40, 130, 0, 20, 3, 255);
  pop();

 pop();
}

function drawLinGroup(x, y, len, count, spacing, weight, baseAlpha = 255) {
  strokeWeight(weight);
  for (let i = 0; i < count; i++) {
    let alpha = map(i, 0, count - 1, 0, baseAlpha); 
    stroke(0, alpha);
    let yOffset = y + i * spacing;
    line(x, yOffset, x + len, yOffset);
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