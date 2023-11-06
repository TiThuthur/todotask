const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

context.fillStyle = "black";
context.save()
context.beginPath()
context.arc(width * 0.5, height * 0.5, width * 0.05, 0, degToRad(360));
context.fill()
context.restore()

