let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds
const initialTime = 25 * 60; // Store initial time for resetting

function startTimer() {
  const timeDisplay = document.getElementById("time");

  // Clear any previous timer before starting a new one
  if (timer) {
    clearInterval(timer);
  }

  timer = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timeDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("Time's up!");
    } else {
      timeLeft--;
    }
  }, 1000);
}

function stopTimer() {
  // Pause the timer by clearing the interval
  if (timer) {
    clearInterval(timer);
  }
}

function resetTimer() {
  // Reset the timer to the initial value and update the display
  stopTimer();
  timeLeft = initialTime;
  const timeDisplay = document.getElementById("time");
  timeDisplay.textContent = "25:00";
}
