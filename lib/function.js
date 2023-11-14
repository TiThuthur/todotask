const degToRad = (deg) => {
  return (Math.PI / 180) * deg;
};

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 *
 * @param dist input distance (variable)
 * @param distanceMax maximal distance (fixed)
 * @param outputMax output max of the function (fixed)
 * @example
 *  try to find the linearization of the value
 * for dist = 100, distanceMax = 200 and outputMax =12
 * @returns 8.33
 *
 *
 */
const distanceMap = (dist, distanceMax, outputMax) => {
  return (distanceMax - dist) / outputMax;
};

const listHtml=document.getElementById("js-list")

const renderLine = (todo)=>{
  let element=document.createElement("li")
  element.innerHTML = ` <div class="checkbox-custom">
  <input class="tgl tgl-light" id="${todo.id}" type="checkbox" />
  <label for="${todo.id}" class="tgl-btn"></label>
</div>
<p>${todo.task}</p>
<button class="button is-warning is-rounded is-right">
  <span class="icon">
    <i class="fas fa-times"></i>
  </span>
</button>`

  listHtml.appendChild(element)
}