// when start is clicked, show current task
var startButton = document.querySelector('#start');
var currentTask = document.querySelector('#currentTask');
// var timer = document.querySelector('#timer');
var byMinute = document.querySelector('#byMinute');
var bySecond = document.querySelector('#bySecond');
var inputVal;
var minute = 24;
var second = 60;

var handleInput = function(event){
  document.querySelectorAll('.tempHide').classList.remove('tempHide');
  inputVal = document.querySelector('input').value;
  currentTask.textContent = inputVal;
  var minuteId = setInterval(minuteCount, (1000*60));
  var secondId = setInterval(secondCount, 1000);
  startButton.removeEventListener('click', handleInput);
}

startButton.addEventListener('click', handleInput);

// when start is clicked, begin 25min countdown

var minuteCount = function(){
  minute -= 1;
  if (minute===0){
    clearInterval(minuteId);
    minuteId.setTimeout();
  };
  byMinute.textContent = minute;
  // return minute;
}

var secondCount = function(){
  if (second === 0 && minute === 0){
    clearInterval(secondId);
    secondId.setTimeout()
  } else if (second===0){
    second = 59;
  };
  second -= 1;
  bySecond.textContent = second;
  // return second;
}

// to debug: minute is not in sync with seconds???


// byMinute.textContent = minuteCount();
// bySecond.textContent = secondCount();
// var countItDown = function(){
//   minute-=1;
//   second -=1;
//   timer.textContent = minute + ":" + second;
//   if (second===0){
//     second = 59;
//   }
//   else if (minute===0){
//     clearInterval(timerId)
//   };
// };

