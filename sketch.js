function setup() {
  createCanvas(250, 740);
}

function draw() {
  background(200);

  stroke(0);
  strokeWeight(1);
  fill(0, 225, 0);
  rect(0, 0, 250, 120);
  fill(400);
  circle(60, 65, 75);
  square(150, 30, 70);

  fill(400);
  square(0, 120, 250);
  noStroke();
  let translucentRed = color(255, 0, 0, 150);
  fill(translucentRed);
  circle(125, 200, 100);
  let translucentBlue = color(0, 0, 255, 150);
  fill(translucentBlue);
  circle(100, 250, 100);
  let translucentGreen = color(0, 255, 0, 150);
  fill(translucentGreen);
  circle(150, 250, 100);

  fill(0);
  rect(0, 370, 250, 120);
  fill(255, 255, 0);
  circle(50, 425, 100);
  fill(0);
  triangle(0, 375, 50, 425, 0, 475);
  fill('red');
  circle(175, 425, 100);
  rect(125, 425, 100, 50);
  fill('white');
  circle(150, 425, 30);
  circle(200, 425, 30);
  fill('blue');
  circle(150, 425, 20);
  circle(200, 425, 20);

  stroke(400);
  strokeWeight(3);
  fill('blue');
  square(0, 490, 250);
  fill('green')
  circle(125, 615, 150);
  fill(255, 0, 0);
  drawStar(125, 615, 30, 75, 5);

  function drawStar(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2;
    
    beginShape();
    for (let a = -PI/2; a < TWO_PI - PI/2; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }


}
