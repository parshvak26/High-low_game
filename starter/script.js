'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    let guess = document.querySelector('.guess').value;
    if (score > 0){
    
    // if no number 
    if (!guess) {
        document.querySelector('.message').textContent = 'Please enter number';
        score--;
        document.querySelector('.score').textContent = score;
    } 
    // if right number 
    else if (guess == secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = 'Right number ';
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        // for highscore
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }
    }
    // if greater number 
    else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too high !!!';
        score--;
        document.querySelector('.score').textContent = score;
    } 
    // if less number 
    else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too low !!!';
        score--;
        document.querySelector('.score').textContent = score;
    }

    } else{
        document.querySelector('.score').textContent = '0';
        document.querySelector('.message').textContent = 'You Lost !!!!';

    }

})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // console.log(secretNumber);
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''
})