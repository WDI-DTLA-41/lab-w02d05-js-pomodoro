var button = document.querySelector('button');
var number = 1500000;
var timerId = null;
var timeStamp = null;

var getTask = function(evt){
  var inputBox = document.querySelector('input');
  var task = inputBox.value
  document.querySelector('div').innerHTML = 'Currently working on ' + task;
  inputBox.value = '';
}

var convertTime = function(number){
  return new Date(number).toISOString().slice(14,19);
}

var countDown = function(){
  number = number - 1000;
  console.log(number);
  if (number === 0) {
    clearInterval(timerId);
    return;
  }

  var time = convertTime(number);
  document.querySelector('h2').textContent = time;
  console.log(time);
}

var startTimer = function(evt){
  timerId = setInterval(function(){countDown()}, 1000);
  button.removeEventListener('click', startTimer);
}



button.addEventListener('click', startTimer);
button.addEventListener('click', getTask);
