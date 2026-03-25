
// const variables
const ogHeading = "Test page for JavaScript";
const ogParagraph = "This is the original paragraph";
const newHeading = "New JavaScript test page";
const newParagraph = "This is a new paragraph";
const newButtonText = "Change the heading and paragraph";

// function to change and add text
function forWater() {
  //let variables
  let paragraphChange = document.getElementById("carrot");
  let headingChange = document.getElementById("banana");
  let buttonText = document.getElementById("apple");
  //conditional for the text to change
  if (headingChange.textContent === ogHeading) { 
    headingChange.textContent = newHeading; 
    paragraphChange.textContent = newParagraph;
    buttonText.textContent = "revert to original";
  } else {
    headingChange.textContent = ogHeading;
    paragraphChange.textContent = ogParagraph;
    buttonText.textContent = newButtonText;
  }
  //console log
    console.log("h1,button and p text get changed when the button is clicked using ids");
}
//array with strings
const bestFruits = ["banana","apple","carrot"];
bestFruits.push("cherry","peach");
console.log(bestFruits);

// loops
let text = "";
for (let i = 0; i < bestFruits.length; i++) {
  text = text + bestFruits[i] + "<br>";
}
document.getElementById("testlist").innerHTML = text;

//array with numbers and loop output in console
const age = [30,50,60,70,69]; 
for (let i=0; i < age.length; i++) {
    console.log("age " + age[i] + " goes there");
}