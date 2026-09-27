const colorBox = document.getElementById("colorBox");

const listenerBtn = document.getElementById("listenerBtn");

const argumentBtn = document.getElementById("argumentBtn");

const multipleBtn = document.getElementById("multipleBtn");

const status = document.getElementById("status");

function inlineClick() {
  colorBox.style.backgroundColor = "lightblue";

  status.textContent = "Inline onclick executed.";
}

function changeColor() {
  colorBox.style.backgroundColor = "lightgreen";

  status.textContent = "changeColor ran after the click.";
}

listenerBtn.addEventListener("click", changeColor);

function changeToColor(color) {
  colorBox.style.backgroundColor = color;

  status.textContent = "The selected color is " + color;
}

argumentBtn.addEventListener("click", function () {
  changeToColor("tomato");
});

function changeBackground() {
  colorBox.style.backgroundColor = "gold";
}

function moveBox() {
  colorBox.style.transform = "translateX(20px) rotate(2deg)";
}

multipleBtn.addEventListener("click", changeBackground);

multipleBtn.addEventListener("click", moveBox);
