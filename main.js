console.log("hi from js")

// Input Box
$inputBox = document.querySelector('#input-box');
// Start Button
$startButton = document.querySelector('#start-button');

// Time-Keeper area
$timeKeeper = document.querySelector('#time-keeper');

// Create h1
$newh1 = document.createElement('h1');
$newh1.textContent="Currently working on..."
$timeKeeper.appendChild($newh1)

//create h3
$newh3 = document.createElement('h3');
$newh3.setAttribute('id', 'currentTask');
$newh3.textContent="//input box value//";
$timeKeeper.appendChild($newh3);

// create h2
$newh2 = document.createElement('h2');
$newh2.innerHTML = 'Time Left: <span id="timerMinutes"> 25</span>minutes <span id="timerSeconds">59 </span>seconds';
$timeKeeper.appendChild($newh2);
