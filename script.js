"use strict";

//selecting elements
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const rollButton = document.querySelector(".btn--roll");
const newButton = document.querySelector(".btn--new");
const holdButton = document.querySelector(".btn--hold");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");

//set initial value
const score = [0, 0];
score0.textContent = score[0];
score1.textContent = score[1];
dice.classList.add("hidden");

let currentScore = 0;
let activePlayer = 0;

const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

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
    // score[`${activePlayer}`] = currentScore;
  } else {
    // switch player
    switchPlayer();
  }
});

// hold button
holdButton.addEventListener("click", () => {
  score[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  switchPlayer();
});
