
console.log('see me?');



// declaring the variable first, reference on line 24
var taskInput = {};
// taskToggleBtn is the object
var taskToggleBtn = document.getElementById('taskToggle');
var taskRunning = false;
// timer stuff here - declare what it needs to do before func kicks off




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







//



// <p id="showMsg" class="message"> <span id="showTask"></span></p>



// function showTask() {
//     var x = document.getElementById("#addTask").value;
//     console.log(input.value);
//     // document.getElementById("showTask").innerHTML = x;
//     // return showTask();
// }



// var btn = document.querySelector('button');
// btn.addEventlistener('click',showInput);
// btn = function() {
//   return showTask;
// }


// set up first timer

// this returns an ID we can clear with clearTimeout

// setTimeout(function() {
//     console.log('surprise');

// },2000);




// show what was input on screen
//var displayTask = document.querySelector('input');
// displayTask = function(evt) {
//     //input.addEventlistener.

// }

// // // 2 - write function that takes an event
// // // 3 - if you want to do something to 'what' you clicked on use Event.target
// var displayInput = function(event) {
// //  // give the function a parm for the event object.
// //  // 4 - if you wnt to do something to what you clicked on use event.target
//  console.log(event.target, event.target.value, event.keyCode)
// // // 5- pick event string you want to trigger it with
// // // 6 - add event listener to queried node to queried node
// // // 7 - give it the event string and the callback function
// input.addEventListener(keypress, handleKeyPress);

//     var input = document.querySelector('input');
//     var handleKeyPress = function(event) {
//       console.log(event.target, event.target.value, event.keyCode)
//     }
//     input.addEventListener('keypress', handleKeyPress);
// }



// var handleKeyPress = function(event) {
//     console.log(event.target, event.target.value,event.KeyCode)

// }




// query the DOM to have h1 replaced by timer
// var h1 = document.querySelector('h1');
// // used to show message

// // used to show timer displayed
// var number = 0;

// var number = 5;
// var countDown = function() {
//     number = number - 1;
//     console.log(number);
//     // if number equals zero stop
//     // if (number === 0) {
//     //   clearInterval(timerId);
//     // }
//     // // set h1 to hold the timer
//     // h1.textContent = number;
//     // return number;

// }
// put event listener on Start button
// var btn = document.querySelector('button');
// btn.addEventListener('click',function(evt) {
//     displayMsg.querySelector('#showMsg').style.display = "block";


// })

// function to display message when Start btn is clicked
var showDiv = document.querySelector('#container');
showDiv = function() {
  document.querySelector('div');
    div.textContent.innerHTML = "Started working on ... ";
    return showDiv;

}







//how to tell it in two minutes say 'something'
setTimeout(function() {
    console.log('back to work');
}, 2 * 60 * 1000   // says 60 * 1000 = 1 min times 2 = 2 min
)


