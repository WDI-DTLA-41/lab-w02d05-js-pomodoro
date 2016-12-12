var input = document.querySelector('.task');
var btnStart = document.querySelector('.start');
var btnConfig = document.querySelector('.config');
var minutes = 0;
var seconds = 0;
var timerID = null;
var defaultWorkMins = 25;
var defaultBreakMins = 5;
var pomodoroBreak = 15;
var isBreak = false;
var tasks = [];
var task = document.createElement('p');
var clock = document.createElement('h2');
var setWork;
var setBreak;
var audio = document.createElement('audio');
var divInput = document.querySelector('.input');
audio.setAttribute('src', 'Melancholic-piano-music.mp3');
audio.setAttribute('id', 'audio');
audio.setAttribute('loop', 'true');
divInput.appendChild(audio);

clock.classList.add('clock');
task.classList.add('task');
btnConfig.addEventListener('click', inputSettings);
btnStart.addEventListener('click', pomodoro);
input.addEventListener('keyup', pomodoro);

function inputSettings(evt){
  var apply = document.createElement('button');
  var div = document.querySelector('.input');
  setWork = document.createElement('input');
  setBreak = document.createElement('input');
  btnConfig.removeEventListener('click', inputSettings);
  setWork.setAttribute('type', 'number');
  setWork.setAttribute('id', 'configWork');
  setWork.setAttribute('placeholder', 'Min work time 1');
  div.appendChild(setWork);
  setBreak.setAttribute('type', 'number');
  setBreak.setAttribute('id', 'configBreak');
  setBreak.setAttribute('placeholder', 'Min break time 1');
  div.appendChild(setBreak);
  apply.classList.add('apply');
  apply.textContent = 'Apply';
  apply.addEventListener('click', applySettings);
  div.appendChild(apply);
}
function applySettings(evt){
  var work;
  var brk;
  var btn;
  var div;
  if(setWork.value >= 1 && setBreak.value >=1){
    defaultWorkMins = setWork.value;
    defaultBreakMins = setBreak.value;
    div = document.querySelector('.input');
    work = document.getElementById('configWork');
    brk = document.getElementById('configBreak');
    btn = document.querySelector('.apply');
    div.removeChild(work);
    div.removeChild(brk);
    div.removeChild(btn);
    btnConfig.addEventListener('click', inputSettings);
  } else return false;
}
function pomodoro(evt){
  if(evt.keyCode===13 || evt.target===btnStart){
    btnConfig.removeEventListener('click', inputSettings);
    btnStart.removeEventListener('click', pomodoro);
    input.removeEventListener('keyup', pomodoro);
    minutes = defaultWorkMins;
    addTask(input.value);
    input.value = '';
    startTimer();
  }
}
function addTask(inputTask){
  var div = document.querySelector('.timer');
  tasks.push(inputTask);
  task.textContent = 'Currently working on ... ' + inputTask;
  clock.textContent = displayTimer(minutes, seconds);
  div.appendChild(task);
  div.appendChild(clock);
}
function countDownMinutes(){
  var clock = document.querySelector('.clock');
  var complete = document.querySelector('p');
  var ul = document.querySelector('.completed');
  var audio = document.getElementById('audio');
  clock.textContent = displayTimer(minutes, seconds);
  if(seconds>0 && minutes>=0){
    seconds = seconds - 1;
  } else if(seconds===0 && minutes>0){
    seconds = 59;
    minutes = minutes - 1;
  } else { // if minutes === 0 && seconds === 0, task done, stop timer
    if(!isBreak){ // if not in a break, end work timer, begin break
      if(tasks.length>0){
      addListItem();
      }
      clearInterval(timerID);
      audio.play();

      if(tasks.length===4){
        complete.innerHTML = 'Completed Tasks: ' + tasks[tasks.length-1] + '<br><br>You completed 4 tasks! Take a long Break!';
        takeBreak(1);
      } else {
        complete.innerHTML = 'Completed Tasks: ' + tasks[tasks.length-1] + '<br><br>Take a Break!';
        takeBreak(defaultBreakMins);
      }
    } else { // break is over, end break timer, add new task
      isBreak = !isBreak;
      audio.pause();
      if(tasks.length===4){
        tasks = [];
        ul.textContent = '';
        complete.innerHTML = 'Completed Tasks: ' + '<br><br>Long break time\'s up! Start Over!';
      } else {
        complete.innerHTML = 'Completed Tasks: ' + tasks[tasks.length-1] + '<br><br>Break Over!';
      }
      clearInterval(timerID);
      minutes = defaultBreakMins;
      seconds = 0;
      btnConfig.addEventListener('click', inputSettings);
      btnStart.addEventListener('click', pomodoro);
      input.addEventListener('keyup', pomodoro);
    }
  }
}
function startTimer(){
  timerID = setInterval(countDownMinutes, 1000);
}
function displayTimer(minutes, seconds){
  if(minutes<10 && seconds<10){
    return '0' + minutes + ':0' + seconds;
  } else if(minutes<10){
    return '0' + minutes + ':' + seconds;
  } else if(seconds<10){
    return minutes + ':0' + seconds;
  } else {
    return minutes + ':' + seconds;
  }
}
function takeBreak(time){
  isBreak = !isBreak;
  minutes = time;
  seconds = 0;
  startTimer();
}
function addListItem(){
  var item = document.createElement('li');
  var ul = document.querySelector('.completed');
  item.textContent = tasks[tasks.length-1];
  ul.appendChild(item);
}
