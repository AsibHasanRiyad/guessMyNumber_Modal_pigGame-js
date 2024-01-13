"use strict";

let secretNum = Math.round(Math.random() * 20);
console.log(secretNum);
// document.querySelector(".number").textContent = secretNum;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  //   when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number ⛔️";
  }
  //   when player wins the game
  else if (guess === secretNum) {
    document.querySelector(".message").textContent = "Congratulations";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
    // else {
    //   highscore = highscore;
    //   document.querySelector(".highscore").textContent = highscore;
    // }
    // change background
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.backgroundColor = "#333";
    document.querySelector(".number").style.color = "white";
    // show secret
    document.querySelector(".number").textContent = secretNum;
  }

  // when guess is different
  else if (guess !== secretNum) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNum ? "Too High" : "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the game";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }

  //   when guess is high
  // else if (guess > secretNum) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too High";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lost the game";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector("body").style.backgroundColor = "red";
  //   }
  // }
  // //   when guess is low
  // else {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lost the game";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector("body").style.backgroundColor = "red";
  //   }
  // }
});

// reload
document.querySelector(".again").addEventListener("click", () => {
  // location.reload();
  score = 20;
  secretNum = Math.round(Math.random() * 20);
  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector(".number").style.backgroundColor = "#eee";
  document.querySelector(".number").style.color = "#333";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 0;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
});
