var startBtn = document.querySelector('.start');
var taskInput = document.querySelector('.task-input');
var task = document.querySelector('.task');
var mins = document.querySelector('.mins');
var secs = document.querySelector('.secs');
var largeInt = 25;
var smallInt = 5;
var largeInt2 = 25;
var smallInt2 = 5;
var largeInt3 = 25;
var smallInt3 = 5;
var breakInt = 15;

//first cycle
var countDownLrg = function(){
  largeInt--;
  mins.textContent = largeInt;
  if (largeInt === 0){
    mins.textContent = smallInt;
    clearInterval(lrgIntTimer);
    alert('take a break!');
    smlIntTimer = setInterval(countDownSml, 500);
  }
};
var countDownSml = function(){
  smallInt--;
  mins.textContent = smallInt;
  if (smallInt === 0){
    mins.textContent = largeInt2;
    clearInterval(smlIntTimer);
    alert('back to work!');
    lrgIntTimer2 = setInterval(countDownLrg2, 500)
  }
};

//second cycle
var countDownLrg2 = function(){
  largeInt2--;
  mins.textContent = largeInt2;
  if (largeInt2 === 0){
    mins.textContent = smallInt2;
    clearInterval(lrgIntTimer2);
    alert('take a break!');
    smlIntTimer2 = setInterval(countDownSml2, 500);
  }
};
var countDownSml2 = function(){
  smallInt2--;
  mins.textContent = smallInt2;
  if (smallInt2 === 0){
    mins.textContent = largeInt3;
    clearInterval(smlIntTimer2);
    alert('back to work!');
    lrgIntTimer3 = setInterval(countDownLrg3, 500)

  }
};

//third cycle
var countDownLrg3 = function(){
  largeInt3--;
  mins.textContent = largeInt3;
  if (largeInt3 === 0){
    mins.textContent = breakInt;
    clearInterval(lrgIntTimer3);
    alert('take a long break!');
    breakTimer = setInterval(countDownBrk, 500)
  }
};

//break interval countdown function
var countDownBrk = function(){
  breakInt--;
  mins.textContent = breakInt;
  if (breakInt === 0){
    mins.textContent = breakInt;
    clearInterval(breakTimer);
    largeInt = 25;
    smallInt = 5;
  }
};


//pomodoro timer start
var startPomTimer = function(e){
      startBtn.removeEventListener('click', startPomTimer);
      lrgIntTimer = setInterval(countDownLrg, 500);
};
startBtn.addEventListener('click', startPomTimer);

//task input field listener
taskInput.addEventListener('keyup', function(e){
  task.textContent = ' ' + e.target.value + '.';
  if (e.keyCode === 13){
    taskInput.value = '';
  }
});

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
