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
    this.vel = new Vector(getRandomInteger(-2, 2), getRandomInteger(-2, 2));
    this.radius = 5;
  }

  bounce(width, height) {
    if (this.pos.x <= 0 || this.pos.x >= width) this.vel.x *= -1;
    if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  draw(context) {
    context.beginPath();

    context.lineWith = 4;
    context.strokeStyle = "#44a08d";
    context.fillStyle = "black";

    context.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);

    context.fill();
    context.stroke();
  }
}

class TodoObject {
  constructor(task) {
    this.task = task;
    this.id = Date.now();
    this.checked = false;
  }
}
