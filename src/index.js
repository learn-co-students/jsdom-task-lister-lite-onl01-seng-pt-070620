document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e){
    e.preventDefault();
    const toDo = e.target['new-task-description'].value
    const toDoLi = document.createElement('li')
    toDoLi.textContent = toDo
    const button = document.createElement("button")
    button.textContent = 'x'
    toDoLi.append(button)
    button.addEventListener("click", function(e){
        const toDoLi = e.target.parentElement
        toDoLi.remove()
    });
    const tasks = document.getElementById('tasks')
    tasks.append(toDoLi)
  });
});
