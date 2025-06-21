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


let value = 3
let negvalue = -value
console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);  //power
// console.log(2**3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Sayan"
let str3 = str1 + str2
console.log(str3);


// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(1 + "2" + 2);

// console.log((1 + 2) * 3 / 4);


// console.log(true);
// console.log(+true);
console.log("");
console.log(+"");

let num1 , num2 , num3
num1 = num2 = num3 = 2 + 2

console.log(num1 , num2 , num3);


gameCounter = 100
// gameCounter++
++gameCounter
console.log(gameCounter);

