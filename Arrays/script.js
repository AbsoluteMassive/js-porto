const array = [];

function pushItemEnd() {
  const input = document.getElementById("arrayinput").value.trim();//trim cuts the space caused by spacebar
  if(input === "") {
    return;
  } else {
  array.push(input);
  document.getElementById("arrayinput").value = "";
  document.querySelector("#arrayinput").setAttribute("placeholder","");
  viewItem();
  }
}

function pushItemFirst() {
  const input = document.getElementById("arrayinput").value.trim();//trim cuts the space caused by spacebar
  if(input === "") {
    return;
  } else {
  array.unshift(input);
  document.getElementById("arrayinput").value = "";
  document.querySelector("#arrayinput").setAttribute("placeholder","");
  viewItem();
  }
}

function removeFirst() {
 array.shift(); 
 viewItem(); 
}
function removeLast() {
 array.pop(); 
 viewItem(); 
}
// remove btn function
function removeItem(index) {
 array.splice(index, 1); 
 viewItem(); 
}

const inputEnter = document.getElementById("arrayinput");
inputEnter.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    pushItemEnd();
  }
}); 
// giving the body an event listener to trigger a function to remove the last item in the array
const inputBackspace = document.getElementById("arrayinput");
document.body.addEventListener("keydown", function(e) {
    if(e.key === "Backspace" && inputBackspace.value === "") {
      removeLast();
    }
});
// creating elements and appending them
function viewItem() {
  let ul = document.querySelector("#arrayOutput");
  ul.innerHTML = "";
    
  for (let i = 0; i < array.length; i++) {
    const text = array[i];
    const li = document.createElement("li");
    li.textContent = i + 1 + " " + text;
   // remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "x";
    removeBtn.style.backgroundColor = "red"
    removeBtn.style.padding = "0,25rem";
  
    removeBtn.addEventListener("click", () => removeItem(i));
    //removeBtn.onclick = () => removeItem(i);
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
  
    li.append(checkBox, removeBtn);
    ul.appendChild(li);
  }
}     