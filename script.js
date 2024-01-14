"use strict";

//selecting elements
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const rollButton = document.querySelector(".btn--roll");
const newButton = document.querySelector(".button--new");
const holdButton = document.querySelector(".button--hold");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");

//set initial value
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");

let currentScore = 0;
let activePlayer = 0;

// roll button function
rollButton.addEventListener("click", () => {
  const randomNumber = Math.trunc(Math.random() * 6 + 1);
  console.log(randomNumber);
  dice.classList.remove("hidden");
  dice.src = `dice-${randomNumber}.png`;
  if (randomNumber !== 1) {
    currentScore = currentScore + randomNumber;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch player
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  }
});
