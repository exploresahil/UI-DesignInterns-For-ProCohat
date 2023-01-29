const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

const nextOne = document.getElementById("nextOne");
const nextTwo = document.getElementById("nextTwo");
const nextThree = document.getElementById("nextThree");
const nextFour = document.getElementById("nextFour");
const nextFive = document.getElementById("nextFive");

const backOne = document.getElementById("backOne");
const backTwo = document.getElementById("backTwo");
const backThree = document.getElementById("backThree");
const backFour = document.getElementById("backFour");

nextOne.addEventListener("click", function () {
  one.classList.remove("active");
  two.classList.add("active");
});

backOne.addEventListener("click", function () {
  two.classList.remove("active");
  one.classList.add("active");
});

nextTwo.addEventListener("click", function () {
  two.classList.remove("active");
  three.classList.add("active");
});

backTwo.addEventListener("click", function () {
  three.classList.remove("active");
  two.classList.add("active");
});

nextThree.addEventListener("click", function () {
  three.classList.remove("active");
  four.classList.add("active");
});

backThree.addEventListener("click", function () {
  four.classList.remove("active");
  three.classList.add("active");
});

nextFour.addEventListener("click", function () {
  four.classList.remove("active");
  five.classList.add("active");
});

backFour.addEventListener("click", function () {
  five.classList.remove("active");
  four.classList.add("active");
});

nextFive.addEventListener("click", function () {
  window.location.href = "./form.html";
});
