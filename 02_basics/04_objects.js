// creating singleton(using constructor)

// const tinderUser = {}
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "nami"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "monkey D",
            lastname: "luffy",
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

// const obj3 = {...obj1, ...obj2}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "vam@gmail.com"
    },
    {
        id: 2,
        email: "vamshi@gmail.com"
    },
    {
        id: 1,
        email: "vamsh@gmail.com"
    },
    {
        id: 1,
        email: "vamshiSurishetty@gmail.com"
    },
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // we get output true because in tinderUser we have isLoggedIn key 
// console.log(tinderUser.hasOwnProperty("function")); // we get output false because in tinderUser we donr have function key 
//this "hasOwnProperty" method check's that if an object have an key or not.



//de-structuring

const course = {
    courseName: "javascript",
    price: "999",
    courseInstructor: "hitesh"
}

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);
console.log(course.courseInstructor);

