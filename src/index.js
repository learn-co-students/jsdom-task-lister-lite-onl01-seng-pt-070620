document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form');
  form.addEventListener('submit', function (e) { e.preventDefault();
    let ul = document.getElementById('tasks');
    let li = document.createElement('li');
    let newTask = document.getElementById('new-task-description');
    li.innerText = newTask.value;
    ul.appendChild(li);
  
  })

});
