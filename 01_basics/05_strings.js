const name = "vamshi"
const repoCount = 50

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Declaring string
const gameName = new String("winner-@-2003")
console.log(gameName);

console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.charAt(0));
console.log(gameName[0]);
console.log(gameName.toUpperCase);
console.log(gameName.indexOf('r'));
console.log(gameName.split("-"));
console.log(gameName.slice(0, 7));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(3, 6)
console.log(anotherString);

const newString1 = "     vamshi   "
console.log(newString1);
console.log(newString1.trim());


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));
 
console.log(url.includes('hitesh'));
console.log(url.includes('vamshi'));


const anime = new String("one-piece Naruto Bleach Blue-lock")
console.log(anime.split(" "));
