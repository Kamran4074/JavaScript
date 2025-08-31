console.log("Arrays in JS");
// Array creation
let arr1 = new Array();
let arr2 = [];
console.log(arr1, arr2);
console.log(arr1.length, arr2.length);

// Array with initial values
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
fruits.push("Date"); // Adding an element
console.log(fruits.length); 
console.log(fruits[0]); // Accessing first element
console.log(fruits[fruits.length - 1]); // Accessing last element
console.log(fruits[3]); // Accessing out-of-bounds index

// Modifying array elements
fruits[1] = "Blueberry";
console.log(fruits);    
fruits[3] = "Date"; // Adding new element
console.log(fruits);    
console.log(fruits.length);

// Array methods
fruits.push("Elderberry"); // Adds element at the end
console.log(fruits);
fruits.pop(); // Removes last element
console.log(fruits);    
fruits.shift(); // Removes first element
console.log(fruits);    
fruits.unshift("Apricot"); // Adds element at the start
console.log(fruits);    
console.log(fruits.indexOf("Banana")); // -1 if not found

const moreFruits = ["Fig", "Grape"];
const allFruits = fruits.concat(moreFruits); // Merging arrays
console.log(allFruits);

//slicing and splicing difference
let citrus = ["Orange", "Lemon", "Lime", "Grapefruit"];
let citrusSlice = citrus.slice(1, 3); // Extracts elements from index 1 to 2
console.log(citrusSlice); // ["Lemon", "Lime"]
console.log(citrus); // Original array remains unchanged

let citrusSplice = citrus.splice(1, 2, "Mandarin", "Tangerine"); 
// Removes 2 elements from index 1 and adds new elements


