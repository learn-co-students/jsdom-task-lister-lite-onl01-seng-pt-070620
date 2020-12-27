function submitForm(e) {
    const newTask = document.createElement('li')
    const newTaskValue = document.getElementById('new-task-description').value
    newTask.innerText = newTaskValue
    addTask(newTask)
    e.preventDefault();
}

function addTask(newTask){
    const tasks = document.getElementById('tasks')
    tasks.appendChild(newTask)
    deleteBtn(newTask)
}
function deleteBtn(newTask) {
    const btn = document.createElement('BUTTON')
    btn.innerText = ('Delete')
    btn.setAttribute('id','delete')
    newTask.appendChild(btn)
    btn.addEventListener('click', function() {
        deleteTask(newTask);
    })
}
function deleteTask(newTask){
    newTask.remove();
}
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    form.addEventListener('submit', submitForm)
});