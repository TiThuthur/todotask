const agents = [];
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
// const agentsUpdate = () => {
const width = canvas.width;
const height = canvas.height;
for (let i = 0; i < 50; i++) {
  const x = getRandomInteger(0, width);
  const y = getRandomInteger(0, height);

  agents.push(new Agent(x, y));
}
const animate = () => {
  context.clearRect(0, 0, width, height);
  for (let i = 0; i < agents.length; i++) {
    const agent = agents[i];
    for (let j = i + 1; j < agents.length; j++) {
      const other = agents[j];

      const dist = agent.pos.distance(other.pos);

      if (dist > 200) continue;

      context.save();
      context.lineWidth = distanceMap(dist, 200, 12);
      context.beginPath();
      context.moveTo(agent.pos.x, agent.pos.y);
      context.lineTo(other.pos.x, other.pos.y);
      context.stroke();
      context.restore();
    }
  }
  agents.forEach((agent) => {
    agent.update();
    agent.draw(context);
    agent.bounce(width, height);
  });
  window.requestAnimationFrame(animate);
};
animate();
