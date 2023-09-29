# Pomodoro Timer Web App

![Pomodoro Timer](pomodoro-screenshot.png)

This is a simple web-based Pomodoro Timer application built using HTML, CSS, and JavaScript. The Pomodoro Technique is a time management method that uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. This timer helps you stay focused and productive.


## Table of Contents

- [Demo](#demo)
- [Website Overview](#website-Overivew)
- [Features](#features)
- [Usage](#usage)
- [Files](#files)
- [Customization](#customization)
- [How It Works](#how-it-works)



## Demo

[QR Code Generator](https://pomodoro-focus-app.netlify.app/)

<!-- ![Website Image](https://i.ibb.co/H7dLwbx/screen.png) -->
## Website Overview    
<img src="https://i.ibb.co/VNX7LxN/pomodoro-Timer.gif" alt="Pomodoro Timer">


## Features

- Set the session length (work duration) in minutes.
- Set the break length (short break duration) in minutes.
- Start and stop the timer.
- Automatically switches between session and break.
- Reset the timer to default values.

## Usage

1. Open the `index.html` file in a web browser.
2. You will see the Pomodoro Timer interface.
3. Set the session length and break length using the "+" and "-" buttons.
4. Click the "Start" button to start the timer.
5. The timer will switch between session and break, and you can stop it at any time.
6. Click the "Reset" button to reset the timer and session/break lengths to default values.

## Files

- `index.html`: The main HTML file containing the structure of the web app.
- `style.css`: The CSS file for styling the web app.
- `script.js`: The JavaScript file containing the logic for the Pomodoro Timer.

## How It Works

- The timer starts with a default session length of 25 minutes and a default break length of 5 minutes.
- You can adjust the session and break lengths by clicking the "+" and "-" buttons next to them.
- Click the "Start" button to begin the timer.
- The timer will count down from the session length, and when it reaches zero, it will automatically switch to the break timer.
- You can stop the timer at any time by clicking the "Stop" button.
- To reset the timer and session/break lengths to default values, click the "Reset" button.

## Customization

You can customize the default session and break lengths by modifying the following variables in `script.js`:

```javascript
let sessionLength = 25; // Initial session length in minutes
let breakLength = 5;    // Initial break length in minutes
```

You can also customize the styling of the web app by editing the `style.css` file.



## **** Thank You For Visiting ****