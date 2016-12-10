var button = document.querySelector('button');
var input = document.querySelector('input');
var h1 = document.querySelector('h1');


// button adds event and starts timer

var addText = function (){
  // create <p>
  var p = document.createElement('p');
  // store value from input
  var storeInput = input.value;
  p.textContent = "Currently working on..." + storeInput;

var body = document.querySelector('body');
  body.appendChild(p);

};

button.addEventListener('click', addText);


// add counter

var number = 25;
var intervalID;


var countUp = function(){
  h1.textContent = number;
  number = number - 1;
  return number;
}


// starts with button
button.addEventListener('click', function(evt){
  intervalID = setInterval(countUp, 1000);
  // remove ability to second click
  button.removeEventListener('click', button);
});










// // add counter
// var number = 25;
// var timerID = null;


// var countDown = function(){
//   number = number - 1;
//   // if number is equal to 0 clear interval
//     console.log(number);
//   if (number === 0){
//     clearInterval(timerID);
//   }
//   h1.textContent = number;
//   return number;
// }

// timerID = setInterval(countDown, 1000);


// button.addEventListener('click', function(evt){
//   intervalID = setInterval(countDown, 1000);
//   // remove ability to second click
//   button.removeEventListener('click', button);
// });
