document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    const task = document.querySelector("#new-task-description").value;
    let listItem  = document.createElement("LI"); 
    listItem.textContent = task;     
    document.querySelector("#tasks").appendChild(listItem); 
    event.preventDefault();
}, false);
});
