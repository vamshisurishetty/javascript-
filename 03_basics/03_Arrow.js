const user = {
    username: "vamshi",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "luffy"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "vamshi"
//     console.log(this.username);
// }
// chai() // here we cant use this in function


//function expression
// const chai = function(){
//     let username = "vamshi"
//     console.log(this.username); 
// }
// chai()



//arrow functions



// const chai = () =>{
//     let username = "vamshi"
//     console.log(this.username);
//     console.log(this);
// }
// chai()



//basic arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(2, 3));


//implicit return
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "vamshi"})
const addTwo = () => ({username: "vamshi"})

console.log(addTwo());
// console.log(addTwo(2, 3));


//in implicint return we dont have to write return


