// singleton objects - > made with the help of constructor
// Object.create(); // singleton object

// object Literals
const mySymbol =Symbol("Key1"); 
const jsUser = {
    name: "satosh",
    "full Name" : "Santosh Pathak",
    // mySymbol : "myKey1",//can't do this way
    [mySymbol] : "myKey1", 
    age :20,
    location : "Dehradun"
};//object creation

//How to acess Object data
console.log(jsUser.name); //not a good practice
console.log(jsUser["name"]); // better practice
// // console.log(jsUser."full Name");//not Possiblle
// console.log(jsUser["full Name"]);
// console.log(jsUser.mySymbol);
// console.log( typeof mySymbol);//it's used a string now
// console.log(jsUser[mySymbol]);

// jsUser.name = "Santosh Chandra Pathak";

// Object.freeze(jsUser);//now we can't change the value of jsUser because it get Freezed
jsUser.age = 10; // does't reflect due to freeezed Object
console.log(jsUser.age);

// add a Function

jsUser.greeting = () =>{
    console.log("Hello Good Morning Sir");
}
console.log(jsUser.greeting);


