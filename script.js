let sessionLength = 25; // Initial session length in minutes
    let breakLength = 5;    // Initial break length in minutes
    let isSession = true;   // Flag to track if it's a session or break
    let isRunning = false;  // Flag to track if the timer is running
    let interval;
    let remainingTime = sessionLength * 60; // Remaining time in seconds

    const sessionLengthDisplay = document.getElementById("session-length");
    const breakLengthDisplay = document.getElementById("break-length");
    const timerDisplay = document.getElementById("timer");
    const startStopButton = document.getElementById("start-stop");
    const timerTypeDisplay = document.getElementById("timer-type");

    // Function to update the timer display
    function updateTimerDisplay() {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Update the session length and display
    function updateSessionLength() {
        sessionLengthDisplay.textContent = sessionLength;
        if (isSession && !isRunning) {
            updateTimerDisplay();
        }
    }

    // Function to update the timer type (Session/Break)
    function updateTimerType() {
        if (isRunning) {
            timerTypeDisplay.textContent = isSession ? "Session Timer" : "Break Timer";
        } else {
            timerTypeDisplay.textContent = "Start Timer";
        }
    }

    // Function to update the timer type to "Start Timer" when stopped
    function updateTimerTypeToStart() {
        timerTypeDisplay.textContent = "Start Timer";
    }

    // Update the break length and display
    function updateBreakLength() {
        breakLengthDisplay.textContent = breakLength;
        if (!isSession && !isRunning) {
            updateTimerDisplay();
        }
    }

    // // Handle the session length decrement
    document.getElementById("session-decrement").addEventListener("click", () => {
        if (!isRunning) {
            if (sessionLength > 1) {
                sessionLength--;
                updateSessionLength();
                remainingTime = sessionLength * 60; // Reset remaining time
                updateTimerDisplay();
                updateTimerTypeToStart(); // Update timer type to "Start Timer"
            }
        } else if (isSession && sessionLength > 1) {
            sessionLength--;
            updateSessionLength();
            remainingTime -= 60; // Adjust the remaining time
        }
    });

    // // Handle the session length increment
    document.getElementById("session-increment").addEventListener("click", () => {
        if (!isRunning) {
            if (sessionLength < 60) {
                sessionLength++;
                updateSessionLength();
                remainingTime = sessionLength * 60; // Reset remaining time
                updateTimerDisplay();
                updateTimerTypeToStart(); // Update timer type to "Start Timer"
            }
        } else if (isSession && sessionLength < 60) {
            sessionLength++;
            updateSessionLength();
            remainingTime += 60; // Adjust the remaining time
        }
    });

    // Handle the break length decrement
    document.getElementById("break-decrement").addEventListener("click", () => {
        if (breakLength > 1) {
            breakLength--;
            updateBreakLength();
            if (!isSession) {
                remainingTime = breakLength * 60;
                updateTimerDisplay();
                updateTimerTypeToStart(); // Update timer type to "Start Timer"
            }
        }
    });

    // Handle the break length increment
    document.getElementById("break-increment").addEventListener("click", () => {
        if (breakLength < 60) {
            breakLength++;
            updateBreakLength();
            if (!isSession) {
                remainingTime = breakLength * 60;
                updateTimerDisplay();
                updateTimerTypeToStart(); // Update timer type to "Start Timer"
            }
        }
    });


    // Handle the start/stop button    
    startStopButton.addEventListener("click", () => {
        if (isRunning) {
            clearInterval(interval);
            isRunning = false;
            startStopButton.textContent = "Start";
            startStopButton.classList.remove("btn-danger");
            startStopButton.classList.add("btn-primary");
            updateTimerTypeToStart(); // Update timer type to "Start Timer"
        } else {
            isRunning = true;
            startStopButton.textContent = "Stop";
            startStopButton.classList.remove("btn-primary");
            startStopButton.classList.add("btn-danger");

            interval = setInterval(() => {
                if (remainingTime === 0) {
                    if (isSession) {
                        isSession = false;
                        remainingTime = breakLength * 60;
                    } else {
                        clearInterval(interval);
                        isRunning = false;
                        isSession = true;
                        sessionLength = 25;
                        remainingTime = sessionLength * 60;
                        updateSessionLength();
                        updateBreakLength();
                        updateTimerDisplay();
                        startStopButton.textContent = "Start";
                        startStopButton.classList.remove("btn-danger");
                        startStopButton.classList.add("btn-primary");
                    }
                    updateTimerType(); // Update the timer type when switching
                } else {
                    remainingTime--;
                }
                updateTimerDisplay();
            }, 1000);
            updateTimerType(); // Update the timer type when starting/stopping
        }
    });
    // Handle the reset button
    document.getElementById("reset").addEventListener("click", () => {
        clearInterval(interval);
        isRunning = false;
        isSession = true;
        sessionLength = 25;
        breakLength = 5;
        updateSessionLength();
        updateBreakLength();
        remainingTime = sessionLength * 60;
        updateTimerTypeToStart(); // Update timer type to "Start Timer"
        updateTimerDisplay();
        startStopButton.textContent = "Start";
        startStopButton.classList.remove("btn-danger");
        startStopButton.classList.add("btn-primary");
    });

    // Initialize the session and break length displays
    updateSessionLength();
    updateBreakLength();
    updateTimerType(); // Initialize the timer type
    updateTimerDisplay();