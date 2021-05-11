let box;

function setup() {
  createCanvas(600, 600);
  box = new Box(0, 360, 100, 90);
}

function draw() {
  background(8, 8, 8);
  //*Ground
  noStroke();
  fill(56);
  rect(0, 450, 600, 150);

  //*Box
  box.createBox();
  box.moveBox();
}
