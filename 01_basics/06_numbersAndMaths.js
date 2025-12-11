const score = 100

const balance = new Number(999)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  // get 2 zeros after (.) point

const otherNumber = 23.45678
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(2));
// console.log(otherNumber.toPrecision(4));

const otherNumber1 = 123.45678
// console.log(otherNumber1.toPrecision(3));
// console.log(otherNumber1.toPrecision(4));


const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString("en-In"));



// +++++++++++++++++++++++ Maths +++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4));  // -ve numbers change to +ve , +ve stay in positive only

// console.log(Math.round(4.3333)); // round off to 4 
// console.log(Math.round(4.6)); // round off to 5

// console.log(Math.floor(6.5)); // round to 6
// console.log(Math.floor(6.6)); // round to 6

// console.log(Math.ceil(4.2)); // ceil means top so, 4.2 becomes 5
// console.log(Math.floor(4.9)); // floor means down 
// console.log(Math.min(1, 5, 9, 0));


// console.log(Math.random()); // gives random num btw 0 to 1 (1 not included)

// console.log(Math.random() * 10);
// console.log(Math.floor(Math.random() * 10)); //we get values from 0 to 9 (if we add 1 at end then we get numbers from 1 to 10 randomly)
// console.log(Math.floor(Math.random() * 10) + 1); // now we get numbers randomly from 1 to 10


// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min );


console.log(Math.floor(Math.random() * (20 - 10 + 1)));
