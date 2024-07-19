'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

function checkStatus(message) {
  if (score > 1) {
    displayMessage(message);
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('💀 You Lost the Game!!');
    document.querySelector('.score').textContent = 0;
  }
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('📍 No number entered');
  }
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🥵 Correct Guess!');
    document.querySelector('body').style.backgroundColor = '#06b337';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  else if (guess > secretNumber) {
    checkStatus('📈 Too High!');
  }
  else if (guess < secretNumber) {
    checkStatus('📉 Too Low!');
  }
});

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
