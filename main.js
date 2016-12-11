var input = document.querySelector('.task');
var btn = document.querySelector('.start');
var minutes = 24;
var seconds = 59;
var timerID = null;
// var inputTime;
btn.addEventListener('click', pomodoro);
input.addEventListener('keyup', pomodoro);

function pomodoro(evt){
  if(evt.keyCode===13 || evt.target===btn){
    btn.removeEventListener('click', pomodoro);
    input.removeEventListener('keyup', pomodoro);
    addTask(input.value);
    startTimer();
  }
}
function addTask(inputTask){
  var task = document.createElement('p');
  var clock = document.createElement('h2');
  var page = document.querySelector('.input');
  clock.classList.add('clock');
  task.textContent = 'Currently working on ' + inputTask + ' ';
  clock.textContent = displayTimer(minutes, seconds);
  task.appendChild(clock);
  page.appendChild(task);
}
function countDownSeconds(){
  var clock = document.querySelector('.clock');
  if(seconds>0 && minutes>=0){
    seconds = seconds - 1;
  } else if(seconds===0 && minutes>0){
    seconds = 59;
    minutes = minutes - 1;
  } else {
    //if minutes === 0 && seconds === 0
    console.log('minutes and seconds should === 0');
    clearInterval(timerID);
    // take a break
  }
  clock.textContent = displayTimer(minutes, seconds);
}
function startTimer(){
  timerID = setInterval(countDownSeconds, 1000);
}
function displayTimer(mins, secs){
  if(mins<10 && secs<10){
    return '0' + mins + ':0' + secs;
  } else if(mins<10){
    return '0' + mins + ':' + secs;
  } else if(secs<10){
    return mins + ':0' + secs;
  } else {
    return minutes + ':' + seconds;
  }
}
function takeBreak(){
}
