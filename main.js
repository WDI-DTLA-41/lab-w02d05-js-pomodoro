
console.log('see me?');



// declaring the variable first as an object, reference on line 24
var taskInput = {};
// taskToggleBtn is the object
var taskToggleBtn = document.getElementById('taskToggle');
var taskRunning = false;

// timer stuff here - declare what it needs to do before func kicks off
// first timer for 25 min

var timerId = null;
// how to render the # to the DOM: queries the DOM *******
var h1 = document.querySelector('h1');

//============
// start first timer here
var startTimer = 0;
var number = 0;
var timerId = null;
// how to render the # to the DOM: queries the DOM *******
var h1 = document.querySelector('h1');


// THIS WORKS
var number = 2501;
var countDown = function() {
    number = number - 1;
    console.log(number);
    // if number is equal to 0
    // stop timer by clearing the interval call clearInterval
    if (number === 0) {         // this is COOL! stops it
      clearInterval(timerId);
    }
    // set TEXT CONTENT here ********
    h1.textContent = number;
    h1.style.display='block'; // doesn't work
    //document.querySelector('h1').style.display = "block";
    return number;

}
 countDown();      // how you invoke a func

// assign a button to start countdown in html
// THIS WORKS
var btn = document.querySelector('button');
btn.addEventListener('click', function(evt) {
    timerId = setInterval(countDown,1000);   // access global var and
                                              // accesses id
    btn.removeEventListener('click',startTimer); // how to stop
});
btn.addEventListener('click', startTimer);



// start first task
var startTask = function(event){

      if (taskRunning) {
        // stop logic
        console.log('Stop');
        taskRunning = false;


      }
        else {//start logic

        var input = document.getElementById('taskField');
        console.log(input.value);
        // when clicked this is chunk of func executed. input.value is an object
        document.getElementById('taskDisplay').innerHTML = '<p>Currently working on ' + input.value + '.</p>';
        taskToggleBtn.innerHTML = 'Take a break';

         console.log('Start');
         taskRunning = true;

        }


} // end startTask


// showMsg referenced
// the event listener assignment
taskToggleBtn.addEventListener('click',startTask);




// // function to display message when Start btn is clicked
// var showDiv = document.querySelector('#container');
// showDiv = function() {
//   document.querySelector('div');
//     div.textContent.innerHTML = "Started working on ... ";
//     return showDiv;

// }







//how to tell it in two minutes say 'something'
// setTimeout(function() {
//     console.log('back to work');
// }, 2 * 60 * 1000   // says 60 * 1000 = 1 min times 2 = 2 min
// )


