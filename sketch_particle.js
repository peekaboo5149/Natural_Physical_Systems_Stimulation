var particle;
var population = 100;

function setup() {
  createCanvas(600, 600);

  particle = [];
  for (let i = 0; i < population; i++) {
    particle[i] = new Particle();
  }
}

function draw() {
  background(8, 8, 8);
  //*Many Particle System
  for (let i = 0; i < population; i++) {
    particle[i].createParticle();
    particle[i].moveParticle();
  }
}
