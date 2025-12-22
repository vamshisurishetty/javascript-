//filter, map, and reduce

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    // console.log(item);
    // return item
})
// console.log(values);
//forEach dont return anything. so, we dont have to save forEach in any variable(like we did in above, we saved forEach in values variable but it is not correct)


//this is the correct way to use forEach
coding.forEach( (onePiece) => {
    // console.log(onePiece);
})




//filter
const myNums = [1,2,3,4,5,6,7,8,9,10]

//myNums.filter( () => {})

        // or

//myNums.filter( () => )

// const newNums = myNums.filter( (num) => num > 4)

        // or

// const newNums = myNums.filter( (num) => { return num > 4 })      
        //or
// const newNums = myNums.filter( (num) => (num > 4 ))
// console.log(newNums);


// now in place of filter we are using forEach to do same work
// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//let userBooks = books.filter( (book) => book.genre === "History")

// let userBooks = books.filter( (book) => book.publish >= 2000)

const userBooks = books.filter( (book) => book.publish >= 1995 && book.genre === "History")

// console.log(userBooks);


