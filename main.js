var startBtn = document.querySelector('.start');
var taskInput = document.querySelector('.task-input');
var task = document.querySelector('.task');
var mins = document.querySelector('.mins');
var secs = document.querySelector('.secs');
var largeIntMin = 25;
var largeIntSec = largeIntMin / 60;
var smallIntMin = 5;
var breakIntMin = 15;

//large interval countdown function
var countDownLrgMin = function(){
  largeIntMin--;
  mins.textContent = largeIntMin;
}
var countDownLrgSec = function(){
  largeIntSec--;
  secs.textContent = largeIntMin;
}
//small interval countdown function
var countDownSml = function(){
  smallIntMin--;
  mins.textContent = smallIntMin;
}
//break interval countdown function
var countDownBrk = function(){
  breakIntMin--;
  mins.textContent = breakIntMin;
}


//large interval timer start
var startLrgInt = function(e){
  startBtn.removeEventListener('click', startLrgInt);
  lrgIntTimerMin = setInterval(countDownLrgMin, 1000);
  lrgIntTimerSec = setInterval(countDownLrgSec, 10);
  // ??? startSmlInt = setTimeout(setInterval(countDownSml, 1000), largeInt * 1000);
}
startBtn.addEventListener('click', startLrgInt);


//small interval timer start
var startSmlInt = function(e){
  startSmlInt = setInterval(countDownSml, 1000);
}


