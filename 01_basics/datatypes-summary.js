// Data types 
   // 1) primitive 
   // 2) Non primitive


// primitive
// 7 types : String , Number, Boolean, null(empty), undefined(not defined), Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // null means empty 
let userEmail;  // we just declared userEmail variable we didnt stored anything in userEmail variable , when we print it we get undefined

const id = Symbol('123')
const anotherid = Symbol('123')

// console.log(id === anotherid); // false

const bigNumber = 23456789876543n // bigInt

 
// Non-primitive(reference type)
//types : Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "vamshi",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

// console.log(typeof bigNumber); // bigInt
// console.log(typeof myFunction);
// console.log(typeof anotherid);




// js is JavaScript is dynamically typed.

// That means you can change what type a variable holds anytime, like this:
// First it can hold a number
// Then you can put a string in the same variable




// https://262.ecma-international.org/5.1/#sec-11.4.3



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memories : stack and heap

// primitive data types stored in stack 
// non-primitive data types stored in heap memory

// stack(primitive)  and heap (non-primitive)


// Primitive = copy. Changing the copy does not change the original.

// Non-primitive = reference. Changing it does change the original because they share the same “box.”

// Primitive
let a = 5;
let b = a;   // b gets a copy
b = 10;      // change b
// a is still 5

// Non-primitive
let obj1 = { toy: "car" };
let obj2 = obj1;   // same box (reference)
obj2.toy = "ball"; // change one
// obj1.toy is now "ball"


let myYtname = "vamshiSurishetty"

let newYtname = myYtname
newYtname = "surishettyVamshidhar"

console.log(newYtname);
// Primitive types = only copy, no shared reference.



let user1 = {
    email: "user@google.com",
    upi: "user@ybl",
}

let user2 = user1

user2.email = "user@youTube.com"

console.log(user1);
console.log(user2);
