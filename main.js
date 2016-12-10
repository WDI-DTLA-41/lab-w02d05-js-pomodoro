var button = document.querySelector('button');
var number = 1500000
var timerId = null;
var timeStamp = null;

var getTask = function(evt){
  var inputBox = document.querySelector('input');
  var task = inputBox.value
  document.querySelector('div').innerHTML = 'Currently working on ' + task;
}

var convertTime = function(number){
  var milliseconds = number

  var totalSeconds = milliseconds/1000;

  var minutes = totalSeconds/60;
  minutes = Math.round(minutes);

  var seconds = totalSeconds - minutes * 60;
  seconds = Math.round(seconds);

  timeStamp = minutes + ':' + seconds;

}



var countDown = function(){
  number = number - 1;
  if (number === 0) {
    clearInterval(timerId);
  }
  return number;
  var time = convertTime(number);
  return time;
  document.querySelector('h2').textContent = number;
}

var startTimer = function(evt){
  console.log('startTimer')
  timerId = setInterval(countDown, 1000)
}



button.addEventListener('click', startTimer);
button.addEventListener('click', getTask);
