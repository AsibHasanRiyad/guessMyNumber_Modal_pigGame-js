"use strict";

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const showModal = document.querySelectorAll(".show-modal");
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const close = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModal);
}

// closeModal.addEventListener("click", () => {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// overlay.addEventListener("click", () => {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });
closeModal.addEventListener("click", close);
overlay.addEventListener("click", close);

// esc key
document.addEventListener("keydown", (e) => {
  // console.log(e);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    close();
  }
});
