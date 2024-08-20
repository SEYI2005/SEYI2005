"use strict";
const mul = document.querySelector(".mul");
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const div = document.querySelector(".div");
const num9 = document.querySelector(".num9");
const num6 = document.querySelector(".num6");
const num3 = document.querySelector(".num3");
const num8 = document.querySelector(".num8");
const num5 = document.querySelector(".num5");
const num2 = document.querySelector(".num2");
const num7 = document.querySelector(".num7");
const num4 = document.querySelector(".num4");
const num1 = document.querySelector(".num1");
const modulo = document.querySelector(".modulo");
const num0 = document.querySelector(".num0");
const point = document.querySelector(".point");
const oval = document.querySelector(".oval");
const sqr = document.querySelector(".sqr");
const square = document.querySelector(".square");
const cancel = document.querySelector(".cancel");
let answer = document.querySelector(".answer");
let smallbox = document.querySelector(".smallBox");
let hidden = document.querySelector(".hidden");
let sign = document.querySelector(".sign");
const equal = document.querySelector(".equal");

let arr = [];
let currentNumber = "";

num1.addEventListener("click", function () {
  currentNumber += "1";
  answer.textContent = currentNumber;
});
num2.addEventListener("click", function () {
  currentNumber += "2";
  answer.textContent = currentNumber;
});
// ... (similar changes for other number buttons)
num3.addEventListener("click", function () {
  currentNumber += "3";
  answer.textContent = currentNumber;
});
num4.addEventListener("click", function () {
  currentNumber += "4";
  answer.textContent = currentNumber;
});
num5.addEventListener("click", function () {
  currentNumber += "5";
  answer.textContent = currentNumber;
});
num6.addEventListener("click", function () {
  currentNumber += "6";
  answer.textContent = currentNumber;
});
num7.addEventListener("click", function () {
  currentNumber += "7";
  answer.textContent = currentNumber;
});
num8.addEventListener("click", function () {
  currentNumber += "8";
  answer.textContent = currentNumber;
});
num9.addEventListener("click", function () {
  currentNumber += "9";
  answer.textContent = currentNumber;
});
num0.addEventListener("click", function () {
  currentNumber += "0";
  answer.textContent = currentNumber;
});
point.addEventListener("click", function () {
  currentNumber += ".";
  answer.textContent = currentNumber;
  arr.push(parseFloat(currentNumber));
});
cancel.addEventListener("click", function () {
  currentNumber = "";
  answer.textContent = "0";
  arr = [];
  hidden.classList.add("hidden");
});

//Rest of the code remains the same
console.log(arr);

add.addEventListener("click", function () {
  if (add) {
    // this stores it as an entire number and not an individual number
    arr.push(parseFloat(currentNumber));
    currentNumber = "";

    hidden.classList.remove("hidden");
    sign.textContent = "+";
  }
});
mul.addEventListener("click", function () {
  if (mul) {
    arr.push(parseFloat(currentNumber));
    currentNumber = "";

    hidden.classList.remove("hidden");
    sign.textContent = "x";

    console.log(arr);
  }
});
sub.addEventListener("click", function () {
  if (sub) {
    arr.push(parseFloat(currentNumber));

    currentNumber = "";

    hidden.classList.remove("hidden");
    sign.textContent = "-";
  }
});
div.addEventListener("click", function () {
  if (div) {
    arr.push(parseFloat(currentNumber));
    currentNumber = "";
    const c = Number(currentNumber);

    answer.textContent = c;

    hidden.classList.remove("hidden");
    sign.textContent = "/";
    console.log(arr);
  }
});
sqr.addEventListener("click", function () {
  if (sqr) {
    arr.push(parseFloat(currentNumber));
    currentNumber = "";

    hidden.classList.remove("hidden");
    sign.textContent = "√";
  }
});
square.addEventListener("click", function () {
  if (square) {
    arr.push(parseFloat(currentNumber));
    currentNumber = "";

    hidden.classList.remove("hidden");
    sign.textContent = "x²";
  }
});
oval.addEventListener("click", function () {
  if (oval) {
    arr.push(parseFloat(currentNumber));
    currentNumber = "";

    hidden.classList.remove("hidden");
    sign.textContent = "1/x";
  }
});
modulo.addEventListener("click", function () {
  if (modulo) {
    arr.push(parseFloat(currentNumber));
    currentNumber = "";

    hidden.classList.remove("hidden");
    sign.textContent = "%";
  }
});
equal.addEventListener("click", function () {
  if (sign.textContent === "+") {
    arr.push(parseFloat(currentNumber));
    currentNumber = "";
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    hidden.classList.add("hidden");
    answer.textContent = result;

    arr = [result];
  }
  if (sign.textContent === "-") {
    arr.push(parseFloat(currentNumber));
    currentNumber = "";
    let v = 0;
    for (let i = 0; i < arr.length; i++) {
      let result1 = arr[i];
      result1 += v;
      hidden.classList.add("hidden");
      answer.textContent = result1;
      arr = [result1];
    }

    // Similar logic for other operations
  }
});
