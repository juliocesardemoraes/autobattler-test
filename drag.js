const battlefield = document.getElementsByClassName("battlefield")[0];

document.addEventListener("dragstart", (e) => {
  e.target.classList.add("dragging");
});

document.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
});

battlefield.addEventListener("dragover", (e) => {
  const dragging = document.querySelector(".dragging");
  const applyAfter = getNewPosition(battlefield, e.clientY);

  if (applyAfter) {
    applyAfter.insertAdjacentElement("afterend", dragging);
  } else {
    battlefield.prepend(dragging);
  }
});

function getNewPosition(column, posY) {
  const cards = column.querySelectorAll(".item:not(.dragging)");
  let result;

  for (let refer_card of cards) {
    const box = refer_card.getBoundingClientRect();
    const boxCenterY = box.y + box.height / 2;

    if (posY >= boxCenterY) result = refer_card;
  }

  return result;
}
