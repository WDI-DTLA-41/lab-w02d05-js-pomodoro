// console.log(document);

var $form = document.querySelector('form');
var $startButton = document.querySelector('.startbutton');
var $inputBox = document.querySelector('input[name="usertask"]');
var taskBox = document.querySelector('.dummy');
var $timer = document.querySelector('.dummytimer');
var secondsID;
var seconds = 60;
var minutesID;
var minutes = 25;

$inputBox.focus();

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
  secondsID = setInterval(secondsTimer, 1000); //1000
  minutesID = setInterval(minutesTimer, 61000); //61000, 60000 was skipping 1 second
  console.log(secondsID);
  console.log(minutesID);

  displayID = setInterval(displayTime, 1000); //did not know this should be added

};

$startButton.addEventListener('click', submitClick);


var secondsTimer = function() {
  seconds = seconds - 1;
  if (seconds === -1) {
    seconds = 59;
  };

    console.log(seconds);
  };



var minutesTimer = function() {
  minutes = minutes - 1;
  if (minutes === 0) {
    // clearInterval(displayID);
    clearInterval(minutesID); //added minutes and seconds because minutes was going to -1
    seconds = 59 //workaround for seconds not stopping at 0 minutes
     if (minutes === 0 && seconds === 0) { //just added - seconds timer wasnt stopping at 0 minutes
      clearInterval(displayID); //not working
      setTimeout(displayID);
  };
};

  console.log(minutes);
};

var displayTime = function() {
  $timer.textContent = minutes + ":" + seconds;

};

