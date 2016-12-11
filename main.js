console.log("Can't rain all the time");

// grabbng DOM nodes
var btn = document.querySelector('button');
var pCurrentWork = document.querySelector('p');
var number = 5; //gonna be 25*60
var number2 = 5;
var task = document.querySelector('input');
var timer = document.querySelector('#timer');
var taskContainer = document.querySelector('.task-container');
var configContainer = document.querySelector('.config-container');
var configBtn = document.querySelector('.config');
var timerId = null;
var timerId2 = null;


// create Start Timers
var handleStart = function() {
  timerId = setInterval(startTimer, 1000);
  pCurrentWork.innerHTML = pCurrentWork.textContent + task.value;
  };


var handleStart5min = function() {
  timerId2 = setInterval(startFiveMinTimer, 1000);
  };


// function to start a timer
var startTimer = function() {
  number = number - 1;
  if (number === 0) {
    clearInterval(timerId) // stop the timer
    pCurrentWork.innerHTML = "Completed tasks: " + task.value;
    var takeBreak = document.createElement('p');
    takeBreak.innerHTML = 'Take a break!';
    taskContainer.appendChild(takeBreak);
    handleStart5min();
  }
  timer.textContent = number + ' in seconds';
};


// function to start a five min timer
var startFiveMinTimer = function() {
  number2 = number2 - 1;
  if (number2 === 0) {
    clearInterval(timerId2);
    console.log('done');
  timerId = null;
  number = 5;
  pCurrentWork.innerHTML = '';
  pCurrentWork.innerHTML = "Currently working on...";
  handleStart();
  }
  timer.textContent = "Starting again in " + number2 + " in seconds";
};


// function to clear input field
var clearInput = function() {
  task.value = '';
};


// handle for the config setup
var handleConfig = function() {
  var configWork = document.createElement('input');
  configWork.setAttribute('placeholder', 'Work');
  var configBreak = document.createElement('input');
  configBreak.setAttribute('placeholder', 'Break');
  configContainer.appendChild(configWork);
  configContainer.appendChild(configBreak);
  var configStartBtn = document.createElement('button');
  configStartBtn.setAttribute('type','text');
  configStartBtn.classList.add('configStartBtn');
  configStartBtn.textContent = 'Start';
  configContainer.appendChild(configStartBtn);
  configBtn.removeEventListener('click', handleConfig);
}


// Event Listeners
configBtn.addEventListener('click', handleConfig)
btn.addEventListener('click', handleStart);
