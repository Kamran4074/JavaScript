console.log("Dates in JS");
// Date Object
let now = new Date();
console.log(now.toString()); // current date and time
console.log(now.toDateString()); // current date
console.log(now.toTimeString()); // current time
console.log(now.toUTCString()); // current date and time in UTC
console.log(now.toLocaleString()); // current date and time in local format
console.log(now.toLocaleDateString()); // current date in local format


// let specificDate = new Date("2023-01-01");
// console.log(specificDate.toISOString()); // specific date