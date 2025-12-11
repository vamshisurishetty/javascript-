let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 11, 11) // here we given month as 11 but we get december as output because in js months are defined in 0 based indexing (means => 0 month = jan, 1 month = feb) like this
// // console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());


// let newDate = new Date(2025, 11, 11, 5, 5)
// console.log(newDate.toLocaleString()); // we get date and time also , if we define date like this(Date(2025, 11, 11, 5, 5)) 5:05 is time


// let anotherDate = new Date("2025-01-14") // year-month-date(yy/mm/dd)
// console.log(anotherDate.toLocaleString());

let anotherDate1 = new Date("01-14-2025") // month-date-year(mm/dd/yy)
// console.log(anotherDate1.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp); // we get output in milliseconds
// console.log(anotherDate1.getTime());

// console.log(Math.floor(Date.now()/1000)); //if we divide milliseconds with 1000 we get seconds


let specialDate = new Date()
console.log(specialDate);
console.log(specialDate.getMonth()); // or console.log(specialDate.getMonth() + 1);
console.log(specialDate.getDate());
console.log(specialDate.getDay());