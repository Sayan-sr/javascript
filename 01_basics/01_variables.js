const accountId = 144553
let accountEmail = "sayand2@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// accountId = 2
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "sayan03@gmail.com"
accountPassword = "00000"
accountCity = "Delhi"

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])