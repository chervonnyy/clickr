const button = document.getElementById('button');
let display = document.getElementById('display');
let counterField = document.getElementById('counter');

let counter = 0;
let countdown = 5;

const countClicks = function() {
    counter++;
    counterField.innerHTML = counter;
}

const startTimer = function() {
    button.removeEventListener('click', startTimer);
    display.innerHTML = countdown;
    const timer = setInterval(() => {
        countdown--;
        if (countdown < 1) {
            button.removeEventListener('click', countClicks);
            display.innerHTML = 'Game Over';
            counterField.innerHTML = 'Your score is ' + counter;
            setTimeout(clearInterval(timer));
        } else {
            display.innerHTML = countdown;
        }
    }, 1000)
}

button.addEventListener('click', countClicks);
button.addEventListener('click', startTimer);








