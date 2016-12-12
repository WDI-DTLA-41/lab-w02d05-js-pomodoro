console.log('hi');

var number = 1500000
var inputbox = document.querySelector('#input-box');
var button = document.querySelector('#button');
var homepage = document.querySelector('#home-page');
var friend = document.querySelector('#friend');
var stage1 = document.querySelector('#stage1');
var stage2 = document.createElement('div');
stage2.setAttribute('class', 'twoHere');
var stage3 = document.createElement('div');
stage3.setAttribute('class', 'threeHere');

var countDown = function(button) {
  var minute =
  stage3.innerHTML = number;

  number = number - 1000;
}

var thingtoDo = function(button) {
  stage1.setAttribute('class', 'oneGone');
  stage2.innerHTML = 'Currently working on: ' + inputbox.value;
  homepage.appendChild(stage2);
}

var timetoDo = function(button) {
    number = number - 1000;
    console.log(number);
    setInterval(countDown, 1000);
    stage3.innerHTML = number;
    stage2.appendChild(stage3)

}

button.addEventListener('click', thingtoDo)
button.addEventListener('click', timetoDo)
