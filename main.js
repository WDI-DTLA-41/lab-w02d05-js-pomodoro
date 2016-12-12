console.log('hi');

//smokescreen says surprise in console after 2 seconds (2000 ms)
var intervalId = window.setInterval(function(){
  console.log('surprise');
}, 2000);

//smokescreen clearInterval that stops above code
window.clearInterval(intervalId);

var minutes;
var seconds;
var input = document.querySelector('input');
var taskButton = document.querySelector('.addTask');
var startButton = document.querySelector('.start');
var ol = document.querySelector('ol');
var clockFace = document.querySelector('.countDown');
var timeOutId;
var complete = document.querySelector('.complete');

//function to decrease time
// var secondsId = setInterval(function(){
//   console.log(seconds -= 1);
// }, 1000);

//turns text typed into input to tasks on HTML
var handleInput = function(event) {
  // console.log('keyCode', event.keyCode, event.target.value);
  if (event.keyCode === 13) {
    // console.log('pressed enter')
    var li = document.createElement('li');
    li.textContent = event.target.value;
    ol.appendChild(li);
    event.target.value = "";
  };
}

//create time function (25 mins = 1500 seconds * 1000 milliseconds)
var twentyFiveMins = function(mins) {
  seconds = 60;
  minutes = mins - 1;

  var minutesId = setInterval(function(){
  minutes -= 1;
  clockFace.textContent = (minutes + ":" + seconds);
  }, 60000);

  var secondsId = setInterval(function(){
  seconds = seconds - 1;
  clockFace.textContent = (minutes + ":" + seconds);
  }, 1000);

  secondReset = setTimeout(function(){
    seconds = 60;
    clockFace.textContent = (minutes + ":" + seconds);
  }, 60000)

  timeoutId = setTimeout(function(){
    minutes = 00;
    seconds = 00;
    clearInterval(secondsId);
    clearInterval(minutesId);
    clockFace.textContent = (minutes + ":" + seconds);
  }, 25 * 60000)
}


//when click on add task button, adds task to list
var handleClick = function(event) {
  if (input.value !== "") {
    var li = document.createElement('li');
    li.textContent = input.value;
    ol.appendChild(li);
    input.value = "";
  }

  if (event.target === startButton) {
    twentyFiveMins(25);
    startButton.removeEventListener('click', handleClick)

  }
// console.log('clicked');
}

var crossOut = function(event){
  console.log('clicked on list')
event.target.classList.toggle('active');
};

var numComplete = function() {
  var active = document.querySelectorAll('.active');
  complete.textContent = active.length + ' tasks completed';
}

ol.addEventListener('click', crossOut);
ol.addEventListener('click', numComplete);
taskButton.addEventListener('click', handleClick);
input.addEventListener('keypress', handleInput);
startButton.addEventListener('click', handleClick);

