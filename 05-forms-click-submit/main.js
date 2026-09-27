const form = document.getElementById("loginForm");

const submitButton = document.getElementById("submitButton");

const normalButton = document.getElementById("normalButton");

const output = document.getElementById("output");

let log = [];

function addLog(message) {
  log.push(message);

  output.innerHTML = log.join("<br>");
}

/* =====================================
   CLICK EVENT
===================================== */

submitButton.addEventListener("click", function () {
  addLog("CLICK event happened on submit button.");
});

/* =====================================
   SUBMIT EVENT
===================================== */

form.addEventListener("submit", function (event) {

  //event.preventDefault();

  addLog("SUBMIT event happened on the form.");

  addLog("preventDefault() stopped normal form navigation.");
});

/* =====================================
   NORMAL BUTTON
===================================== */

normalButton.addEventListener("click", function () {
  addLog('Normal type="button" received CLICK.');

  addLog("But it does NOT submit the form.");
});

