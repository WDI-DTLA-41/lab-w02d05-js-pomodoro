
console.log('see me?');

// document.body.addEventListener('click', function(info){

//       console.log('you clicked me', info);
//       console.log(info.target);
//       console.log(info.currentTarget);

// });




var input = document.querySelector('input');
function showTask() {
    var x = document.getElementById("addTask").value;
    document.getElementById("showTask").innerHTML = x;
    return showTask();
}



var btn = document.querySelector('button');
btn.addEventlistener('click',showInput);
btn = function() {
  return showTask;
}







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

// // function to display message when Start btn is clicked
// var showDiv = document.querySelector('#showDiv');
// showDiv = function() {
//     div.textContent = "Started working on ... ";
//     return showDiv;

// }






// this returns an ID we can clear with clearTimeout
// this WORKS
// setTimeout(function() {
//     console.log('surprise');

// },2000);

// //how to tell it in two minutes say 'something'
// setTimeout(function() {
//     console.log('back to work');
// }, 2 * 60 * 1000   // says 60 * 1000 = 1 min times 2 = 2 min
// )


