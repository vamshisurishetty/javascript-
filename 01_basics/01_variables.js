const accountId = 264
let accountEmail = "vamshi@google.com"
var accountPassword = "12345678"
// in js we dont use var to define variables because of scope issues
accountCity = "Telangana"  // we can write variables without let and const but this in not good thing to do
let accountState;

// accountId = 22L3CS2464
accountEmail = "vamsh2003.com"
accountPassword = "0000"
accountCity = "Jadcherla"

console.log(accountId);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/