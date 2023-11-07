const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const agents = [];

for (let i = 0; i < 50; i++) {
  const x = random.range(0, width);
  const y = random.range(0, height);

  agents.push(new Agent(x, y));
}
