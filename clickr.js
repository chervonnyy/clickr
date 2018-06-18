const playButton = document.getElementById('play');
const restartButtton = document.getElementById('restart');
const display = document.getElementById('display');
const counterField = document.getElementById('counter');

const countClicks = () => {
    counter++;
    counterField.innerHTML = counter;
}

const startTimer = () => {
    playButton.removeEventListener('click', startTimer);
    display.innerHTML = countdown;
    const timer = setInterval(() => {
        countdown--;
        if (countdown < 1) {
            playButton.removeEventListener('click', countClicks);
            display.innerHTML = 'Game Over';
            counterField.innerHTML = 'Your score is ' + counter;
            showRestartButton();
            setTimeout(clearInterval(timer));
        } else {
            display.innerHTML = countdown;
        }
    }, 1000)
}

const showRestartButton = () => {
    setTimeout(() => restartButtton.style.display="block", 1000);
}

const restartGame = () => {
    counter = 0;
    countdown = 5; 
    display.innerHTML = '';
    counterField.innerHTML = '';
    playButton.addEventListener('click', countClicks);
    playButton.addEventListener('click', startTimer);
    restartButtton.style.display="none";
}

restartGame();

restartButtton.addEventListener('click', restartGame);








