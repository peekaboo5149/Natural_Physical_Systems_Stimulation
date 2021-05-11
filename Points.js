class Particle {
  constructor() {
    this.x = random(0, 600);
    this.y = random(0, 600);
    this.r = random(10, 30);
    this.velX = random(-1, 2);
    this.velY = random(-1, 2);
  }

  createParticle() {
    noStroke();
    fill("rgba(200,169,169,0.5)");
    ellipse(this.x, this.y, this.r, this.r);
  }

  moveParticle() {
    if (this.x < 0 || this.x > 600) {
      this.velX *= -1;
    }
    if (this.y < 0 || this.y > 600) {
      this.velY *= -1;
    }
    this.x += this.velX;
    this.y += this.velY;
  }
}
