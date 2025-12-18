//if


// if(condition){
// }
// in if, if condition is true we go into loop , if condition is false we dont go into loop

const isUserLoggedIn = true;

if(isUserLoggedIn){
    console.log("give him new access");   
}
if(3 != 2){  // 3 !=2 is true so it goes into if
    console.log("pappu is going to die");   
}

if(2 === "2"){
    console.log("msd is not playing ipl");   
}
if(2 == "2"){
    console.log("msd is playing ipl");   
}

const temp = 41
if(temp < 50){
    console.log("temp is lessthan 50");
}
console.log("temp is greaterthan 50");

if(temp === 41){
    console.log("temp is lessthan 50");
}
console.log("temp is greaterthan 50");

// (<, >, <=, >=, ==, !=, ===, !==)

//else
// if(temp < 50){
//     console.log("temp is lessthan 50");
// }else{
//     console.log("temp is greaterthan 50");
// }



// scope related
const score = 200

if(score > 100){
    const power = "fly"
    console.log(`user power: ${power}`);
}
// console.log(`user power: ${power}`); // when we tried to pring power outside block we get err because power is belongs to block scope



// const balance = 1000

// if(balance > 500) console.log("test");
//                 //or
// if(balance > 500) console.log("test"),
// console.log("test2");  // immiture code, not good code




//++++++++++++++ nesting ++++++++++++++++

// const balance = 1000
// if(balance < 500){
//     console.log("lessthan 500");
// } else if(balance < 750){
//     console.log("lessthan 750");
// } else if(balance < 900){
//     console.log("lessthan 900");
// } else {
//     console.log("lessthan 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("allow to buy course");
}

// if(userLoggedIn && debitCard && 2==2){
//     console.log("allow to buy course");
// }

// if(userLoggedIn && debitCard && 2==="2"){
//     console.log("error");
// }

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("account created");
}