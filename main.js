console.log("Can't rain all the time");

var btn = document.querySelector('button');
var pCurrentWork = document.querySelector('p');
var number = 5; //gonna be 25*60
var task = document.querySelector('input');
var timer = document.querySelector('#timer');
var taskContainer = document.querySelector('.task-container');


var handleStart = function(event) {
  timerId = setInterval(startTimer, 1000);
  pCurrentWork.innerHTML = pCurrentWork.textContent + task.value;
  };


var startTimer = function(event) {
  var task = document.querySelector('input');
  number = number - 1;
  if (number === 0) {
    clearInterval(timerId) // stop the timer
    pCurrentWork.innerHTML = "Completed tasks: " + task.value;
    var takeBreak = document.createElement('p');
    takeBreak.innerHTML = 'Take a break!';
    taskContainer.appendChild(takeBreak);
    timerID = setInterval(startFiveMinTimer, 1000);
  }
  timer.textContent = number/60;

};


var startFiveMinTimer = function(evt) {
  var number = 5; // 5 min timer
  console.log(number);
  var number = number - 1;
  timer.textContent = number;
  if (number === 0) {
  clearInterval(timerId);
  }

};











btn.addEventListener('click', handleStart);
