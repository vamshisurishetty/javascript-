// Arrays => non-primitive

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[0]);
// console.log(myArr[1]);


// Array methods

// myArr.push(6)
// myArr.pop()
// console.log(myArr);


// myArr.unshift(9) // adds 9 from start of the array(unshift)
// myArr.shift() // remove 9 from the start of the array(shift)
// console.log(myArr);

// console.log(myArr.includes(9)); // we get o/p falce because 9 is not there in myArr
// console.log(myArr.indexOf(9)); // we get o/p -1 because 9 is not there in myArr
// console.log(myArr.indexOf(3)); // 3 number exixt in index of 3

const newArr = myArr.join() 

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A", myArr);

const myNewArr1 = myArr.slice(1, 3)

console.log(myNewArr1);
console.log("B", myArr);

const myNewArr2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myNewArr2);
// slice → take but don’t change the box
// splice → cut and change the box

