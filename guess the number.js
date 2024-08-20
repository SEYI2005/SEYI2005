"use strict";
// making the guess the number from scratch

// making the guess the number from scratch
// i had to put all the element in variablse so that i can be able to access them
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const message = document.querySelector(".message");
const span1 = document.querySelector(".span1");
const span2 = document.querySelector(".span2");
let number = document.querySelector(".number");
const questionmark = document.querySelector(".questionmark");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highestScore = 0;

// i created a click function for the check box
check.addEventListener("click", function () {
  // i created a variable for the guess number
  const guess = Number(number.value);
  // condition for if the user did not enter anything
  if (!guess) {
    message.textContent = "⛔This is an invalid number";

    // condition for if the guess is corect
  } else if (guess === secretNumber) {
    message.textContent = "🎉congratulations! you got it right";
    // i had to disable the check and number box after the user wins and lose
    check.disabled = true;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".questionmark").style.padding = "15px";
    score > highestScore;
    highestScore = score;
    span2.textContent = highestScore;
    number.disabled = true;

    // if the secret number is greater than the guess
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? "Too High" : "Too Low";
      score--;
      span1.textContent = score;

      // if the score is equal to zero the user looses
    } else {
      message.textContent = "You lose";
      number.disabled = true;
      check.disabled = true;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

// i created a click functgion for the again button
again.addEventListener("click", function () {
  // i had to increase the score because it is reducing by 1 (score--;) making it to be equal to 10
  score = 11;

  score--;
  span1.textContent = score;

  span2.textContent = highestScore;
  message.textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".questionmark").style.padding = "5px";
  check.disabled = false;
  number.disabled = false;
  document.querySelector(".number").value = "";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
