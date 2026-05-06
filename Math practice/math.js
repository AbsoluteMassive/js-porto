
/* anonymous function
let samplesValues = [4.2, 5.1, 3.8, 4.7, 5.3];
let sum = 0;
for (let i = 0; i < samplesValues.length; i++){
sum += samplesValues[i];
}
let average = sum / samplesValues.length;
let rounded = Math.round(average);
console.log(`the average is ${average} while the rounded number is ${rounded}`);
*/
//using named function
let xValues = [4.2, 5.1, 3.8, 4.7, 5.3];

function xMean(xValues) {
let sum = 0;
for (let i = 0; i < xValues.length; i++) {
sum += xValues[i];
 }
return sum / xValues.length;
}

let average = xMean(xValues);
let rounded = Math.round(average);
//console.log(average);
console.log(`The average is ${average}.
Rounded number is ${rounded}`+ ".");