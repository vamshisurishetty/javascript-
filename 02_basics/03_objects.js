// singleton
//object.create

// object literals

const mySymbol = Symbol("key1")
const mySymbol2 = Symbol("key1")

const jsUser = {
    name: "vamshi",
    "fullName": "surishetty vamshidhar",
    [mySymbol]: "myKey1",
    [mySymbol2]: 101,
    age: 22,
    location: "hyd",
    email: "vamshi@google.com",
    inLoggedIn: false,
    daysLoggedIn: ["monday", "saturday"]
} // this curly brases { is object }

// myArray = ["v", "a", "m" , "s", "h", "i"]
// to access objects (.), []
// console.log(jsUser.email);
// console.log(jsUser["email"]);  // when we stored email there we stored email in email variable string "email". so we have to access using [] and also "" .

// console.log(jsUser.fullName);
// console.log(jsUser["fullName"]);

// console.log(jsUser[mySymbol]);
// console.log(typeof jsUser[mySymbol]);
// console.log(typeof mySymbol);
// console.log(typeof jsUser[mySymbol2]);

// changing obj values

jsUser.email = "vamshi2003@gmail.com"
// Object.freeze(jsUser) // here we freezed obj => jsUser so, now we cant do any changes in jsUser.
jsUser.email = "luffy2003@gmail.com"
// console.log(jsUser); // after freezing  again we tried to change email= vamshi2003@gmail.com to  email=luffy2003@gmail.com but it wont change because we freezed object.


// adding function in Object(jsUser)
jsUser.greeting = function(){
    console.log("hello js user");   
}

jsUser.greetingTwo = function(){
    console.log(`hello js user,  ${this.name}`);   
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

