// Dates 
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log((myDate.toLocaleDateString()));

// console.log(typeof myDate);

let myCreatedDate = new Date(2025, 7, 16, 3, 5)
// console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());

let myCreatedAnotherDate = new Date("08-16-2025")
// console.log(myCreatedAnotherDate.toLocaleDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedAnotherDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

// `${newDate.getDay() and the time is}`

newDate.toLocaleString('default', {
    weekday:"long",
})