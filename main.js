console.log("Can't rain all the time");

// grabbng DOM nodes
var btn = document.querySelector('button');
var pCurrentWork = document.querySelector('p');
var number = 25*60; //gonna be 25*60
var task = document.querySelector('input');
var timer = document.querySelector('#timer');
var taskContainer = document.querySelector('.task-container');
var configContainer = document.querySelector('.config-container');
var configBtn = document.querySelector('.config');


// create Start Timers
var handleStart = function() {
  timerId = setInterval(startTimer, 1000);
  pCurrentWork.innerHTML = pCurrentWork.textContent + task.value;

  };

var handleStart5min = function() {
  timerId2 = setInterval(startFiveMinTimer, 1000);
  pCurrentWork.innerHTML = pCurrentWork.textContent + task.value;
  };


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


var startFiveMinTimer = function() {
  var number1 = 10; // 5 min timer
  number1 = number1 - 1;
  if (number1 === 0) {
    clearInterval(timerId2);
    console.log('done');
  }
  timer.textContent = number1;
};

// handle for the config setup
var handleConfig = function() {
  var configWork = document.createElement('input');
  var configBreak = document.createElement('input')
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
