const MONSTERS_NUMBERS = 14;
const MONSTER_QUANTITY = 5;
const charsDiv = document.getElementsByClassName("chars")[0];
import { setupImages } from "./animate.js";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const generateMonsters = async () => {
  for (let i = 0; i < MONSTER_QUANTITY; i++) {
    const getRandomNumber = getRandomInt(MONSTERS_NUMBERS);
    let prefix = "0";
    if (getRandomNumber < 10) prefix += "0";

    charsDiv.innerHTML += `
        <div class="Character" draggable="true">
            <img id="${getRandomNumber}" class="char_animate" src="assets/${getRandomNumber}/tile${prefix}${getRandomNumber}.png" alt="Character" />
        </div>
    `;
  }
  setupImages();
};

window.generateMonsters = generateMonsters;
