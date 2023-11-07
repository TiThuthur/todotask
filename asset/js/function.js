const degToRad = (deg) => {
  return (Math.PI / 180) * deg;
};

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) ) + min;
}