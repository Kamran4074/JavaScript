console.log("arrow functions in JS");

// Arrow function expression
const greet = (name) => {
    return `Hello, ${name}!`;
}
console.log(greet("Kamran"));

// If there's only one parameter, parentheses can be omitted
const farewell = name => {
    return `Goodbye, ${name}!`;
}
console.log(farewell("Ali"));

// If the function body has only one expression, curly braces and 'return' can be omitted
const add = (a, b) => a + b;
console.log(add(5, 3));

// Arrow function with rest operator
const collectNumbers = (...numbers) => numbers;

console.log(collectNumbers(1, 2, 3, 4, 5));
console.log(collectNumbers(10, 20, 30));
console.log(collectNumbers(7, 14, 21, 28, 35, 42));

// Arrow function with no parameters
const sayHello = () => "Hello, World!";
console.log(sayHello());

// Arrow function returning an object literal
(a, b) => ({ sum: a + b, product: a * b });  // Note the parentheses around the object literal
const calculate = (a, b) => ({ sum: a + b, product: a * b });
console.log(calculate(4, 5));