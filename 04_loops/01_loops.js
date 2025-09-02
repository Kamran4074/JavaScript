// loops in javascript

// for loop
let array=[1,2,3,4,5];
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}

// while loop 
let j=0;
while(j<array.length){
    console.log(array[j]);
    j++;
}

// do while loop
let k=0;
do{
    console.log(array[k]);
    k++;
}while(k<array.length);

// for...of loop (used to iterate over iterable objects like arrays, strings, maps, sets, etc.)
let str="Hello";
for(let char of str){
    console.log(char);
}

// for...in loop (used to iterate over enumerable properties of an object)
let obj={
    name:"John",
    age:30,
    city:"New York"
};
for(let key in obj){
    console.log(key + ": " + obj[key]);
}

// forEach loop (array method, cannot be used with break or continue)
array.forEach(function(element){
    console.log(element);
});

// map 

let map=new Map();
map.set("IN" ,"India");
map.set("US" ,"United States");
map.set("UK" ,"United Kingdom");

// iterating over map
for(let [key,value] of map){
    console.log(key + ": " + value);
}

// iterating over set
let set=new Set([1,2,3,4,5]);
for(let value of set){
    console.log(value);
}



