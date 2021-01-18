const form = document.getElementById("create-task-form");
const info = document.getElementById("new-task-description");
const input = document.querySelector('input');
const todo = document.getElementById("list");


document.addEventListener("DOMContentLoaded", function() => {
  input.addEventListener('input', function(e) {
    info.textContent = e.target.value
  });
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let task = info.textContent;
    addToList(task);
    console.log(task);
  });
});

function addToList(task) {
  let list = document.getElementById("tasks")
  let li = document.createElement("li")

  li.innerHTML = task
  list.appendChild(li)

}


