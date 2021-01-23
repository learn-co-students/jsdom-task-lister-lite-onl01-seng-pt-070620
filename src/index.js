document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Handle the form submit event (when submit button is clicked)
  //  - prevent default form action
  //  - grab the text from the input box
  //  - create a li element with the text
  //  - add li to the ul
  
  const form = document.getElementById("create-task-form");
  const todoInput = document.getElementById("new-task-description");
  const todoList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    let todoText = todoInput.value;
    let li = document.createElement("li");
    li.innerText = todoText;
    todoList.appendChild(li);
  });
});
