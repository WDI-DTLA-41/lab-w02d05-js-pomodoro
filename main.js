console.log('hi');

var mainTimer = document.querySelector('.displayed-time');
var currentWork = document.querySelector('.current-work');
var input = document.querySelector('input[name="input-value"]');
var workingStuff = document.querySelector('.working-stuff');
var start = document.querySelector('button[name="start"]');
var form = document.querySelector('form');
var inputArea = document.querySelector('.input-area');
var bodyWrapper = document.querySelector('.body-wrapper');
var contentWrapper = document.querySelector('.content-wrapper');
var hiddenBreak = document.querySelector('.quick-break');
var h2 = document.querySelector('.question');
var myAudio = new Audio('expired-timer.mp3');

var inputValue = null;
var heldInput = null;

var minutesNumber = 24; //24
var secondsNumber = 59;  //59

var intervalMinId;
var intervalSecId;
var intervalDisId;

var breakMinutes = 4;
var breakSeconds = 59;

var breakMinId;
var breakSecId;
var breakDisId;

var audioTimeoutId;

input.focus();

//start timer
var handleClick = function(evt) {
  if (input.value === '' /* || +input.value !== NaN*/){
    input.classList.add('error');
    input.placeholder = "Enter a task, scrub...";
  } else {
      setInt();
      displayTimer();
      start.removeEventListener('click', handleClick);
      input.classList.remove('error');
      getNClear();
      showContentTimer();
      hideInputArea();
    }
}

start.addEventListener('click', handleClick);

var setInt = function(){
  intervalMinId = setInterval(minCount, 60*1000 / 120);  // shortened for testing
  intervalSecId = setInterval(secCount, 1000 / 120);
  intervalDisId = setInterval(displayTimer, 1000 / 120);
}

var getNClear = function(){
  heldInput = input.value;
  toTitleCase(input.value);
  workingStuff.innerHTML = 'Currrently working on: <span class="current-work">' + input.value+ '</span>';
  // currentWork.textContent = input.value;
  input.value = '';
}

var displayTimer = function() {
  // minutesNumber = minutesNumber < 10 ? "0" + minutesNumber : minutesNumber;
  // secondsNumber = secondsNumber < 10 ? "0" + secondsNumber : secondsNumber;
  mainTimer.textContent = minutesNumber + 'm' + ' : ' + secondsNumber + 's';
}

var minCount = function(event){
  minutesNumber = minutesNumber - 1;
  // console.log(minutesNumber);
  if (minutesNumber === -1){
    clearInterval(intervalSecId);
    clearInterval(intervalMinId);
    clearInterval(intervalDisId);
    minutesNumber = 25;
    secondsNumber = 0;
    finishedTwentyFive();
    breakInt();
    myAudio.play();
    stopAudioDelay();
    // showInputArea();
    showBreak();
    start.addEventListener('click', handleClick);
  }
  return minutesNumber
}

var secCount = function(event){
  secondsNumber = secondsNumber - 1;
  // console.log(secondNumber);
  if (secondsNumber === -1) {
    secondsNumber = 59;

  }
  return secondsNumber;
}

var finishedTwentyFive = function(){
  workingStuff.textContent = 'Completed: ' + heldInput;
}

//stop enter default action on input
form.addEventListener('keypress', function(event){
  if (event.keyCode ===13){
    event.preventDefault();
  };
})

//hide input div

var hideInputArea = function() {
  inputArea.classList.add('hidden')
  bodyWrapper.style.top = '-195px';

};

var showInputArea = function() {
  inputArea.classList.remove('hidden')
  bodyWrapper.style.top = '100px';
};

var showContentTimer = function(){
  contentWrapper.style.visibility = 'visible';
}

var hideContentTimer = function(){
  contentWrapper.style.visibility = 'hidden';
}

//break timer

var breakMin = function(event){
  breakMinutes = breakMinutes - 1;
  if (breakMinutes === -1) {
    clearInterval(breakMinId);
    clearInterval(breakSecId);
    clearInterval(breakDisId);
    breakMinutes = 4;
    breakSeconds = 59;
    mainTimer.textContent = '25m : 00s'
    showInputArea();
    h2.textContent = 'What would you like to work on for your next 25 minute segment?';
    // workingStuff.innerHTML = 'Currently working on: <span class="current-work"></span>';
    hideBreak();
    hideContentTimer();
    heldInput = '';
  }
  return breakMinutes;
}

var breakSec = function(event){
  breakSeconds = breakSeconds - 1;
  if (breakSeconds === -1) {
    breakSeconds = 59;
  }
  return breakSeconds;
}

var displayBreakTimer = function() {
  mainTimer.textContent = breakMinutes + 'm' + ' : ' + breakSeconds + 's';
}

var breakInt = function(){
  breakMinId = setInterval(breakMin, 60*1000/50);  // shortened for testing
  breakSecId = setInterval(breakSec, 1000/50);
  breakDisId = setInterval(displayBreakTimer, 1000/50);
}

//show break
var showBreak = function() {
  hiddenBreak.style.visibility = 'visible';
  hiddenBreak.style.top = '100px';
  contentWrapper.style.marginTop = '120px';
}

var hideBreak = function() {
  hiddenBreak.style.visibility = 'hidden';
  hiddenBreak.style.top = '0px';
}

//capitalize value
var toTitleCase = function(str) {
    input.value = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    heldInput = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

//audio loop

myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

//delays audio stop for loop to run
var stopAudioDelay = function() {
  audioTimeoutId = window.setTimeout(stopAudioLoop, 10*1000);
}

// funciton that stops audio
function stopAudioLoop() {
  myAudio.pause();
}


