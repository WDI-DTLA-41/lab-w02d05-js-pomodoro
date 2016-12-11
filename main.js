console.log('aloha!');
// ================================================================
// when a user clicks "start" button, they should see
// a counter decreasing from 25 minutes
// ================================================================
var timer = document.body.querySelector('div');
var mins = 25; // total amount of minutes to countdown
var secs = 25 * 60; // coverts total countdown minutes to seconds
var timerMins = 0; //
var timerSecs = 0;

// create a function that starts at a given number
// and counts down by 1 until it reaches 0
var countDown = function () {
  timerMins = Math.floor(secs / 60);
  timerSecs = secs % 60;
  // in order to keep clock format (mm:ss),
  // when single mins/secs, print "07" insetad of "7"
  if(timerSecs <= 9) timerSecs = "0" + timerSecs;
  secs--;
  // if (timerId <= 0) {
  //   return timerId;
  // } else {
  // timerId --;
  // }
  timer.innerHTML = timerMins + ":" + timerSecs;
}
console.log(countDown());

// when a user clicks the start button
// start the countdown
var btn = document.body.querySelector('button');
var startCountDown = function (){
  setInterval(countDown, 1000);
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


