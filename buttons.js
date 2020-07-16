let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  if(allowInput) {
    lightUp('.green');
    playSound(300, 250);
    clicksTrack++;
    buttonValue = 1;

    userTurn();
  }
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  if(allowInput) {
    lightUp('.red')
    playSound(349, 250);
    clicksTrack++;
    buttonValue = 2;

    userTurn();
  }
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  if(allowInput) {
    lightUp('.yellow');
    playSound(440, 250);
    clicksTrack++;
    buttonValue = 3;

    userTurn();
  }
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  if(allowInput) {
    lightUp('.blue');
    playSound(523, 250);
    clicksTrack++;
    buttonValue = 4;

    userTurn();
  }
});


//HELPER FUNCTIONS
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

function playSound(freq, time) {
  let context = new AudioContext();
  let o = context.createOscillator();
  let g = context.createGain();
  o.frequency.value = freq;
  o.connect(context.destination);
  o.connect(g);
  o.type = 'sine';
  g.gain.value = 0;
  o.start(0);
  g.gain.value = 1;
  o.stop(0.5);
}
