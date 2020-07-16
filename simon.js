
// This file contains the game logic.
// All the event-listening should happen in buttons.js

var sequence = new Int16Array();
var allowInput = false;
var buttonValue = 0;
var buttonPushed = false;

gameManager();

function gameManager() {
  var rand = getRandom();
  console.log(rand);
  //Add to sequence

  let a = checkInput(rand);
  console.log(a);
}

function getRandom() {
  //generate random 1-4
return Math.floor((Math.random() * 4) + 1);
}

function checkInput(rand) {
  allowInput = true;
  while(!buttonPushed) {
    let input = buttonValue;
  }
  allowInput = false;
  buttonPushed = false;
  buttonValue = 0;
  return rand == input;
}
