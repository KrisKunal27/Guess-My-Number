'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 23;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/
let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);
  //no guess
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number😢';
  }
  //correct guess
  else if (guess === Secretnumber) {
    document.querySelector('.message').textContent = 'Correct Number!🎉';
    score += 5;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = Secretnumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== Secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > Secretnumber ? 'Too High 📈' : 'Too Low 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game 🤬';
      document.querySelector('.score').textContent = 0;
    }
  }
});
//guess is high
//   else if (guess > Secretnumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too High 📈';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost the game 🤬';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < Secretnumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low 📈';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost the game 🤬';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  Secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
