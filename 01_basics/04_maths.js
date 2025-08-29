console.log("Maths in JS");
// Math Object
let x = 10;
let y = 3;  
// console.log("x + y = " + (x + y)); // addition
// console.log("x - y = " + (x - y)); // subtraction
// console.log("x * y = " + (x * y)); // multiplication
// console.log("x / y = " + (x / y)); // division
// console.log("x % y = " + (x % y)); // modulus
// console.log("x ** y = " + (x ** y)); // exponentiation      
// console.log("Math.PI = " + Math.PI); // PI
// console.log("Math.E = " + Math.E); // Euler's number
// console.log("Math.sqrt(16) = " + Math.sqrt(16)); // square root
// console.log("Math.pow(2, 3) = " + Math.pow(2, 3)); // power
// console.log("Math.abs(-5) = " + Math.abs(-5)); // absolute value
// console.log("Math.round(4.5) = " + Math.round(4.5)); // rounding
// console.log("Math.ceil(4.2) = " + Math.ceil(4.2)); // ceiling           
// console.log("Math.floor(4.7) = " + Math.floor(4.7)); // floor
// console.log("Math.max(1, 2, 3, 4, 5) = " + Math.max(1, 2, 3, 4, 5)); // max value
// console.log("Math.min(1, 2, 3, 4, 5) = " + Math.min(1, 2, 3, 4, 5)); // min value


console.log(Math.random()); // random number between 0 and 1
console.log((Math.random() * 10) + 1); // random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // random integer between 1 and 10

const min=10;
const max=60;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// random integer between min and max (inclusive)
