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
  clockStart();

};

// Create Event Listener on Button to create prompt of timer and task
$startButton.addEventListener('click', displayTaskandStartTimer);


// Start Create timer //
var clockStart = function () {
  timerSecondId = setInterval(countDownSeconds,1000);
  timerMinuteId = setInterval(countDownMinutes,60000);
}

//timer Second logic
var countDownSeconds = function() {
  $timerSeconds = document.getElementById('timerSeconds');
  console.log(timerSecond);
  timerSecond = timerSecond - 1;
  $timerSeconds.textContent = timerSecond;
  if (timerSecond === 0) {
    if (timerMinute !== 0) {
      timerSecond = 60;
    } else {
      clearInterval(timerSecondId);
      console.log('stop here');
    }
  }
  return timerSecond;
};

//timer Minute logic
var countDownMinutes = function() {
  $timerMinutes = document.getElementById('timerMinutes');
  console.log(timerMinutes);
  timerMinute = timerMinute - 1;
  $timerMinutes.textContent = timerMinute;
  if (timerMinute === 0) {
    clearInterval(timerMinuteId);
  }
  return timerMinute;
};

// End Create Timer //

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
  $newh2.innerHTML = 'Time Left: <span id="timerMinutes">24</span> minutes <span id="timerSeconds">59</span> seconds';
  $timeKeeper.appendChild($newh2);
  timerMinute = document.getElementById('timerMinutes').innerHTML;
  timerSecond = document.getElementById('timerSeconds').innerHTML;
};
