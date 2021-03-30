const boids = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 300; i++) {
    boids.push(new Boid(random(0, width), random(0, height)));
  }
}

function draw() {
  background(20);

  for (let boid of boids) {
    boid.update(boids);
    boid.draw();
  }
}
