// Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23);
let myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate.toLocaleDateString()); 

// let myTimeStamp = Date.now();
// console.log(myTimeStamp.toLocaleString());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
weekday : "long",dateStyle : "long"
});
console.log(newDate);


