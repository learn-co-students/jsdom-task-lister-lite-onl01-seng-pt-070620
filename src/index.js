document.addEventListener("DOMContentLoaded", () => {

});

let newForm = document.getElementById('create-task-form');
newForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let ul = document.getElementById('tasks');
  let li = document.createElement('li');
  let newTask = document.getElementById('new-task-description');
  li.innerText = newTask.value;
  ul.appendChild(li);
})

