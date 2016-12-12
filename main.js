var startBtn = document.querySelector('.start');
var taskInput = document.querySelector('.task-input');
var task = document.querySelector('.task');
var mins = document.querySelector('.mins');
var secs = document.querySelector('.secs');
var largeInt = 25;
// var largeIntSec = 60;
var smallInt = 5;
var breakInt = 15;
var called = false;

//large interval countdown function
var countDownLrg = function(){
  called = true;
  largeInt--;
  mins.textContent = largeInt;
  if (largeInt === 0){
    clearInterval(lrgIntTimer);
  }
}

//small interval countdown function
var countDownSml = function(){
  smallInt--;
  mins.textContent = smallInt;
}
//break interval countdown function
var countDownBrk = function(){
  breakInt--;
  mins.textContent = breakInt;
}

taskInput.addEventListener('keyup', function(e){
  task.textContent = ' ' + e.target.value + '.';
  if (e.keyCode === 13){
    taskInput.value = '';
  }
});

//large interval timer start
var startLrgInt = function(e){
      startBtn.removeEventListener('click', startLrgInt);
      lrgIntTimer = setInterval(countDownLrg, 500);
}
startBtn.addEventListener('click', startLrgInt);


//small interval timer start
// var startSmlInt = function(e){
//   startSmlInt = setInterval(countDownSml, 1000);
// }

    // clearInterval(lrgIntTimer);
    // smallIntTimer = setInterval(countDownSml, 1000);











// var countDownLrgSec = function(){
//   for(i=0;i<largeIntMin;i++){
//     largeIntSec--;
//     secs.textContent = largeIntSec;
//   }
// }
