// Core features

// [x] As a user, I should be able to type a task into the input field.
// [x] As a user, I should be able to click some form of a submit button.
// [x] As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

// Extra challenges 

// An additional input field (e.g. user, duration, date due)
// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
//  As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
// A delete function that will remove tasks from your list


document.addEventListener("DOMContentLoaded", () => {
  // grab all necessary DOM elements
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");

  // grab where new tasks will be sent to on the DOM
  const newTaskShow = document.getElementById("tasks");

  // attach event listener
  // newTaskForm.addEventListener('submit', function(event) { 
  //   event.preventDefault();
  //   const newTaskDescription = document.getElementById("new-task-description");
  //   const newTask = document.createElement("li");
  //   newTask.innerText = newTaskDescription.value;
  //   document.getElementById("tasks").appendChild(newTask);
  //   event.target.reset()
  // });

  // refactor 
  newTaskForm.addEventListener("submit", createNewTask);
  function createNewTask(event) {
    event.preventDefault();
    const newTaskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;
    document.getElementById("tasks").appendChild(newTask);
    event.target.reset()
  }

  // creatre extra input fields
  function createExtraInput() {
    const extraInput = document.createElement("INPUT");
    extraInput.setAttribute("type", "text");
    extraInput.setAttribute("value", "Yoo bboy dragon!");
    document.body.appendChild(extraInput);
  }


});
