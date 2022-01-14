'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
// # is for id and . is for classes

const score1El = document.getElementById('score--1');
// more faster than query selector

const current0El = document.getElementById('current--0');

const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. check for rolled 1: if true switch to next player

  if (dice !== 1) {
    // add dice to the current score
    currentScore += dice;
    current0El.textContent = currentScore; // change later
  } else {
    //switch to the next player
  }
});
