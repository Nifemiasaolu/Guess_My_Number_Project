'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

////////////////
// Handling Click Events

// Defining the Secret Number
let secretNumber = Math.trunc(Math.random() * 20 + 1);

// Defining the score variable, and assigning it a value.
let score = 20;

// Defining the highscore
let highscore = 0;

// Refactoring the document functions

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
}

const displayNumberStyle = function (width) {
  document.querySelector('.number').style.width = width;
}
// Functionalizing the Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');

    // When Player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');

    // document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';

    // document.querySelector('.number').style.width = '30rem';
    displayNumberStyle('30rem');
    
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess passes 20
  } else if (guess > 20) {
    // document.querySelector('.message').textContent = 'Number above 20!';
    displayMessage('Number above 20!');
    ///////// Refactored Code ////////
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);

      // document.querySelector('.message').textContent = 'Number above 20!';
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game';
      displayMessage('💥 You lost the game');
      displayScore(0);
    }
  }

  ///////////Detailed Code /////////////

  // When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;

  //     // document.querySelector('.message').textContent = 'Number above 20!';
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Functionalizing the again button

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
