"use strict";

let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let displayMessage = function (input) {
    document.querySelector('.message').textContent = input;
}

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        // no number
        displayMessage('No Number!');
        // Loser
    } else if (guess !== number) {
        if (score > 1) {
            displayMessage(guess > number ? 'Too High!' : 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 'You lost!';
        }
        // Winner
    }
    if (guess === number) {
        displayMessage('You Won!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // Too high
    }
});

let resetButton = function reset() {
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    document.querySelector('.score').textContent = score;
    number = Math.floor(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
}

document.querySelector('.again').addEventListener('click', resetButton);

$(document).ready(function() {
    let kanomiCode = "3838404037393739666513";
    let secretCode = "";

    $(document).on("keyup", function(event) {
        console.log(event.keyCode);
        secretCode += event.keyCode;

        if (secretCode.toString() === kanomiCode) {
            score *= 2;
            $('.score').text(score);
            $('.green-box').fadeIn(2000).fadeOut(2000);
            console.log("Code entered correctly. Score multiplied by 2.");
        }
    });
});
