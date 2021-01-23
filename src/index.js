

const list = document.querySelector('#list')


const taskInput = document.querySelector('#new-task-description')


const taskForm = document.querySelector('#create-task-form') 


taskForm.addEventListener('submit', function(e) {
  e.preventDefault()
  


const taskList = document.querySelector('#tasks')
const taskItem = document.createElement('li')
taskItem.innerText = taskInput.value 

const deleteButton = document.createElement('button')
deleteButton.innerText = "Delete"


taskList.appendChild(taskItem)
taskItem.appendChild(deleteButton)




deleteButton.addEventListener('click', function(e) {
  taskItem.remove()
})

taskForm.reset()
} )

