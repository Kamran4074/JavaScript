console.log("IIFE in JS (Immediately Invoked Function Expression)");

// IIFE (Immediately Invoked Function Expression)
(function(name){
    return `Hellow,${name}!`;
})()  // Note the parentheses around the function expression

// IIFE with parameter
(function(name){
    return `Hellow,${name}!`;
})("Kamran")  // Note the parentheses around the function expression    


// IIFE with multiple parameters
(function(name,age){
    return `Hellow,${name}! You are ${age} years old.`;
})("Kamran",30)  // Note the parentheses around the function expression

// IIFE with return value
const message = (function(name){
    return `Hellow,${name}!`;
})("Kamran");
console.log(message);

// 2 IIFE functions 
const sum = (function(a,b){
    return a+b;
})(5,10); // Note if we are writing 2 IIFE functions then we have to put semicolon at the end of first IIFE function

(function(){
    console.log("This is an IIFE function without parameters");
})()
console.log(sum);

// IIFE with arrow function
const multiply = ((a,b) => a*b)(4,5); // Note the parentheses around the arrow function expression
console.log(multiply);