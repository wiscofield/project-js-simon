var clicksTrack = 0

let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  if(allowInput) {
    greenButton.classList.add('light-up');
    clicksTrack++;
    document.getElementById('clicks-track').innerHTML =('Clicks: ' + clicksTrack);
    setTimeout(turnOffLight, 250);
    playSound(300, 250);

    buttonPushed = true;
    buttonValue = 1;
  }
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  if(allowInput) {
    redButton.classList.add('light-up');
    clicksTrack++;
    document.getElementById('clicks-track').innerHTML =('Clicks: ' + clicksTrack);
    setTimeout(turnOffLight, 250);
    playSound(349, 250);

    buttonPushed = true;
    buttonValue = 2;
  }
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  if(allowInput) {
    yellowButton.classList.add('light-up');
    clicksTrack++;
    document.getElementById('clicks-track').innerHTML =('Clicks: ' + clicksTrack);
    setTimeout(turnOffLight, 250);
    playSound(440, 250);

    buttonPushed = true;
    buttonValue = 3;
  }
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  if(allowInput) {
    blueButton.classList.add('light-up');
    clicksTrack++;
    document.getElementById('clicks-track').innerHTML =('Clicks: ' + clicksTrack);
    setTimeout(turnOffLight, 250);
    playSound(523, 250);

    buttonPushed = true;
    buttonValue = 4;
  }
});

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
