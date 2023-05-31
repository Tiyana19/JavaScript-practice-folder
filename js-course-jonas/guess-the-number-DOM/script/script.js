'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
const check = document.querySelector('.check');
const again = document.querySelector('.again');
let chance = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when there is no input
  if (!guess) {
    displayMessage('⛔ No Number');
  }

  // when player wins the game
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct guess');
    if (highScore <= chance) {
      highScore = chance;
    }
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  // guess is wrong
  else if (guess !== secretNumber) {
    if (chance > 1) {
      // ternary operator here, will give the choice with condition for the value of message variable(argument)
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      chance--;
      document.querySelector('.score').textContent = chance;
    } else {
      displayMessage('💥 You Lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // guess is too Low
  // else if (guess < secretNumber) {
  //   if (chance > 1) {
  //     message.textContent = "📉 Too Low";
  //     chance--;
  //     document.querySelector(".score").textContent = chance;
  //   } else {
  //     message.textContent = "💥 You Lost the Game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }

  // // guess is too High
  // else if (guess > secretNumber) {
  //   if (chance > 1) {
  //     message.textContent = "📈 Too High";
  //     chance--;
  //     document.querySelector(".score").textContent = chance;
  //   } else {
  //     message.textContent = "💥 You Lost the Game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

// JavaScript in the Browser: DOM and Events
// Coding Challenge #1

again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  displayMessage('Start guessing...');
  chance = 20;
  document.querySelector('.score').textContent = chance;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
