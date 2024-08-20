"use strict";

const modal = document.querySelector(".modal");
const showmodal = document.querySelectorAll(".show-modal");
const closemodal = document.querySelector(".close-modal");

console.log(showmodal);
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const overlay = document.querySelector(".overlay");

for (let i = 0; i < showmodal.length; i++)
  showmodal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
console.log("seyi");
closemodal.addEventListener("click", closeModal);
console.log("seyi");
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") if (!modal.classList.contains("hidden")) closeModal();
});
