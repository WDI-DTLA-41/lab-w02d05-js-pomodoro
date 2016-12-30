var $startBtn = document.querySelector('#start');
var $timer = document.querySelector('#timer');
var $newTask = document.querySelector('#new-task');
var $status = document.querySelector('#status');
var $setDefaultsBtn = document.querySelector('#setDefaults');
var $configBtn = document.querySelector('#config');

var $workLength = document.querySelector('#workLength');
var $longBreakLength = document.querySelector('#longBreakLength');
var $shortBreakLength = document.querySelector('#shortBreakLength');

var config = {
  break: {
    long: 15,
    short: 5
  },
  work: 25
};

var currentTask = null;

function formatTime(duration) {
  var seconds = parseInt( (duration / 1000) % 60);
  var minutes = parseInt( (duration / (1000 * 60) ) % 60);
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  return minutes + ':' + seconds;
}

function getCurrentTask() {
  currentTask = $newTask.value;
  $status.textContent = 'Currently working on ' + currentTask;
  $newTask.value = '';
}

function startTask(evt) {
  getCurrentTask();
  countDown(config.work, finishTask);
  document.querySelector('#work').classList.toggle('hidden');
}

function finishTask() {
  document.querySelector('#completed-tasks').innerHTML += '<li class="completed task">' + currentTask + '</li>';
  takeBreak();
}

function takeBreak() {
  var minutes = determineBreakTime();
  $status.textContent = 'Take a break!';
  countDown(minutes, finishBreak);
}

function finishBreak() {
  $status.textContent = '';
  $timer.textContent = '';
  document.querySelector("#work").classList.toggle('hidden');
}

function determineBreakTime() {
  if (document.querySelector('.completed').length % 4 === 0) {
    return config.break.long;
  } else {
    return config.break.short;
  }
}

function countDown(minutes, cb) {
  var duration = minutes * 60 * 1000;
  var timerId = window.setInterval(function(){
    var time = formatTime(duration);
    $timer.textContent = time;
    duration -= 1000;
    if ( duration <= 0 ) {
      window.clearInterval(timerId);
      cb();
    }
  }, 1000);
}

function toggleConfig(evt) {
  $workLength.value = config.work;
  $longBreakLength.value = config.break.long;
  $shortBreakLength.value = config.break.short;
  document.querySelector('#config-controls').classList.toggle('hidden');
  $workLength.focus();
}

function setConfig() {
  config.work = parseInt($workLength.value)
  config.break.long = parseInt($longBreakLength.value)
  config.break.short = parseInt($shortBreakLength.value)
}

$startBtn.addEventListener('click', startTask);

$configBtn.addEventListener('click', toggleConfig);

$setDefaultsBtn.addEventListener('click', function(evt) {
  setConfig();
  toggleConfig();
});

