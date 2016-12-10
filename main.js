var resetTimer = function(){
  clearInterval(secTimerClock);
  timerMin.innerHTML = '25';
  timerSec.innerHTML = ':00';
  minNum = 24;
  secNum = 60;
  taskInput.remove();
  receiveInput();
}

var pauseTimer = function(){
  clearInterval(secTimerClock);
  startbtn.removeEventListener('click',function(){});
  startbtn.addEventListener('click', startSecTimer);

}

var secCountDown = function(){
  timerMin.textContent = minNum;
  timerSec.textContent = ':' + secNum;
  secNum -= 1;
  if (secNum < 10){
    timerSec.textContent = ':0' + secNum;
  }else {
    timerSec.textContent = ':' + secNum;
  }

  if (secNum === 0 && minNum === 0){
    clearInterval(secTimerClock);
    window.setTimeout(function(){
    alert("Great Job!!! It's time to take a break!!!");
    },500);
  } else if (secNum === 0){
    secNum = 60;
    minNum -= 1;
  }

}

var startSecTimer = function(){
 secTimerClock = setInterval(secCountDown,1000);

}

var receiveInput = function(){
  if (input.value !== ''){
    taskInput = document.createElement('span');
    taskInput.innerHTML = ' - ' + input.value;
    currentTask.appendChild(taskInput);
    input.value = '';
    startSecTimer();
  }
}

var taskInput;
var min = document.querySelectorAll('h1')[1];
var timerMin = document.querySelector('#timerMin');
var timerSec = document.querySelector('#timerSec');
var secNum = 60;
var minNum = 24;
var secTimerClock;
var form = document.querySelector('form');
var startbtn = document.querySelector('button');
var pausebtn =document.querySelectorAll('button')[1];
var resetbtn = document.querySelectorAll('button')[2];
var input = document.querySelector('input');
var currentTask = document.querySelector('#currentTask');

startbtn.addEventListener('click', receiveInput);
pausebtn.addEventListener('click', pauseTimer);
resetbtn.addEventListener('click', resetTimer);
