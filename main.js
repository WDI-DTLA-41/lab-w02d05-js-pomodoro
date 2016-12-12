console.log("hi from js")

// Input Box
$inputBox = document.querySelector('#input-box');
// Start Button
$startButton = document.querySelector('#start-button');

// Time-Keeper area
$timeKeeper = document.querySelector('#time-keeper');

var timerMinutes = 0;
var timerSeconds = 10;

var displayTaskandStartTimer = function () {
  if ($inputBox.value === "") {
    return false;
  }
  createTaskandTimer();
  // Start Timer
  $timerSecondsSpan = document.getElementById('timerSeconds');
  $timerMinutesSpan = document.getElementById('timerMinutes');
  clockStart();

};

// Create Event Listener on Button to create prompt of timer and task
$startButton.addEventListener('click', displayTaskandStartTimer);


// Start 25 Minute timer //
var clockStart = function () {
  clockId = setInterval(countDown,1000);
}


//timer Second logic
var countDown = function() {
  console.log('Time: ' + timerMinutes + ' Minutes ' + timerSeconds + ' Seconds');
  if (timerMinutes !== 0 && timerSeconds == 0) {
    timerSeconds = 59;
    $timerSecondsSpan.innerHTML = timerSeconds;
    timerMinutes = timerMinutes - 1;
    $timerMinutesSpan.innerHTML = timerMinutes;
    console.log ('minutes are not 0 seconds are 0');
    return true;
  };

  if (timerMinutes !== 0 && timerSeconds !== 0) {
    console.log ('not zero for both');
    timerSeconds = timerSeconds - 1;
    $timerSecondsSpan.innerHTML = timerSeconds;
    return true;
  };

  if (timerMinutes == 0 && timerSeconds !== 0) {
      console.log ('minutes are zero seconds are not');
      timerSeconds = timerSeconds - 1;
      $timerSecondsSpan.innerHTML = timerSeconds;
      return true;
      } else {
        console.log('stop here');
        clearInterval(clockId);
        document.querySelector('h1').innerHTML = "Take a Break!";
        completedTasks();
        timerMinutes = 5;
        timerSeconds = 0;
        clockId = setInterval(fiveMinCoolDown, 1000);
      };

  return timerSeconds;
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
  $newh2.innerHTML = 'Time Left: <span id="timerMinutes"></span> minutes <span id="timerSeconds"></span> seconds';
  $timeKeeper.appendChild($newh2);
  document.getElementById('timerMinutes').innerHTML = timerMinutes;
  document.getElementById('timerSeconds').innerHTML = timerSeconds;
};

// Completed tasks, Take a break and 5 minute cool down
// Completed Task:

// 5 minute cool down function
var fiveMinCoolDown = function () {

  console.log('Time: ' + timerMinutes + ' Minutes ' + timerSeconds + ' Seconds');
  if (timerMinutes !== 0 && timerSeconds == 0) {
    timerSeconds = 59;
    $timerSecondsSpan.innerHTML = timerSeconds;
    timerMinutes = timerMinutes - 1;
    $timerMinutesSpan.innerHTML = timerMinutes;
    console.log ('minutes are not 0 seconds are 0');
    return true;
  };

  if (timerMinutes !== 0 && timerSeconds !== 0) {
    console.log ('not zero for both');
    timerSeconds = timerSeconds - 1;
    $timerSecondsSpan.innerHTML = timerSeconds;
    return true;
  };

  if (timerMinutes == 0 && timerSeconds !== 0) {
      console.log ('minutes are zero seconds are not');
      timerSeconds = timerSeconds - 1;
      $timerSecondsSpan.innerHTML = timerSeconds;
      return true;
      } else {
        console.log('stop here');
        clearInterval(clockId);
      };

};

// Completed Tasks Function
var completedTasks = function () {
$newUl = document.createElement('ul');
$newUl.innerHTML = "Completed Tasks:"
$newLi = document.createElement('li');
$newLi.innerHTML = document.getElementById('currentTask').innerHTML;
document.getElementById('currentTask').innerHTML = null;
$newUl.appendChild($newLi);
$timeKeeper.appendChild($newUl);

};


