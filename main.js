
console.log('see me?');

var input = document.querySelector('#task');
var timerId = null;
var number;


// query the DOM to have h1 replaced by timer
var h1 = document.querySelector('h1');
// used to show message
var showMsg = document.querySelector('#showMsg');
// used to show timer displayed
var number = 0;
var startBtn = document.querySelector('#start');
var number = 5;
var countDown = function() {
    number = number - 1;
    console.log(number);
    // if number equals zero stop
    // if (number === 0) {
    //   clearInterval(timerId);
    // }
    // // set h1 to hold the timer
    // h1.textContent = number;
    // return number;

}

// this returns an ID we can clear with clearTimeout
// this WORKS
setTimeout(function() {
    console.log('surprise');

},2000);

//how to tell it in two minutes say 'something'
setTimeout(function() {
    console.log('back to work');
}, 2 * 60 * 1000   // says 60 * 1000 = 1 min times 2 = 2 min
)


