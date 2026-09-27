const form = document.getElementById("studentForm");

const username = document.getElementById("username");

const age = document.getElementById("age");

const country = document.getElementById("country");

const studentId = document.getElementById("studentId");

const checkBtn = document.getElementById("checkBtn");

const reportBtn = document.getElementById("reportBtn");

const output = document.getElementById("output");

/* =========================================
   SHOW INPUT INFORMATION
========================================= */

username.addEventListener("input", function () {
  output.innerHTML = `
      username.value =
      "${username.value}"

      <br>

      username.placeholder =
      "${username.placeholder}"

      <br>

      username.maxLength =
      ${username.maxLength}
    `;
});

/* =========================================
   checkValidity()
========================================= */

checkBtn.addEventListener("click", function () {
  const result = form.checkValidity();

  output.innerHTML = `
      form.checkValidity()
      → ${result}

      <br><br>

      age.validity.rangeUnderflow
      → ${age.validity.rangeUnderflow}

      <br>

      age.validity.rangeOverflow
      → ${age.validity.rangeOverflow}

      <br>

      username.validity.valueMissing
      → ${username.validity.valueMissing}
    `;
});

/* =========================================
   reportValidity()
========================================= */

reportBtn.addEventListener("click", function () {
  const result = form.reportValidity();

  output.innerHTML = `
      reportValidity()
      returned:

      ${result}
    `;
});

/* =========================================
   FORM SUBMIT
========================================= */

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  output.innerHTML = `
      FORM SUBMITTED

      <br><br>

      Username:
      ${formData.get("username")}

      <br>

      Age:
      ${formData.get("age")}

      <br>

      Country:
      ${formData.get("country")}

      <br><br>

      Student ID:
      ${formData.get("studentId")}

      <br><br>

      Notice:

      <br>

      readonly country exists ✅

      <br>

      disabled studentId is null ❌
    `;
});
