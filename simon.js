
// This file contains the game logic.
// All the event-listening should happen in buttons.js

var clicksTrack = 0;
var sequence = []; //computer array
var userSequence = []; //user array
var allowInput = false;
let buttonValue = 0;

computerTurn();

//TURN FUNCTIONS
function computerTurn() {
  allowInput = false;
  let rand = getRandom();
  sequence.push(rand);
  setTimeout(function() {
    lights(0);
  }, 250);
  allowInput = true;
}

function lights(num) {
  switch(sequence[num]) {
    case 1:
      lightUp('.green');
      break;
    case 2:
      lightUp('.red');
      break;
    case 3:
      lightUp('.yellow');
      break;
    case 4:
      lightUp('.blue');
  }
  num++;

  if(num < sequence.length) {
    setTimeout(function() {
      lights(num);
    }, 250);
  }
}

function userTurn() {
  if(!checkButton(buttonValue, sequence[clicksTrack - 1])) {
    loseGame();
    clicksTrack = 0;
  }

  userSequence.push(buttonValue);

  if(userSequence.length == sequence.length) {
    clicksTrack = 0;
    setTimeout(computerTurn, 500);
  }
}

function loseGame(){
  allowInput = false;
  console.log('GAME LOST');
}

//HELPER FUNCTIONS
function getRandom() {
  //generate random 1-4
  return Math.floor((Math.random() * 4) + 1);
}

function checkButton(a, b) {
  console.log("CHECKING INPUT");
  return a == b;
}

//BONUS
function lightUp(color) {
  let button = document.querySelector(color);
  button.classList.add('light-up');
  setTimeout(turnOffLight, 250);
}

function turnOffLight() {
  greenButton.classList.remove('light-up');
  redButton.classList.remove('light-up');
  yellowButton.classList.remove('light-up');
  blueButton.classList.remove('light-up');
}
