console.log('hi');

//smokescreen says surprise in console after 2 seconds (2000 ms)
var intervalId = window.setInterval(function(){
  console.log('surprise');
}, 2000);

//smokescreen clearInterval that stops above code
window.clearInterval(intervalId);

var minutes = 25;
var seconds = 60;
var input = document.querySelector('input');
var taskButton = document.querySelector('.addTask');
var startButton = document.querySelector('.start');
var ol = document.querySelector('ol');
var clockFace = document.querySelector('.countDown');
clockFace.textContent = (minutes + ":" + seconds);

//function to decrease time
var secondsId = setInterval(function(){
  console.log(seconds -= 1);
}, 1000);

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

//when click on add task button, adds task to list
var handleClick = function(event) {
  if (input.value !== "") {
    var li = document.createElement('li');
    li.textContent = input.value;
    ol.appendChild(li);
    input.value = "";
  }
// console.log('clicked');
}
taskButton.addEventListener('click', handleClick);
input.addEventListener('keypress', handleInput);



