let simon = newSimon();

simonStart(simon);

if (simonChallengeIsFresh(simon)) {
  console.log('Colors:', simon.challenge);
}

function pressButton(simon, buttonColor) {
  if (simonIsMoveCorrect(simon, buttonColor)) {
    simon.step += 1;

    if (simonIsChallengeComplete(simon)) {
      let newColor = getRandomElement(SIMON_COLORS);

      simon.step = 0;
      simon.challenge.push(newColor);

      console.log('Colors:', simon.challenge);
    }
  } else {
    simonEndGame(simon);

    let score = simonGetScore(simon);

    console.log(`Game over! Your score is ${score}.`);
  }
}

$('.simon-button').on('mousedown', function() {
  $(this).addClass('light-up');
});

$('.simon-button').on('mouseup', function() {
  // If you move your cursor to a different button
  // before letting go of the mouse button, that other
  // button will receive the mouseup even. Workaround:
  // Remove light-up from every simon-button when mouseup happens
  $('.simon-button').removeClass('light-up');
});

$('.simon-button.green').on('click', function() {
  pressButton(simon, 'green');
});

$('.simon-button.blue').on('click', function() {
  pressButton(simon, 'blue');
});

$('.simon-button.yellow').on('click', function() {
  pressButton(simon, 'yellow');
});

$('.simon-button.red').on('click', function() {
  pressButton(simon, 'red');
});
