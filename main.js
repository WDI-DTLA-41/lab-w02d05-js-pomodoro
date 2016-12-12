console.log('aloha!');
// ================================================================
// when a user clicks "start" button, they should see
// a counter decreasing from 25 minutes
// ================================================================
var timer = document.body.querySelector('div');
var mins = 25; // total amount of minutes to countdown
var secs = mins * 60; // coverts total countdown minutes to seconds
var timerMins = 0; //
var timerSecs = 0;
var timerId = null;

// create a function that starts at a given number
// and counts down by 1 until it reaches 0
var countDown = function () {
  timerMins = Math.floor(secs / 60);
  timerSecs = Math.floor(secs % 60);
  // in order to keep clock format (mm:ss),
  // when single mins/secs, print "07" insetad of "7"
  if (timerSecs <= 9)
    timerSecs = "0" + timerSecs;
  secs--;
  console.log(secs);
  if (secs < 0){
    clearInterval(timerId);
    alert("Take a break, fool!");
  }
  //display timer as "mm:ss"
  timer.innerHTML = timerMins + ":" + timerSecs;
}

// when timerMins < 1 && timerSecs <=9
// numbers show as red
timer.classList.add('red');

// ================================================================
// the timer should stop at OO:00 and alert user to take a break
// ================================================================


  // setTimeout(function(){
  // console.log("Take a break, fool!");
  // }, 1000 * secs * mins);


// when a user clicks the start button
// start the countdown
var btn = document.body.querySelector('button');

var startCountDown = function (){
  timerId = setInterval(countDown, 1000);
}
btn.addEventListener('click', startCountDown);


// ================================================================
// when a user clicks "start" button, they should see "currently
// working on..." plus the name of the task submitted
// ================================================================

// a user types a task into the input field
// when the start button is clicked, display
// the input value on the page

var btn = document.body.querySelector('button');
var inputTask = document.body.querySelector('input');
var displayTask = document.body.querySelector('h2');

var getTask = inputTask.value; // assigns user input val to var
displayTask.textContent = inputTask.value; // displays user input as text in
inputTask.value = ''; // clears input field after submit


var currentTask = function (){
  var getTask = inputTask.value; // assigns user input to getTask
    displayTask.textContent = "Currently working on...  " + getTask; // displays getTask as textContent in h2
    // return ("Currently working on... " + getTask);
  inputTask.value = ''; // clears input field after submit
}

btn.addEventListener('click', currentTask)


