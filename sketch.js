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
push();     
  translate(110, 383); 
  drawLinGroup(0, 0, 80, 1, 1, 4, 255);  
  pop();

  
  push();
  translate(115, 392); 
  drawLinGroup(0, 0, 80, 1, 1, 3, 255);
  pop();



  // 粗2图：右中部，两条倾斜粗线，分开写

  // 第一条线（上）
  push();
  translate(515, 315); // 初始位置
  drawLinGroup(0, 0, 100, 1, 1,8, 255);
  pop();

  // 第二条线（下）
  push();
  translate(510, 332); // Y稍往下，X稍往左形成倾斜感
  drawLinGroup(0, 0, 100, 1, 1, 6, 255);
  pop();



  // 粗3图：中央偏上，三条左高右低的斜线，分开写

  // 第一条线（最上，最短）
  push();
  translate(454, 316);
  drawLinGroup(0, 0, 30, 1, 1, 12, 255);
  pop();

  // 第二条线（中，略长）
  push();
  translate(440, 336);
  drawLinGroup(0, 0, 50, 1, 1, 8, 255);
  pop();

  // 第三条线（最下，最长）
  push();
  translate(432, 347);
  drawLinGroup(0, 0, 70, 1, 1, 5, 255);
  pop();



  // === 上方两条倾斜粗线（组成梯形） ===

  // 上线（稍短，稍上，偏粗）
  push();
  translate(190, 348);
  drawLinGroup(0, 0, 190, 1, 1, 8, 255);
  pop();

  // 下线（更长，略低，稍微偏右）
  push();
  translate(196, 364);
  drawLinGroup(0, 0, 179, 1, 1, 8, 255);
  pop();

  // === 下方两条短线（倒三角结构） ===

  // 上短线（短，小）
  push();
  translate(240, 438);
  drawLinGroup(0, 0, 20, 1, 1, 8, 255);
  pop();

  // 下短线（略粗）
  push();
  translate(246, 452);
  drawLinGroup(0, 0, 10, 1, 1, 8, 255);
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