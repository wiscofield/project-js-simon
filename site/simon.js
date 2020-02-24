function newSimon() {
  return {
    state: 'fresh',
    challenge: [],
    step: 0,
  };
}

let SIMON_COLORS = [
  'red',
  'blue',
  'yellow',
  'green',
];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function simonChallengeIsFresh(simon) {
  return simon.step === 0;
}

function simonIsChallengeComplete(simon) {
  return simon.step === simon.challenge.length;
}

function simonIsGameFinished(simon) {
  return simon.state === 'finished';
}

function simonEndGame(simon) {
  simon.state = 'finished';
}

function simonGetScore(simon) {
  return simon.challenge.length - 1;
}

function simonIsMoveCorrect(simon, move) {
  return simon.challenge[simon.step] === move;
}

function simonStart(simon) {
  let newColor = getRandomElement(SIMON_COLORS);

  simon.step = 0;
  simon.challenge = [newColor];
  simon.state = 'playing';
}
