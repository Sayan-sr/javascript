let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => Nan 
// true => 1; false => 0

let isLoggedIn = 1

let BooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn);

let empty = ""
let isEmpty = Boolean(empty)
console.log(isEmpty);

let name = "Sayan"
let isName = Boolean(name)
console.log(isName);

// 1 => true; 0=> false
// "" => false
// "Sayan" => true

let someNumber = 26
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

