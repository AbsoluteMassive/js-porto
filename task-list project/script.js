// array to contain the user tasks
const tasks = [];
// add tasks function
function addTask() {
  const input = document.getElementById("taskinput").value.trim();//trim cuts the space caused by spacebar
  if(input === "") {
    return;
  } else {
  tasks.push(input);
  document.getElementById("taskinput").value = "";
  document.querySelector("#taskinput").setAttribute("placeholder","");
  viewTasks();
  }
}
const inputEnter = document.getElementById('taskinput');
inputEnter.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
   // event.preventDefault();
    addTask();
  }
})

// remove btn function
function removeTask(index) {
 tasks.splice(index, 1); 
 viewTasks(); 

}

// creating elements and appending them
function viewTasks() {
  let ul = document.querySelector("#taskOutput");
  ul.innerHTML = "";
    
  for (let i = 0; i < tasks.length; i++) {
    const text = tasks[i];
    const li = document.createElement("li");
    li.textContent = text;
   //button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "x";
    removeBtn.style.backgroundColor = "red"

    removeBtn.addEventListener("click", () => removeTask(i));
    //removeBtn.onclick = () => removeTask(i);
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
  
    li.append(checkBox, removeBtn);
    ul.appendChild(li);
  }
  
}      
