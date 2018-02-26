//Simple Calculator Program

//Input
let num1 = Number(prompt("Enter a number:"));
let num2 = Number(prompt("Enter another number:"));
let num3 = Number(prompt("Enter yet another number:"));
console.log(num1 + " and " + num2 + " and " + num3);
//Process
let sum = (num1 + num2 + num3) / 3;

console.log("sum " + sum);
//Output
alert("The answer is: " + sum);