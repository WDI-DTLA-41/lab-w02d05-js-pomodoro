var button = document.querySelector('button');
var input = document.querySelector('input');
var h1 = document.querySelector('h1');



var insertText = function (){
var p = document.createElement('p');

var inputValue = input.value;
p.textContent = "Currently working on..." + inputValue;

 var body = document.querySelector('body');
   body.appendChild(p);

 };

 button.addEventListener('click', insertText);


 // counter

 var number = 25;
 var intervalID;


 var countUp = function(){
   h1.textContent = number;
   number = number - 1;
   return number;
 }


 button.addEventListener('click', function(evt){
   intervalID = setInterval(countUp, 1000);
   // remove second click
   button.removeEventListener('click', button);
 });
