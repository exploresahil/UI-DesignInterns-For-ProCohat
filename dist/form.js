const info = document.getElementById("info");

info.addEventListener("click", function () {
  window.location.href = "./index.html";
});

const formOne = document.getElementById("formOne");
const formTwo = document.getElementById("formTwo");

const formNextOne = document.getElementById("formNextOne");
const formNextTwo = document.getElementById("formNextTwo");

const formBackOne = document.getElementById("formBackOne");
const formBackTwo = document.getElementById("formBackTwo");

formNextOne.addEventListener("click", function () {
  formOne.classList.remove("visible");
  formTwo.classList.add("visible");
});

formBackOne.addEventListener("click", function () {
  formOne.classList.add("visible");
  formTwo.classList.remove("visible");
});

formNextTwo.addEventListener("click", function () {
  formTwo.classList.remove("visible");
  formThree.classList.add("visible");
});

formBackTwo.addEventListener("click", function () {
  formTwo.classList.add("visible");
  formThree.classList.remove("visible");
});

var submitted = false;
