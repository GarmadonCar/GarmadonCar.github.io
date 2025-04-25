// Save list
const saveItems = function () {
    localStorage.setItem('items', document.querySelector("#items-list").innerHTML);
}

var consumeBtn = document.getElementsByClassName("consume");
var i;

function addConsumeBtn(element) {
  var consume = document.createElement("SPAN");
  var txt = document.createTextNode("Consume");
  consume.className = "consume";
  consume.appendChild(txt);
  element.appendChild(consume);

  for (i = 0; i < consumeBtn.length; i++) {
    consume[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";

      // Animation
    }
  }
}

var yellBtn = document.getElementsByClassName("yell");
var i;

function addYellBtn(element) {
  var yell = document.createElement("SPAN");
  var txt = document.createTextNode("Yell");
  yell.className = "yell";
  yell.appendChild(txt);
  li.appendChild(yell);

  for (i = 0; i < yellBtn.length; i++) {
    consume[i].onclick = function(){
      var div = this.parentElement;
      // Animation

      var inputValue = document.getElementById("input").value;
      div.innerHTML = inputValue;
      
    }
  }
}

// Retrieve task list
function getTask() {
  var tasklist = localStorage.getItem('items');
  document.getElementById("p1").innerHTML = tasklist;
}

// Add new task to list
function setTask() {
  var inputId = document.getElementById("myInput").value;
  var task = localStorage.getItem("inputId");

  var li = document.createElement("li");
  var t = document.createTextNode(task);

  li.appendChild(t);
  document.getElementById("todoList").appendChild(li);

  // Add consume button
  addConsumeBtn(li);

  // Add yell button
  addYellBtn(li);

  // Make consume button delete Item





  saveItems();
}

// Create a new ID for menu task
function newId() {
  var inputValue = document.getElementById("input").value;
  var id = Math.floor((Math.random() * 999) + 1);

  localStorage.setItem(id, inputValue);

  document.getElementById("input").value = "";
}

// Display inputs on tablet
function inputId(number) {
  display = document.getElementById("input");
  display += number;

  if (text.length == 3) {

  }
}
