// Save list
const saveItems = function () {
    localStorage.setItem('items', document.querySelector("#items-list").innerHTML);
}

var consumeBtn = document.getElementsByClassName("consume");
var i;

// Add consume button
function addConsumeBtn (element) {
  var consume = document.createElement("SPAN");
  var txt = document.createTextNode("Consume");
  consume.className = "consume";
  consume.appendChild(txt);
  element.appendChild(consume);

  // Make consume button delete Item
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

// Add yell button
function addYellBtn (element) {
  var yell = document.createElement("SPAN");
  var txt = document.createTextNode("Yell");
  yell.className = "yell";
  yell.appendChild(txt);
  li.appendChild(yell);

  for (i = 0; i < yellBtn.length; i++) {
    consume[i].onclick = function(){
      var div = this.parentElement;
      // Animation

      // Make yell button change task name
      var inputValue = document.getElementById("input").value;
      div.innerHTML = inputValue;
      addConsumeBtn(div);
      addYellBtn(div);
    }
  }
}

// Retrieve task list
function getTasks () {
  var tasklist = localStorage.getItem('items');
  document.getElementById("#items-list").innerHTML = tasklist;
}

// Add new task to list
function setTask (inputId) {
  var task = localStorage.getItem("inputId");

  var li = document.createElement("li");
  var t = document.createTextNode(task);

  li.appendChild(t);
  document.getElementById("todoList").appendChild(li);

  addConsumeBtn(li);
  addYellBtn(li);

  saveItems();
}

// Create a new ID for menu task
function newId (task) {
  var id = Math.floor((Math.random() * 999) + 1);

  localStorage.setItem(id, inputValue);

  document.getElementById("input").value = "";
}
