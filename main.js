console.log("hi from js")

// Input Box
$inputBox = document.querySelector('#input-box');
// Start Button
$startButton = document.querySelector('#start-button');

// Time-Keeper area
$timeKeeper = document.querySelector('#time-keeper');


var displayTaskandStartTimer = function () {
  if ($inputBox.value === "") {
    return false;
  }
  createTaskandTimer();
  // Start Timer
  startTimer();

};

// Create Event Listener on Button to create prompt of timer and task
$startButton.addEventListener('click', displayTaskandStartTimer);


// Create timer
var startTimer = function () {
  timerSecondId = setInterval(countDownSeconds,1000);
}

//timer Second
var timerMinute = 25;
var timerSecond = 59;
var countDownSeconds = function() {
  $timerSeconds = document.getElementById('timerSeconds');
  console.log(timerSecond);
  timerSecond = timerSecond - 1;
  $timerSeconds.textContent = timerSecond;
  if (timerSecond === 0) {
    clearInterval(timerId);
  }
  return timerSecond;
};

// Create Task and timer view
var createTaskandTimer = function () {
  // Create h1
  $newh1 = document.createElement('h1');
  $newh1.textContent="Currently working on..."
  $timeKeeper.appendChild($newh1)

  //create h3
  $newh3 = document.createElement('h3');
  $newh3.setAttribute('id', 'currentTask');
  $newh3.textContent=$inputBox.value;
  $inputBox.value = null;
  $timeKeeper.appendChild($newh3);

  // create h2
  $newh2 = document.createElement('h2');
  $newh2.innerHTML = 'Time Left: <span id="timerMinutes"></span> minutes <span id="timerSeconds"></span> seconds';
  $timeKeeper.appendChild($newh2);
};
