function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

function createBoxes(amount) {
  const baseSize = 30;
  boxesContainer.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${baseSize + i * 10}px`;
    box.style.height = `${baseSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
createButton.addEventListener("click", () => {
  const amount = parseInt(input.value, 10);
  if (!isNaN(amount) && amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});

destroyButton.addEventListener("click", destroyBoxes);
