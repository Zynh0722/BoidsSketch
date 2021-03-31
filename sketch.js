let boids = [];

const nBoids = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < nBoids; i++) {
    boids.push(new Boid(random(0, width), random(0, height)));
  }

  boids[0].infect();
  boids[1].vaccinate();
}

function draw() {
  background(10);

  let infected = 0;
  let vaccinated = 0;
  for (let i of boids) {
    // console.log(i);
    if (i.isInfected()) {
      infected++
    }
    if (i.isVaccinated()) {
      vaccinated++;
    }
  }
  console.log("Infected: " + infected + " Vaccinated: " + vaccinated);

  if (infected + vaccinated == nBoids) {
    for (let boid of boids) {
      boid.clean();
    }

    boids = [];
    
    for (let i = 0; i < nBoids; i++) {
      boids.push(new Boid(random(0, width), random(0, height)));
    }
    
    random(boids).infect();
    random(boids).vaccinate();  
  }


  for (let boid of boids) {
    boid.update(boids);
    boid.draw();
  }
}
