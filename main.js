var $startBtn = document.querySelector('button');
var $task = document.querySelector('input');
var $workingOn = document.querySelector('#task');
var $minutes = document.querySelector('#minutes');
var $seconds = document.querySelector('#seconds');
var timerId = null;
var minutes = 25;
var seconds = 60;

var countDown = function() {
  seconds -= 1;
  if (seconds < 10) {
    $seconds.innerHTML = '0' + seconds;
  } else {
    $seconds.innerHTML = seconds;
  }
  if (seconds === 0) {
    seconds = 60;
  }
  if (seconds === 59) {
    minutes -= 1;
  }
  if (minutes < 10) {
    $minutes.innerHTML = '0' + minutes;
  } else {
    $minutes.innerHTML = minutes;
  }
  if (minutes === 0 && seconds === 1) {
    $seconds.innerHTML = '00';
    clearInterval(timerId);
    $startBtn.addEventListener('click', startTimer);
  }
  console.log('minute' + minutes);
  console.log('seconds' + seconds);
}


var startTimer = function(event) {
  $workingOn.textContent = ' ' + $task.value;
  $workingOn.classList.add('workin');
  minutes = 25;
  seconds = 60;
  timerId = setInterval(countDown, 10);
  $startBtn.removeEventListener('click', startTimer);
}

$startBtn.addEventListener('click', startTimer);
