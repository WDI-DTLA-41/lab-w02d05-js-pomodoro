console.log('holla');

// creates variables that i'll use in the future

var timer = document.body.querySelector('h1');
var task = document.body.querySelector('h2');
var btn = document.body.querySelector('button');
var counter = (25 * 60 * 1000);
var inputTask = document.body.querySelector('input');

// creates count down function that stops
// once number reaches 0
var countDown = function () {
  if (counter === 0) {
    return counter;
  } else {
  counter --;
  }
  timer.textContent = counter;
  console.log(counter);
}

// creates click event to start count down
var startCountDown = function (){
  setInterval(countDown, 1000);
  // clearInterval (startCountDown);
}

btn.addEventListener('click', startCountDown);

// creates function that takes in a string
// and prints out current task on the page
var getTask = inputTask.value; // assigns user input val to var
task.textContent = getTask; // displays user input as text in
inputTask.value = ''; // clears input field after submit

var toDo = function (){
  return "Currently working on... " + getTask;
}

btn.addEventListener('click', toDo);

