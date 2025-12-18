// const userEmail = "saitama@gmail.com"

// if(userEmail){
//     console.log("got user email");
// } else {
//     console.log("no user mail");
// }


const userEmail = ""

if(userEmail){
    console.log("got user email");
} else {
    console.log("no user email");
}

const userEmail2 = []

if(userEmail2){
    console.log("got user email");
} else {
    console.log("no user mail");
}


//truthy and falsy values

//falsy values:

//  false, 0, -0, BigInt 0n, "", null, undefined, NaN


 //truthy values:

//  true, "0", "false", 'false', " ", [], {}, function(){}, 

// if(userEmail2.length === 0){
//     console.log("array is empty");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("obj is empty");
// }


// console.log(false == 0);
// console.log(false == "");
// console.log(false == " ");
// console.log(false === " ");
// console.log(0 == '');



//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10  
// val1 = undefined ?? 15
// val1 = 200 ?? 20

let val2;
val2 = null ?? 1000
console.log(val2);

let val3;
val3 = undefined ?? 100000
console.log(val3);


val1 = null ?? 10 ?? 20
console.log(val1); // we get first vale 10 


// Terniary operator
// condition ? true : false

const price = 499

price <=500 ? console.log("not expensice") : console.log("expensive");


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log('lessthan 80') : console.log('morethan 80');