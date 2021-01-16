// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

// first i need to grab the form and the input
const taskForm = document.getElementById("create-task-form");
// console.log(taskForm);
const tasks = document.getElementById("tasks")
// console.log(taskDescription);
// add event listener to my form

taskForm.addEventListener("submit", function(event){
  event.preventDefault();
  //stop form from trying to submit
  const newTaskDescription = document.getElementById("new-task-description").value;
  // const newTask = document.createElement("li");
  // newTask.innerText = newTaskDescription.value;
  // tasks.appendChild(newTask);
   

  // replace line 16 through 19 with the following code
  tasks.innerHTML += `<li> ${newTaskDescription}
  <button data-action="delete">x</button></li>`
  event.target.reset();

  tasks.addEventListener("click", function(event){
    if (event.target.dataset.action === "delete") {
      event.target.parentElement.remove();
    }
  })

});