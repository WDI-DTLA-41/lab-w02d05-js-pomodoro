var $startBtn = document.querySelector('button');
var $task = document.querySelector('input');
var $workingOn = document.querySelector('#task');

var $minutes = document.querySelector('#minutes');
var $seconds = document.querySelector('#seconds');

var timerId = null;

var minutes = 24;
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
    minutes -= 1;
  }
  $minutes.innerHTML = minutes;
}

var startTimer = function(event) {
  $workingOn.textContent = ' ' + $task.value;

  timerId = setInterval(countDown, 100);
  $startBtn.removeEventListener('click', startTimer);

}

// // while (minutes > 0) {
// countdown seconds from 60 to 0
// }
// }



$startBtn.addEventListener('click', startTimer);
