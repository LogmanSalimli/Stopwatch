const secondsScreen = document.querySelector("#seconds");
const centiSecondsScreen = document.querySelector("#centiSeconds");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");

let centiSeconds = 0;
let seconds = 0;
let interval;

const timer = () => {
    centiSeconds++
    if (centiSeconds <= 9) {
        centiSecondsScreen.innerHTML = `0${centiSeconds}`;
    }

    if (centiSeconds > 9) {
        centiSecondsScreen.innerHTML = centiSeconds;
    }

    if (centiSeconds > 99) {
        seconds++
        secondsScreen.innerHTML = `0${seconds}`;
        centiSeconds = 0;
        centiSecondsScreen.innerHTML = "00"
    }

    if (seconds > 9) {
        secondsScreen.innerHTML = seconds;
    }
}

const start = () => {
    console.log('started')
    clearInterval(interval);
    interval = setInterval(timer, 10);
}

const stop = () => {
    clearInterval(interval);
}
const reset = () => {
    clearInterval(interval);
    centiSeconds = 0;
    seconds = 0;
    centiSecondsScreen.innerHTML = "00";
    secondsScreen.innerHTML = "00";
}

startBtn.addEventListener('click', start)
stopBtn.addEventListener('click', stop)
resetBtn.addEventListener('click', reset)