let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
const displayTime = document.getElementById("displayTime");

function formatTime(value) {
    return value < 10 ? "0" + value : value;
}

function stopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTime.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function watchStart() {
    // Prevent multiple timers
    if (!timer) {
        timer = setInterval(stopwatch, 1000);
        document.querySelector('.btn-play').disabled = true;
    }
}

function watchStop() {
    if (timer) {
        clearInterval(timer);
        timer = null;
        document.querySelector('.btn-play').disabled = false;
    }
}

function watchReset() {
    clearInterval(timer);
    timer = null;
    
    seconds = 0;
    minutes = 0;
    hours = 0;
    
    displayTime.textContent = "00:00:00";
    document.querySelector('.btn-play').disabled = false;
}