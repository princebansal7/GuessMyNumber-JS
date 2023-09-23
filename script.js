'use strict';

// Math object provides various methods, random() is one of them
// it generates number between 0 and 1

let secretNumber = Math.trunc(Math.random() * 20) + 1; // geneartes numbers between 1 and 20 (both inclusive)
// document.querySelector('.number').textContent = secretNumber; // we will show it when user wins

let score = 20; // initial score, also called state variable as this score is part of application state
let highScore = 0; // initial highscore, also called state variable as this score is part of application state

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// added this to remove duplicacy
function checkStatus(message) {
  if (score > 1) {
    // document.querySelector('.message').textContent = message;
    displayMessage(message);
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    // document.querySelector('.message').textContent = '💀 You Lost the Game!!';
    displayMessage('💀 You Lost the Game!!');
    document.querySelector('.score').textContent = 0;
  }
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // When no input
  if (!guess) {
    // document.querySelector('.message').textContent = '📍 No number entered';
    displayMessage('📍 No number entered');
  }

  // When Wins
  else if (guess === secretNumber) {
    // When wins then we are displaying the secret number here
    document.querySelector('.number').textContent = secretNumber;

    // document.querySelector('.message').textContent = '🥵 Correct Guess!';
    displayMessage('🥵 Correct Guess!');

    document.querySelector('body').style.backgroundColor = '#06b337';
    document.querySelector('.number').style.width = '30rem';

    // setting highscore on winning
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // When guess is high
  else if (guess > secretNumber) {
    checkStatus('📈 Too High!');
  }

  // when guess is low
  else if (guess < secretNumber) {
    checkStatus('📉 Too Low!');
  }
});

// resetting required things when user presses "Again" button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});

// We can remove other duplicate code too using functions
