// when start is clicked, start timer and show current task
var startButton = document.querySelector('#start');
var inputVal = document.querySelector('input').value;


var handleInput = function(event){
  var currentTask = document.createElement('div');
  currentTask.textContent = "Currently working on: " + inputVal;
  document.querySelector('.currentlyWorkingOn').appendChild(currentTask);
}

startButton.addEventListener('click', handleInput);
