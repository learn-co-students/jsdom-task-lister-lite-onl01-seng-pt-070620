document.addEventListener("DOMContentLoaded", () => {

  const input = document.querySelector('#new-task-description');
  
  document.addEventListener('submit', function(event) { 
    document.getElementById("tasks").innerHTML += input;
    event.preventDefault();
  }, false);

});
