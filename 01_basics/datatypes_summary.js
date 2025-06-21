// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  // the  value of this variable is undefined , we can also manually define the value like below
// let userEmail = undefined

// Reference (Non-primitive)

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);


const bigNumber = 456554656565n

// Array, Objects, Functions

const names = ["Sayan", "Disha", "Suman"];   // Array

let myObj = {  //Object , we can write any type of datatype here like string , number, function, boolean, array, another object
    name: "Sayan",
    age: 21
}


const myFunction = function(){
    console.log("Hello");
    
}

console.log(typeof(userEmail));   // datatype undefined
console.log(typeof(outsideTemp));   // datatype object
console.log(typeof id);   // datatype symbol

console.log(typeof(scorevalue));  // datatype number
console.log(typeof(myFunction));   // datatype function(means object function)

// https://262.ecma-international.org/5.1/#sec-11.4.3