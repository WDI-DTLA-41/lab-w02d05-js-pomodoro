console.log("Can't rain all the time");

var btn = document.querySelector('button');
var pCurrentWork = document.querySelector('p');
var number = 25; //gonna be 25
var task = document.querySelector('input');


var handleStart = function(event) {
  timerId = setInterval(StartTimer, 1000);
    pCurrentWork.innerHTML = pCurrentWork.textContent + task.value;
}


var StartTimer = function(event) {
  var task = document.querySelector('input');
  number = number - 1;
  if (number === 0) {
    clearInterval(timerId) // stop the timer
  }
  return console.log(number);
}














btn.addEventListener('click', handleStart);
