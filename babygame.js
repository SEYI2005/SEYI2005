"use strict";
const text = document.querySelector(".text");
const number = document.querySelector(".number");
const hscore = document.querySelector(".hscore");
let countdown = document.querySelector(".countdown");
const startgame = document.querySelector(".startgame");
const newgame = document.querySelector(".newgame");
const message = document.querySelector(".message");
const check = document.querySelector(".check");
let timesound = new Audio("stopwatch.mp3");
let Highscore = 0;
let guess = Number(number.value);
let timeleft = 11;
let secretNumber1 = Math.trunc(Math.random() * 20) + 1;
let secretNumber2 = Math.trunc(Math.random() * 20) + 1;
let accumulator = 0;
let answer = secretNumber1 + secretNumber2;
let timer;

const correct = function () {
  guess = Number(number.value);

  if (guess === answer) {
    clearInterval(timer);
    timesound.pause();
    document.querySelector(".message").style.color = "green";
    message.textContent = "You Win😁";
    number.disabled = true;
    if (timeleft > Highscore) {
      Highscore = timeleft;
      hscore.textContent = Highscore;
    }
  } else if (guess !== answer) {
    document.querySelector(".message").style.color = "red";
    message.textContent = "INCORRECT😒";
  } else {
    document.querySelector(".message").style.color = "red";

    message.textContent = "You Lose😒";
  }
};

startgame.addEventListener("click", function () {
  accumulator = `${secretNumber1}  + ${secretNumber2}`;
  text.textContent = accumulator;
  timesound.play();
  timer = setInterval(() => {
    timeleft--;
    countdown.textContent = `Time Left: ${timeleft} seconds`;
    if (timeleft === 0) {
      clearInterval(timer);
      document.querySelector(".message").style.color = "red";
      message.textContent = "You Lose😒";
      number.disabled = true;
      timesound.pause();
    }
  }, 1000);
});
function newGame() {
  // initialize the variables
  timeleft = 11;

  text.textContent = "Input your answer in the box below (Think fast😁)";
  hscore.textContent = 0;
  message.textContent = "START GAME";
  document.querySelector(".message").style.removeProperty("color");
  number.value = "";

  number.disabled = false;
  secretNumber1 = Math.trunc(Math.random() * 20) + 1;
  secretNumber2 = Math.trunc(Math.random() * 20) + 1;
  accumulator = `${secretNumber1}  + ${secretNumber2}`;
  answer = secretNumber1 + secretNumber2;
  // reset the time and sound function.
  if (timesound) {
    timesound.pause();
  }
  if (timer) {
    clearInterval(timer);
    countdown.textContent = 0;
    timeleft = 11;
  }
  timesound = new Audio("stopwatch.mp3");
  timesound.loop = true;
}

check.addEventListener("click", correct);

newgame.addEventListener("click", function () {
  newGame();
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") correct();
});
