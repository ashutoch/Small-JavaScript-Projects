let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time");

function padStart(value){
    return String(value).padStart(2, '0');
}

function setTime(){
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer(){
    secondsElapsed++;
    setTime();

}
function startClock() {
    //reset if pressed multiple times
    if (interval) stopClock();
    // Clear the previous interval if it exists
    clearInterval(interval);


    // Start the stopwatch
    interval = setInterval(timer, 1000);    
}

function stopClock() {
    // Stop the stopwatch
    clearInterval(interval);
}

function resetClock() {
    // Reset the stopwatch
    stopClock();
    secondsElapsed = 0;
    setTime();
}