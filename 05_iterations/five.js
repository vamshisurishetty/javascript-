//commonly used loops
//forEach


const coding = ["js", "ruby", "java", "cpp", "python"]


//using function expression
// coding.forEach( function (item) {
//     console.log(item);
// })


//using arrow function
// coding.forEach( (item) => {
//         console.log(item);    
// })



// coding.forEach( (item, index, arr) => {
//         console.log(item, index, arr);
// })


const myCoding = [
        {
                languageName: "javascript",
                languageFileName: "js"
        },
        {
                languageName: "java",
                languageFileName: "java"
        },
        {
                languageName: "python",
                languageFileName: "py"
        },
]

myCoding.forEach( (item) => {
        console.log(item.languageName);
})