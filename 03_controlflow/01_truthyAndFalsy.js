console.log("Truthy and Falsy values in JS");

// Falsy values in JS
// 1. false
// 2. 0
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN (Not a Number)

// Everything else is truthy value in JS

// Example of falsy values  
if(false){
    console.log("This is a truthy value");
}
else{
    console.log("This is a falsy value");
}

//truthy value

// 1. "0" (non-empty string)
// 2. " " (space string)
// 3. [] (empty array)
// 4. {} (empty object)
// 5. function(){} (empty function)
// 6. "false" (string with value "false")

//checking if array is empty or not
const arr = [];
if(arr.length===0){
    console.log("Array is empty");
}

//checking if object is empty or not
const obj = {};
if(Object.keys(obj).length===0){
    console.log("Object is empty");
}