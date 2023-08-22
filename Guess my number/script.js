'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable
let highscore = 0;

const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);
  if (score > 1) {
    if (!guess) {
      displaymessage('¯_(ツ)_/¯ No number!');
    } else if (guess === number) {
      displaymessage('🎉 Correct Number!');
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = '#60b347';
      //set background to green if correct
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      document.querySelector('.number').style.width = '30rem';
      //set the number width
    } else if (guess !== number) {
      score--;
      displaymessage(guess > number ? '📈 Too Big!' : '📉 Too Small!');
      document.querySelector('.score').textContent = score;
    }
  } else {
    score--;
    document.querySelector('.score').textContent = score;
    displaymessage('( ´･･)ﾉ(._.`) You lost!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displaymessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
