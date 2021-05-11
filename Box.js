class Box {
  constructor(
    x,
    y,
    width = 30,
    height = 40,
    weight = 0.1,
    frictionCoffecient = 0.2
  ) {
    this.x = x;
    this.y = y;
    this.WIDTH = width;
    this.HEIGHT = height;
    this.velX = 10;
    this.direction = 1;
    this.fir_coff = frictionCoffecient;
    this.weight = weight;
    this.accX = this.weight * this.fir_coff;
  }

  createBox() {
    noStroke();
    fill(255, 0, 0);
    rect(this.x, this.y, this.WIDTH, this.HEIGHT);
  }
  moveBox() {
    //motion with friction

    // let accX = this.weight * this.fir_coff;

    this.velX -= this.accX;

    if (this.velX <= 0) {
      return;
    }

    //normal motion
    this.x += this.velX * this.direction;
    //collison
    if (this.x < 0 || this.x > 510) {
      this.direction *= -1;
    }
  }
}
