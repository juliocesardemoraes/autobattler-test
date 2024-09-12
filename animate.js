const image = document.getElementsByClassName("char_animate");
let index = 0;
let imagePos = 0;
let initialPositions = [];
let currentPositions = [];
let SETUP = false;

export const setupImages = () => {
  if (SETUP === false) {
    for (let i = 0; i < image.length; i++) {
      console.log("AQUI NESSA MERDA", image[i]);
      const objName = image[i].id;
      const objValue = +image[i].id;
      console.log("IMG", objName);
      console.log("IMG", objValue);

      initialPositions[objName] = objValue;
      currentPositions[objName] = objValue;
    }
    console.log("LAST", currentPositions);
    console.log("LAST", initialPositions);
    SETUP = true;
  }
};

setInterval(() => {
  for (let i = 0; i < image.length; i++) {
    let prefix = "0";
    const imageId = image[i].id;
    console.log(currentPositions);

    if (currentPositions[imageId] < 10) prefix += "0";

    let filename = `${prefix}${currentPositions[imageId]}`;

    image[i].src = `/assets/${image[i].id}/tile${filename}.png`;
    console.log(image[i].src);

    currentPositions[imageId] += 24;

    if (Math.floor(currentPositions[imageId] / 24) === 4) {
      currentPositions[imageId] = initialPositions[imageId];
    }
  }
}, 250);
