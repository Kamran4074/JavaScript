console.log("destructuring in JS");

// Object creation
let course={
    courseName:"JavaScript",
    duration:"3 months",
    level:"beginner",
    instructor:"John Doe"
};
console.log(course);

// Destructuring assignment

// let {courseName}=course;
// console.log(courseName);                           // Accessing single property

let {courseName, duration, level, instructor}=course; // Accessing multiple properties
console.log(courseName);
console.log(duration);

// json object 
// {
//     "name": "Alice",
//     "age": 30,
//     "city": "New York"
// }