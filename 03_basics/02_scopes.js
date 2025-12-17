// let a = 10;
// const b = 20;
// var c = 30;  // using var is not good to implement block scope, so we dont use var (we only use const and let tomdefine variables)



if(true){
    let a = 10
    const b= 20
    var c = 30
}


// console.log(a);
// console.log(b);
// console.log(c);



// var c = 300

// let a = 300 //global scope
// if( true ){
//     let a = 10 //block scope
//     const b = 20
//     console.log("INNER: ", a);
// }
// console.log(a);



//nested scope

function one(){
    const username = "luffy"

    function two(){
        const website = "hiAnime"
        console.log(username);
    }
    // console.log(website);
    two()
}

one()

if(true){
    const username = "zoro"
    if(username === "zoro"){
        const website = " youtube"
        console.log(username + website); 
        console.log(website);
    }
    // console.log(website); error
    console.log(username);
}
// console.log(username); error


// +++++++++++++ intresting thing +++++++++++++++++


console.log(addOne(5));
function addOne(num){ 
    return num + 1
} // function decleration(here we just defined a function)
// addOne(5)



// console.log(addTwo(5));
const addTwo = function(num){  
    return num + 2
} // function expression(here we defined a function and stored that function in a variable)
// addTwo(5)
// console.log(addTwo(5));
// In a function expression, you create a function and assign it to a variable. The function does not have its own name; instead, the variable name is used to call it.

// In your example, addTwo holds the function, and you can call the function using addTwo(5). Also, function expressions are not hoisted, which is why calling addTwo(5) before defining it would cause an error.