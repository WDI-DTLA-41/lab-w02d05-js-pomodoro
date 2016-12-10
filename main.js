console.log("hi from js")

// click start button do things
// will need event listener and function to do things
$startbtn = document.querySelector('#start-button');

// Function to start Timer
var startTimer = function (event) {
  currentTask();
};

//need input text value
$task = document.querySelector('input');


// Start Button event listener
$startbtn.addEventListener('click', startTimer);

// function to display currently working on
var currentTask = function () {
  $Notification = document.createElement('h1');
  $Notification.innerHTML = "Currently Working on..." + $task.value;
  document.body.appendChild($Notification);
  $task.value = null;

}

time = 0;
// Create Timer
var countDown = function {
  console.log(time);
  time = time - 1;
}
