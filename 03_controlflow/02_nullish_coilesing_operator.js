console.log("Nullish Coalescing Operator in JS (??)");

// Nullish Coalescing Operator (??) is used to provide a default value when the left-hand side is null or undefined

let name = null;
let defaultName = "Guest";
let finalName = name ?? defaultName; // finalName will be "Guest" because name is null
console.log(finalName);

name = undefined;
finalName = name ?? defaultName; // finalName will be "Guest" because name is undefined
console.log(finalName);

name = "Kamran";
finalName =null ?? name ?? defaultName; // finalName will be "Kamran" because name is not null or undefined
console.log(finalName);

// Example with function
function greet(userName) {
    userName = userName ?? "Guest";
    return `Hello, ${userName}!`;
}

console.log(greet(null)); // Output: Hello, Guest!
console.log(greet(undefined)); // Output: Hello, Guest!
console.log(greet("Kamran")); // Output: Hello, Kamran! 
console.log(greet("")); // Output: Hello, ! (empty string is not null or undefined)