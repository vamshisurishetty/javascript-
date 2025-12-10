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

console.log(typeof bigNumber); // bigInt
console.log(typeof myFunction);
console.log(typeof anotherid);




// js is JavaScript is dynamically typed.

// That means you can change what type a variable holds anytime, like this:
// First it can hold a number
// Then you can put a string in the same variable




// https://262.ecma-international.org/5.1/#sec-11.4.3