'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
// # is for id and . is for classes

const score1El = document.getElementById('score--1');
// more faster than query selector

const diceEl = document.querySelector('.dice');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
