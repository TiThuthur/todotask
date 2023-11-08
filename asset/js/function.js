const degToRad = (deg) => {
  return (Math.PI / 180) * deg;
};

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 *  try to find the linearization of the value
 *
 * exemple : pour 200 on a 12
 * pour 100 on a 8.33 (calcul faux mais s'appuyer sur l'exemple)
 *
 */
// const distanceMap= (dist,max,outputMin,outputMax)=>{
//   let output
//   outputMax=12
//   outputMin=1
//   dist=100
//   max=200

//   if (dist > max) return 0

//   output= dist/outputMax *outputMin

// }
