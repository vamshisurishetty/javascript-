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
    // console.log(website);
    console.log(username);
}
// console.log(username);


// +++++++++++++ intresting thing +++++++++++++++++


console.log(addOne(5));
function addOne(num){
    return num + 1
}
// addOne(5)



// console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}
// addTwo(5)
// console.log(addTwo(5));
