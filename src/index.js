const form = document.getElementById("create-task-form");
const info = document.getElementById("new-task-description");
const input = document.querySelector('input');

input.addEventListener('input', function(e) {
  info.textContent = e.target.value
});

form.addEventListener("submit", function(event) {
  console.log(info)
  event.preventDefault();
  let task = info.textContent
  console.log(task)
}
);

document.addEventListener("DOMContentLoaded", function() => {
  // your code here
  

  

  


});



let list = document.getElementById("list")
let l = document.createElement("ul")

const input = document.querySelector('input')


