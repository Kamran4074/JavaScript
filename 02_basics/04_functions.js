console.log("functions in JS");

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Function expression
const farewell = function(name) {
    return `Goodbye, ${name}!`;
}
console.log(farewell("Bob"));

function add(...num1){ // rest operator will gather all arguments into an array
    return num1;
}
console.log(add(1,2,3,4,5));