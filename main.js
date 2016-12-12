console.log("herro");

var input = document.querySelector("input");
var button = document.querySelector("button");
var section = document.querySelector("section");

input.focus();

// ==========================================
//  ADDS STATUS BAR AND TIMER TO PAGE
// ==========================================
var countdown;

var addStatus = function(event) {
  console.log("button clicked");

  if (input.value !== "") {

    // CREATE THE SPAN
    var task = document.createElement("span");
    task.setAttribute("class", "task");

    // TAKE THE INPUT VALUE AND UPDATE SPAN TEXT
    task.textContent = input.value;

    // CREATE THE STATUS BAR
    var status = document.createElement("p");
    status.setAttribute("class", "status");

    // MAKE STATUS TEXT CONTENT = "Currently working on... "
    status.textContent = "Currently working on... ";

    // APPEND THE SPAN TO THE STATUS BAR
    status.appendChild(task);

    // APPEND THE STATUS TO THE SECTION
    section.appendChild(status);

    // CLEAR THE INPUT FIELD
    input.value = "";
    input.focus();
  }

}
// **EVENT LISTENER** TRIGGER WHEN SUBMIT BUTTON IS PUSHED
button.addEventListener("click", addStatus);


var addTimer = function(event) {
// CREATE THE TIMER DIV
    var timer = document.createElement("div");
    timer.setAttribute("class", "timer");

    var countdown = timer;
    // CHANGE TEXT CONTENT OF TIMER DIV


    // APPEND THE TIMER DIV TO THE SECTION
    section.appendChild(timer);

    // RUN THE TIMER


}






