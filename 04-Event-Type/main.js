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

/* -------------------------------
   1. Mouse Button Events
-------------------------------- */

const clickBox = document.getElementById("clickBox");

const mousedownResult = document.getElementById("mousedownResult");

const mouseupResult = document.getElementById("mouseupResult");

const clickResult = document.getElementById("clickResult");

const dblclickResult = document.getElementById("dblclickResult");

clickBox.addEventListener("mousedown", function () {
  mousedownResult.textContent = "Mouse button pressed";

  clickBox.style.transform = "scale(0.97)";
});

clickBox.addEventListener("mouseup", function () {
  mouseupResult.textContent = "Mouse button released";

  clickBox.style.transform = "scale(1)";
});

clickBox.addEventListener("click", function () {
  clickResult.textContent = "Click completed";

  clickBox.style.backgroundColor = "#bceacb";
});

clickBox.addEventListener("dblclick", function () {
  dblclickResult.textContent = "Double click detected";

  clickBox.style.backgroundColor = "#ffe49a";
});

/* -------------------------------
   2. Mouse Enter / Leave
-------------------------------- */

const enterBox = document.getElementById("enterBox");

const mouseenterResult = document.getElementById("mouseenterResult");

const mouseleaveResult = document.getElementById("mouseleaveResult");

enterBox.addEventListener("mouseenter", function () {
  mouseenterResult.textContent = "Mouse entered";

  enterBox.style.backgroundColor = "#bceacb";
});

enterBox.addEventListener("mouseleave", function () {
  mouseleaveResult.textContent = "Mouse left";

  enterBox.style.backgroundColor = "#dff3e5";
});

/* -------------------------------
   3. Mouse Move
-------------------------------- */

const moveBox = document.getElementById("moveBox");

const mouseX = document.getElementById("mouseX");

const mouseY = document.getElementById("mouseY");

const mousemoveResult = document.getElementById("mousemoveResult");

moveBox.addEventListener("mousemove", function (event) {
  mouseX.textContent = event.offsetX;

  mouseY.textContent = event.offsetY;

  mousemoveResult.textContent = "Mouse is moving";
});

/* -------------------------------
   4. Mouse Over / Out
-------------------------------- */

const overBox = document.getElementById("overBox");

const mouseoverResult = document.getElementById("mouseoverResult");

const mouseoutResult = document.getElementById("mouseoutResult");

overBox.addEventListener("mouseover", function (event) {
  mouseoverResult.textContent = "Over: " + event.target.id;
});

overBox.addEventListener("mouseout", function (event) {
  mouseoutResult.textContent = "Out from: " + event.target.id;
});

/* -------------------------------
   5. Context Menu
-------------------------------- */

const contextBox = document.getElementById("contextBox");

const contextmenuResult = document.getElementById("contextmenuResult");

contextBox.addEventListener("contextmenu", function (event) {
  event.preventDefault();

  contextmenuResult.textContent = "Right click detected";

  contextBox.style.backgroundColor = "#ffd8d8";
});
