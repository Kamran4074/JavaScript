console.log("Objects in JS");

// Object creation
let obj1 = new Object(); // Using Object constructor
let obj2 = {};          // Using object literal
console.log(obj1, obj2);
console.log(typeof obj1, typeof obj2); // Both are 'object'

// Object with initial properties   
let person = { name: "Alice", age: 30, city: "New York" };
console.log(person);
console.log(person.name); // Accessing property
console.log(person["age"]); // Accessing property using bracket notation
console.log(person.country); // Accessing non-existent property

// Modifying object properties
person.age = 31; // Updating existing property
console.log(person);    
person.country = "USA"; // Adding new property
console.log(person);    
delete person.city; // Deleting property
console.log(person);

console.log(Object.keys(person)); // Getting all property names
console.log(Object.values(person)); // Getting all property values  
console.log(Object.entries(person)); // Getting all key-value pairs

// Object methods
console.log("name" in person); // true if property exists
console.log(person.hasOwnProperty("age")); // true if property exists

// Merging objects
const additionalInfo = { profession: "Engineer", married: false };
const fullProfile = Object.assign({}, person, additionalInfo); // Merging objects
const fullProfileSpread = { ...person, ...additionalInfo }; // Merging using spread operator
console.log(fullProfile);
console.log(fullProfileSpread);

// Nested objects
let employee = {
    id: 101,
    details: {
        name: "Bob",
        position: "Developer",
        skills: ["JavaScript", "React"]
    }
};
console.log(employee);
console.log(employee.details.name);
console.log(employee.details.skills[0]);

// Difference between arrays and objects
// Arrays are ordered collections accessed by index
// Objects are collections of key-value pairs accessed by keys

let colors = ["Red", "Green", "Blue"];
console.log(colors[0]); // Accessing first element
let citrus = { fruit1: "orange", fruit2: "lemon" };


// Iterating over object properties
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}
console.log(citrus); // Modified array