const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
const currentOne = document.querySelector("#current--0");
const currentTwo = document.querySelector("#current--1");
const scoreOne = document.querySelector("#score--0");
const scoreTwo = document.querySelector("#score--1");
const dice = document.querySelector(".dice");
const playerOne = document.querySelector(".player--0");
const playerTwo = document.querySelector(".player--1");

let currentScore = [0, 0];
let score = [0, 0];
let winner = false;
let activPlayer = 0;
dice.style.display = "none";

btnRoll.addEventListener("click", () => {
  dice.style.display = "block";
  if (!winner) {
    let num = Math.floor(Math.random() * 6) + 1;
    dice.src = `./dice-${num}.png`;
    currentScore[activPlayer] += num;
    if (num === 1) {
      currentScore[activPlayer] = 0;
      document.querySelector(`#current--${activPlayer}`).textContent =
        currentScore[activPlayer];
      switPlayer();
    } else {
      document.querySelector(`#current--${activPlayer}`).textContent =
        currentScore[activPlayer];
    }
  }
});
btnHold.addEventListener("click", () => {
  if (!winner) {
    if (score[activPlayer] != 100) {
      score[activPlayer] += currentScore[activPlayer];
      document.querySelector(`#score--${activPlayer}`).textContent =
        score[activPlayer];
      currentScore[activPlayer] = 0;
      document.querySelector(`#current--${activPlayer}`).textContent = 0;
      switPlayer();
      gameOwer();
    }
  }
});
btnNew.addEventListener("click", () => {
  currentScore = [0, 0];
  score = [0, 0];
  winner = false;
  activPlayer = 0;
  dice.style.display = "none";
  document.querySelector(`#score--0`).textContent = 0;
  document.querySelector(`#score--1`).textContent = 0;
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
});
function gameOwer() {
  score.forEach((item, index) => {
    console.log(item);
    if (item >= 100) {
      winner = true;
      document
        .querySelector(`.player--${index}`)
        .classList.add("player--winner");
    }
  });
}
function switPlayer() {
  document
    .querySelector(`.player--${activPlayer}`)
    .classList.remove("player--active");
  activPlayer = activPlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activPlayer}`)
    .classList.add("player--active");
}
