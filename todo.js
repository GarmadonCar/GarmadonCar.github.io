var tasklist = localStorage.getItem('tasks');
if (tasklist == null) { tasklist = "085ඞHamburger Plate with Rice Bar (Kiran Special)ඞ" }

String.prototype.replaceAt = function (startIndex, endIndex, replacement) {
  return this.substring(0, startIndex) + replacement + this.substring(endIndex);
}

function saveTasks() {
  localStorage.setItem('tasks', tasklist);

  console.log("Tasks Saved... DEBUG:")
  console.log(getTasks())
}

// returns nill
// creates a new task in storage
function setTask(id, description) {
  console.log("New Task added..." + id + "ඞ" + description + "ඞ")
  tasklist += (id + "ඞ" + description + "ඞ");

  saveTasks();
}

// returns Array of all id-description tuples
function getTasks() {
  var index = 0;
  var tasks = [];

  var i = 0;
  while (index < tasklist.length) {
    tasks[i] = [];
    tasks[i][0] = tasklist.substring(index, index + 3);
    tasks[i][1] = getTask(tasks[i][0]);

    index += (5 + tasks[i][1].length);
    i++;
  }

  return tasks;
}

// returns the description of the given id
var i;
function getTask(id) {

  var index = tasklist.indexOf(id);

  if (index == -1) {
    return null;
  }

  index += 4;
  i = index;

  while (tasklist[i] != "ඞ") {
    i++
  };

  return tasklist.substring(index, i);
}

// returns a non-duplicate id that isnt already in use
var i;
function generateID() {
  var id = Math.floor((Math.random() * 999) + 1);
  var textId = id.toString();

  while (textId.length != 3) {
    textId = "0" + textId;
  }

  if (tasklist.includes(textId) || tasklist == "666") {
    return generateID();
  } else {
    return textId;
  }
}

// returns nill
// updates an already existing task. Does nothing if task doesnt exist?
var i;
function updateTask(id, description) {
  var index = tasklist.indexOf(id);

  if (index == -1) {
    return;
  }

  index += 4;
  i = index;

  while (tasklist[i] != "ඞ") i++;

  tasklist = tasklist.replaceAt(index, i, description);

  saveTasks();
}

// returns nill
// removes a task from storage
function removeTask(id) {
  var index = tasklist.indexOf(id);

  if (index == -1) {
    return;
  }

  index;
  i = index + 4;

  while (tasklist[i] != "ඞ") i++;

  tasklist = tasklist.replaceAt(index, i + 1, "");

  saveTasks();
}
