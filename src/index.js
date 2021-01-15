document.addEventListener("DOMContentLoaded", () => {
  const TaskForm = document.getElementById("create-task-form");
  TaskForm.addEventListener("submit", createTask);
});

const createTask = event => {
  event.preventDefault();
  const TaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = TaskDescription.value;
  appendNewTask(newTask);
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};