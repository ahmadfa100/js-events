/* ================================
   WINDOW EVENTS
================================ */

const loadResult = document.getElementById("loadResult");

const resizeResult = document.getElementById("resizeResult");

const scrollResult = document.getElementById("scrollResult");

const beforeUnloadCheckbox = document.getElementById("beforeUnloadCheckbox");

window.addEventListener("load", function () {
  loadResult.textContent = "Page loaded successfully.";
});

window.addEventListener("resize", function () {
  resizeResult.textContent = window.innerWidth + " x " + window.innerHeight;
});

window.addEventListener("scroll", function () {
  scrollResult.textContent = "Scroll position: " + Math.round(window.scrollY);
});

function warnBeforeLeaving(event) {
  event.preventDefault();

  event.returnValue = "";
}

beforeUnloadCheckbox.addEventListener("change", function () {
  if (beforeUnloadCheckbox.checked) {
    window.addEventListener("beforeunload", warnBeforeLeaving);
  } else {
    window.removeEventListener("beforeunload", warnBeforeLeaving);
  }
});

/* ================================
   FORM EVENTS
================================ */

const demoForm = document.getElementById("demoForm");

const nameInput = document.getElementById("nameInput");

const countrySelect = document.getElementById("countrySelect");

const focusResult = document.getElementById("focusResult");

const blurResult = document.getElementById("blurResult");

const inputResult = document.getElementById("inputResult");

const changeResult = document.getElementById("changeResult");

const submitResult = document.getElementById("submitResult");

const resetResult = document.getElementById("resetResult");

nameInput.addEventListener("focus", function () {
  focusResult.textContent = "Input received focus.";
});

nameInput.addEventListener("blur", function () {
  blurResult.textContent = "Input lost focus.";
});

nameInput.addEventListener("input", function () {
  inputResult.textContent = nameInput.value;
});

nameInput.addEventListener("change", function () {
  changeResult.textContent = "Name changed to: " + nameInput.value;
});

countrySelect.addEventListener("change", function () {
  changeResult.textContent = "Country changed to: " + countrySelect.value;
});

demoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  submitResult.textContent = "Form submitted.";
});

demoForm.addEventListener("reset", function () {
  resetResult.textContent = "Form reset.";
});

/* ================================
   KEYBOARD EVENTS
================================ */

const keyboardInput = document.getElementById("keyboardInput");

const keydownResult = document.getElementById("keydownResult");

const keyupResult = document.getElementById("keyupResult");

keyboardInput.addEventListener("keydown", function (event) {
  keydownResult.textContent = "Key down: " + event.key;
});

keyboardInput.addEventListener("keyup", function (event) {
  keyupResult.textContent = "Key up: " + event.key;
});

/* ================================
   MOUSE EVENTS
================================ */

const mouseBox = document.getElementById("mouseBox");

const clickResult = document.getElementById("clickResult");

const dblclickResult = document.getElementById("dblclickResult");

const mousedownResult = document.getElementById("mousedownResult");

const mouseupResult = document.getElementById("mouseupResult");

const mouseenterResult = document.getElementById("mouseenterResult");

const mouseleaveResult = document.getElementById("mouseleaveResult");

const mousemoveResult = document.getElementById("mousemoveResult");

const mouseoverResult = document.getElementById("mouseoverResult");

const mouseoutResult = document.getElementById("mouseoutResult");

const contextmenuResult = document.getElementById("contextmenuResult");

const targetResult = document.getElementById("targetResult");

const currentTargetResult = document.getElementById("currentTargetResult");

mouseBox.addEventListener("click", function (event) {
  clickResult.textContent = "Mouse clicked.";

  targetResult.textContent = event.target.id;

  currentTargetResult.textContent = event.currentTarget.id;
});

mouseBox.addEventListener("dblclick", function () {
  dblclickResult.textContent = "Double click detected.";
});

mouseBox.addEventListener("mousedown", function () {
  mousedownResult.textContent = "Mouse button is down.";
});

mouseBox.addEventListener("mouseup", function () {
  mouseupResult.textContent = "Mouse button released.";
});

mouseBox.addEventListener("mouseenter", function () {
  mouseenterResult.textContent = "Mouse entered the box.";
});

mouseBox.addEventListener("mouseleave", function () {
  mouseleaveResult.textContent = "Mouse left the box.";
});

mouseBox.addEventListener("mousemove", function (event) {
  mousemoveResult.textContent = "X: " + event.offsetX + " Y: " + event.offsetY;
});

mouseBox.addEventListener("mouseover", function (event) {
  mouseoverResult.textContent = "Over: " + event.target.id;
});

mouseBox.addEventListener("mouseout", function (event) {
  mouseoutResult.textContent = "Out from: " + event.target.id;
});

mouseBox.addEventListener("contextmenu", function (event) {
  event.preventDefault();

  contextmenuResult.textContent = "Right click detected.";
});
