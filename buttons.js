var clicksTrack = 0
let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  greenButton.classList.add('light-up');
  gtrackClicks++;
  clicksTrack++;
  document.getElementById('clicks-track').innerHTML =('Clicks: ' + clicksTrack);
  setTimeout(turnOffLight, 250);
  playSound(300, 250);
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  redButton.classList.add('light-up');
  btrackClicks++;
  clicksTrack++;
  document.getElementById('clicks-track').innerHTML =('Clicks: ' + clicksTrack);
  setTimeout(turnOffLight, 250);
  playSound(349, 250);
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  yellowButton.classList.add('light-up');
  ytrackClicks++;
  clicksTrack++;
  document.getElementById('clicks-track').innerHTML =('Clicks: ' + clicksTrack);
  setTimeout(turnOffLight, 250);
  playSound(440, 250);
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  blueButton.classList.add('light-up');
  btrackClicks++;
  clicksTrack++;
  document.getElementById('clicks-track').innerHTML =('Clicks: ' + clicksTrack);
  setTimeout(turnOffLight, 250);
  playSound(523, 250);
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


/*
/function for non-random order

// global array of strings for fixed order
const activate = [
  green,
  red,
  blue,
  yellow,
];

Display "red" on the page

Wait for the user to click a button
If it's not red, display some text that says "game over"
If it's red, display the next color ("blue") in this case
Wait for the user to click a button
If it's not blue, display some text that says "game over"
If it's blue, display the next color
etc. etc.
until there are no more colors left
*/