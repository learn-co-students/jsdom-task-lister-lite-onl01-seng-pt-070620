document.addEventListener("DOMContentLoaded", () => {
  // create constant to identify the form
  const taskForm = document.querySelector("#create-task-form");

  // create constant to identify where to add tasks
  const taskList = document.querySelector("#tasks");

  taskForm.addEventListener("submit", function (e) {
    e.preventDefault(); 
    const newTask = document.querySelector("#new-task-description").value;
    taskList.innerHTML += `<li> ${newTask} </li>`;

  });
});
