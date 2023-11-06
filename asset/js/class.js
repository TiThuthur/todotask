class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 50;
  }
  distance(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
