//map method
const myNums = [1,2,3,4,5,6,7,8,9,10]

// let newNums = myNums.map( (num) => num + 10)
// console.log(newNums);

//samething using forEach
// myNums.forEach( (num, index, arr) =>{
//     if(num >= 1){
//         arr[index] = num + 10;
//     }
// })
// console.log(myNums);

//chaining ( adding multiple methods contineously )

// const newNums = myNums.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num >= 40)

const newNums = myNums
            .map( (num) => num * 10)
            .map( (num) => num + 1)
            .filter( (num) => num >= 40)

console.log(newNums);