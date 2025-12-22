// applying loop(forin) on objects

const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple",
}

for (const key in myObj) {
    // console.log(key);
    // console.log(myObj[key]);
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}


// applying "forin" loop on arrays

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
} //forin loop

for (const key of programming) {
    // console.log(key);
} //forof loop


// on objects we have to use 'forin' loop 
// on arrays we can use 'forof' , 'forin' loop and there are diff types of loops also(while, do while ....... etc)

// on Map we cant apply forof loop
const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of amarica")
map.set('RSS', "Russia")
map.set('JAP', "Japan")
map.set('IN', "India")
// console.log(map);

for(const key in map){
    console.log(key);
}
// if we write Map like this we can't iterate over map 
// this map is not iteritable ,  if something is not iteritable then it cannot be written in a loop like this.



// on Map we MUST use forof loop
// forin does NOT work on Map
// Map IS iterable
