//locating the button by getElementById and storing it
const btn = document.getElementById("btnLightToDark"); 
// function to toggle between dark and light
function changeTheme() {
    document.body.classList.toggle("dark-mode");
    //conditional thatchanges the text content of the button
   if (document.body.classList.contains('dark-mode')) {
    btn.textContent = 'Light Mode';
  } else {
    btn.textContent = 'Dark Mode';
  }
};
// adds event to button to trigger the function on click
btn.addEventListener("click", changeTheme);