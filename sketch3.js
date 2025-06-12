let scaleFactor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(247, 241, 225);
  scaleFactor = min(width / 800, height / 600);
  noLoop(); // 如果图像是静态的
}

function draw() {
  background(247, 241, 225);
  push();
  translate(width / 2, height / 2);
  scale(scaleFactor);
  rotate(radians(-30));
  translate(-430, -470);

  drawLayer1_BackgroundLines();
  drawLayer2_TrapezoidBlocks();
  drawLayer3_CenterThickLines();
  drawLayer4_TriangleGradient();
  drawLayer5_NoiseFragments();

  pop();
}

// -------------------- Layer Drawing Functions --------------------

function drawLayer1_BackgroundLines() {
  push();
  translate(125, 448);
  drawLinGroup(0, 0, 600, 22, 2.5, 0.2, 120);
  pop();

  push();
  translate(125, 525);
  drawLinGroup(0, 0, 600, 22, 2.5, 1, 255);
  pop();
}

function drawLayer2_TrapezoidBlocks() {
  const trapezoidData = [
    { tx: 135, ty: 440, args: [0, 255, 0, 215, 0, 16, 4, 255] },
    { tx: 440, ty: 440, args: [0, 70, -40, 80, 0, 16, 4, 255] },
    { tx: 128, ty: 550, args: [0, 201, 0, 176, 0, 9, 4, 255] },
    { tx: 390, ty: 522, args: [0, 120, -36, 130, 0, 15, 4, 255] },
    // 其他梯形继续添加...
  ];

  for (let t of trapezoidData) {
    push();
    translate(t.tx, t.ty);
    drawTrapezoidLines(...t.args);
    pop();
  }
}

function drawLayer3_CenterThickLines() {
  const thickLines = [
    { tx: 189, ty: 343, len: 495 },
    { tx: 198, ty: 360, len: 320 },
    { tx: 130, ty: 550, len: 595 },
  ];

  for (let l of thickLines) {
    push();
    translate(l.tx, l.ty);
    drawLinGroup(0, 0, l.len, 2, 1, 1, 200);
    pop();
  }
}

function drawLayer4_TriangleGradient() {
  const triangleData = [
    { tx: 137, ty: 320 },
    { tx: 176, ty: 390 },
    { tx: 212, ty: 455 },
  ];
  for (let t of triangleData) {
    push();
    translate(t.tx, t.ty);
    drawTrapezoidLines(0, 18, 34, 52, 0, 20, 3, 255);
    pop();
  }
}

function drawLayer5_NoiseFragments() {
  const fragLines = [
    { tx: 110, ty: 383, len: 80, count: 4 },
    { tx: 115, ty: 392, len: 80, count: 3 },
    { tx: 515, ty: 315, len: 170, count: 8 },
    { tx: 517, ty: 350, len: 170, count: 6 },
    // 可以继续添加更多碎片块
  ];

  for (let f of fragLines) {
    push();
    translate(f.tx, f.ty);
    drawLinGroup(0, 0, f.len, f.count, 1, 1, 255);
    pop();
  }
}

// -------------------- Utility Functions --------------------

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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  scaleFactor = min(width / 800, height / 600);
}
