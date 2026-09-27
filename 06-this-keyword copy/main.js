const studentBtn = document.getElementById("studentBtn");

const nameResult = document.getElementById("nameResult");

const ageResult = document.getElementById("ageResult");

const student = {
  name: "Ahmad",

  age: 23,

  showInfo: function () {
    nameResult.textContent = this.name;

    ageResult.textContent = this.age;
  },
};

studentBtn.addEventListener("click", function () {
  student.showInfo();
});
