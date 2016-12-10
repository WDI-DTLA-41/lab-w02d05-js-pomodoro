console.log("hi from js")

// Input Box
$inputBox = document.querySelector('#input-box');
// Start Button
$startButton = document.querySelector('#start-button');

// Time-Keeper area
$timeKeeper = document.querySelector('#time-keeper');


var displayTaskandTimer = function () {
  if ($inputBox.value === "") {
    return false;
  }
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
$newh2.innerHTML = 'Time Left: <span id="timerMinutes">25</span> minutes <span id="timerSeconds">59</span> seconds';
$timeKeeper.appendChild($newh2);

};

// Create Event Listener on Button to create prompt of timer and task
$startButton.addEventListener('click', displayTaskandTimer);
