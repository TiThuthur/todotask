class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  distance(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

class Agent {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(getRandomInteger(-1, 1), getRandomInteger(-1, 1));
    this.radius = 50;
  }

  bounce(width, height) {
    if (this.pos.x <= 0 || this.pos.x >= width) this.vel.x *= -1;
    if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.x += this.vel.x;
  }

  draw(context) {
    context.save();
    context.beginPath();

    context.lineWith = 4;
    context.lineStyle = "white";

    context.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);

    context.stroke();
    context.restore();
  }
}
