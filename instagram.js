"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const t1 = document.getElementById("t1");
  const t2 = document.getElementById("t2");
  const message = document.querySelector(".message");
  const log = document.querySelector(".log");

  log.addEventListener("click", function () {
    if (t1.value.trim() === "") {
      t1.style.backgroundColor = "red";
    } else {
      t1.style.backgroundColor = "";
      message.classList.add("hidden");
    }
    if (t2.value.trim() === "") {
      t2.style.backgroundColor = "red";
    } else {
      t2.style.backgroundColor = "";
    }
  });
});
