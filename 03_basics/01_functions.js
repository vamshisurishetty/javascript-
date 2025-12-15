// const myFunction = function(){
// }

function sayMyname(){
    console.log("v");
    console.log("a");
    console.log("m");
    console.log("s");
    console.log("h");
    console.log("i");
}
// sayMyname();
// console.log(sayMyname);


// function addTwoNumbers(n1, n2){
//     console.log(n1 + n2);
// }
// addTwoNumbers(2, 3)

function addTwoNumbers(num1, num2){
    return num1 + num2
}
// console.log(addTwoNumbers(6, 8));
// console.log(addTwoNumbers(6, "a"));


function addTwoNumbers(num1, num2){
    let result =  num1 + num2
    return result;
}
// console.log(addTwoNumbers(3, 9));

function addTwoNumbers(num1, num2){
    return num1 + num2
}
const result = addTwoNumbers(9, 9)
// console.log("Result: ", result);


// function loginUsermesage(username){
//     if(username === undefined){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUsermesage("vamshi"))
// console.log(loginUsermesage());

// function loginUsermesage(username){
//     if( !username ){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUsermesage("vamshi"));
// console.log(loginUsermesage(""));

function loginUsermesage(username = "sam"){
    if( !username ){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUsermesage("")); // get output undefined
// console.log(loginUsermesage()); // get output sam


// function apple(username){
//     if(!username){
//         console.log("we didnt enter if loop");
//     }
// }
// apple("")


// functions using arrays and objects

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2));


// ...Rest or spread operator
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 600));  // here we used rest(...) operator



// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 600, 2000));


function calculateCartPrice(val1, val2,  val3, val4, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 600,800, 1000, 1200, 2000));


//passing objects to functions

// const user = {
//     userName: "vamshi",
//     price: 199,
// }
// function handleObject(anyobject){
//     console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
// }
// handleObject(user)



function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
}
handleObject({
    userName: "vamshi",
    price: 199,
})
// here we passed obj directly in function when we are calling that function(handleObject({obj}))


// passing arrays directly to functions
const myNewArray = [200, 400, 600, 800]

function returnsSecondValue(getArray){
    return getArray[1]
}
console.log(returnsSecondValue(myNewArray));
console.log(returnsSecondValue([1000, 2000, 3000, 4000]));

