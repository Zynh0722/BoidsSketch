var boids = []

var curBoids = nBoids;

function setup() {
  font = loadFont('assets/SansForgetica-Regular.otf');

  createCanvas(windowWidth, windowHeight);

  
  for (let i = 0; i < curBoids; i++) {
    boids.push(new Boid(random(0, width), random(0, height)));
  }
}

function draw() {
  background(20);

  for (let boid of boids) {
    boid.update(boids);
    boid.draw();
  }


  
  if (nBoids != curBoids) {
    curBoids = nBoids;
    boids = [];

    // boids.push(new Boid(random(0, width), random(0, height)));
    for (let i = 0; i < curBoids; i++) {
      boids.push(new Boid(random(0, width), random(0, height)));
    }
  }

  push();
  noStroke();
  fill(255);
  textFont(font);
  // textSize(width * .3);
  text("VAL", width - 40, 20);
  // textAlign(CENTER);
  // text("VAL", width /2 - 50, height / 2 + textAscent() / 2);
  pop();
}
