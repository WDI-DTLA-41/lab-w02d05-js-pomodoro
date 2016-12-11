// console.log(document);

var $form = document.querySelector('form');
var $startButton = document.querySelector('.startbutton');
var $inputBox = document.querySelector('input[name="usertask"]');
var taskBox = document.querySelector('.dummy');
var $timer = document.querySelector('.dummytimer');
var secondsID;
var seconds = 60;
//function to be executed on submit button/return key
var submitClick = function(evt) {

  //prevents form submission
  evt.preventDefault();
  console.log('hi');

  //assigns input field text to variable
  var inputText = $inputBox.value;
  console.log(inputText);

  //renders user input to task box
  taskBox.textContent = inputText;

  //resets the user input in the input field
  $inputBox.value = " ";

  // call taskTimer function
  secondsID = setInterval(taskTimer, 1000);
};

$startButton.addEventListener('click', submitClick);


var taskTimer = function() {
  seconds = seconds - 1;
  if (seconds == -1)
  {
    seconds = 59;
  };
  console.log(seconds);
  $timer.textContent = seconds;
};




