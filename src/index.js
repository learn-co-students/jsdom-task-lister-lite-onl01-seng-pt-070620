document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newTask = document.querySelector("#new-task-description").value;

    taskList.innerHTML += `<li>${newTask}</li>`;

  });

});
