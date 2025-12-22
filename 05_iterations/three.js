//for of loop
//this for of loop is array specific loop

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    // console.log(i);
}


const names = ["sanji", "nami", "usoop", "chopper"]
for (const name of names) {
    // console.log(name);
}


const greetings = "Hello world"
for(const greet of greetings){
    // console.log(greet);
}




//Map in js

const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of amarica")
map.set('RSS', "Russia")
map.set('JAP', "Japan")
map.set('IN', "India")
// console.log(map);


// how to apply loop on Map(forof loop)

for(const [key, value] of map){
    // console.log(key, ':-', value);
    // console.log(key);
}


// for(const item of map){
//     // console.log(key, ':-', value);
//     // console.log(key);
//     console.log(item[0]);
//     console.log(item[1]);
// }


// map on object
const myObj = {
    'game1': "NFS",
    'game2': "spiderman"
}

// for(const [key, value] of myObj){
//     console.log(key, ':-', value);
// }

// on objects we cant apply forof loop 
//objects are not iteritable
// for objects we have forin loop