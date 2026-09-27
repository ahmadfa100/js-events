const box = document.getElementById("box");

const classNameBtn = document.getElementById("classNameBtn");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const toggleBtn = document.getElementById("toggleBtn");
const containsBtn = document.getElementById("containsBtn");
const resetBtn = document.getElementById("resetBtn");

const classNameValue = document.getElementById("classNameValue");
const classListValue = document.getElementById("classListValue");
const resultValue = document.getElementById("resultValue");

function updateInfo() {
  classNameValue.textContent = box.className;

  classListValue.textContent = box.classList.value;
}

classNameBtn.addEventListener("click", function () {
  box.className = "demo-box special";

  resultValue.textContent = "className replaced all previous classes.";

  updateInfo();
});

addBtn.addEventListener("click", function () {
  box.classList.add("active");

  resultValue.textContent = 'The class "active" was added.';

  updateInfo();
});

removeBtn.addEventListener("click", function () {
  box.classList.remove("in");

  resultValue.textContent = 'The class "in" was removed.';

  updateInfo();
});

toggleBtn.addEventListener("click", function () {
  box.classList.toggle("highlight");

  resultValue.textContent = 'The class "highlight" was toggled.';

  updateInfo();
});

containsBtn.addEventListener("click", function () {
  const result = box.classList.contains("active");

  resultValue.textContent = "Contains active: " + result;
});

resetBtn.addEventListener("click", function () {
  box.className = "demo-box in";

  resultValue.textContent = "Classes were reset.";

  updateInfo();
});

updateInfo();
