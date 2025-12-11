const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros) // push add elements to the existing array, but using concat create new array 
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // concat will return new array
// console.log(allHeros);


// spread
const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros); // using spread(...) is better than using concat 


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_array = another_array.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("vamshi"));
console.log(Array.from("vamshi"));


console.log(Array.from({name: "vamshi"}));  // intresting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
