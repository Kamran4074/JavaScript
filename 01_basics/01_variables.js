// taking informatin from the user for regestrarion
const accountId = 123456;               // constant variable not to be changed
let accountName = "John Doe";           // variable that can be changed
var accountEmail = "john123@gmail.com"; // variable that can be changed

// global variable (not recommended to use) it identified by the absence of var, let or const keywords  
accountcity = "New York";          // variable that can be changed


// accountId = 654321; // Error: Assignment to constant variable.
accountName = "Jane Smith"; // Valid    
accountEmail = "john0987@gmail.com"; // Valid
accountcity = "Los Angeles"; // Valid

// console.log(accountId);
// console.log(accountName);   
// console.log(accountEmail);
// console.log(accountcity); 

console.table({accountId, accountName, accountEmail, accountcity}); // to print in table format