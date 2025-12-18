// IIFE = write function + run it immediately
//Immediately invoked function expressions(IIFE)
// IIFE = a function that runs immediately when it is created.

// function chai(){
//     console.log(`DB connected`);
// }
// chai()

// (function chai(){
//     console.log(`DB connected`);
// })()

// ()() // in first() we write function defination and second() is used to call function
//ex :
// (function newton(){
//      console.log(`Apple fell down`);
// })()



// (function chai(){
//     console.log(`DB connected`);
// })(); (;)semicolumn is imp when we write 2 functions
// normal function
// ( () => {
//     console.log(`DB connected`);
// })()  // arrow function







// (function chai(){
//     console.log(`DB connected`);
// })();  // (;)semicolumn is imp when we write 2 functions
// (function aurcode(){
//     console.log(`DB connected two`);
// })()


(function chai(){
    //named iife
    console.log(`DB connected`);
})();  // (;)imp

( (name) => {
    console.log(`Db connected two ${name}`);
})("vamshi")  //arrow function



// chai() is name iife and arrow function is un-named iife