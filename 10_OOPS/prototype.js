// Due to prototype we uses this keyword ans classes , inheritance
// In JavaScript, a prototype is a mechanism that allows objects to
// inherit properties and methods from other objects. Every JavaScript
// object has a prototype property, which is a reference to another object.
// When you attempt to access a property or method on an object that doesn't
// exist on the object itself, JavaScript looks for it in the object's prototype.

// Prototypes form the basis of JavaScript's inheritance model.
// When you create an object using a constructor function or with object
// literal syntax, the newly created object inherits properties and methods
// from its constructor's prototype.

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the Person prototype
Person.prototype.functionName = function () {
  console.log(
    "Hello, my name is " + this.name + " and I am " + this.age + " years old."
  );
};

// Creating a new Person object
var person1 = new Person("John", 30);

// Calling the method inherited from the prototype
//person1.functionName(); // Output: Hello, my name is John and I am 30 years old.



function multiply(num){
    return num*5;
}
multiply.power =2;
// console.log((multiply(5)));
// console.log(multiply.power);
// console.log(multiply.prototype);

//***************Everything in JAvascript is a Object ********************//

// function createUser(userName , score)
// {
//     this.userName = userName;
//     this.score =score
// }

// createUser.prototype.increment = function()
// {
//     this.score++;
//     console.log(`Incremented Value is => ${this.score}`);
// }

// const chai = new createUser("chai",25);
// const coffee = new createUser("cofee",50);

// chai.increment();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

let myName = "Santosh     ";
// approah 1 (TrueLength)
// console.log(myName.trim().length);
// console.log(myName.length);

// In JavaScript, __proto__ is a special property that exists on all objects and allows access to the object's prototype. It is a non-standard way of accessing an object's prototype and is generally not recommended for direct use in production code due to its non-standard nature and potential performance implications.

// When you create an object in JavaScript, either through object literals {}, constructor functions, or Object.create(), JavaScript automatically sets up a prototype chain for that object. This prototype chain connects the object to its prototype, which in turn connects to another prototype, forming a chain that eventually leads to null.

// Here's a brief overview of how __proto__ works:

// When you create an object, its __proto__ property is automatically set to the prototype of the constructor function or the prototype specified when using Object.create().
// You can access the prototype of an object using object.__proto__.
// If you access a property or method on an object and it doesn't exist on the object itself, JavaScript will look for it in the object's prototype by traversing the prototype chain.
// Here's an example to illustrate the use of __proto__:


// Constructor function
function Person(name) {
  this.name = name;
}

// Adding a method to the Person prototype
Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

// Creating a new Person object
var person1 = new Person("Santosh");

// Accessing the prototype using __proto__
console.log(person1.__proto__ === Person.prototype); // Output: true

// Accessing the prototype's prototype using __proto__
console.log(person1.__proto__.__proto__ === Object.prototype); // Output: true

// Accessing a method through the prototype chain
person1.sayHello(); // Output: Hello, my name is John
// In this example, person1.__proto__ refers to the prototype of the person1 object, which is Person.prototype. Similarly, person1.__proto__.__proto__ refers to the prototype of Person.prototype, which is Object.prototype.

// User
// explain in a better way and easy to understand
// ChatGPT
// Certainly! Let's simplify the concept of __proto__ and the prototype chain in JavaScript:

// Objects and Prototypes: In JavaScript, everything is an object or can behave like one. When you create an object (using {} for example), it has a hidden link, or "pointer," to another object called its prototype.

// Accessing the Prototype: The __proto__ property is a way to access this hidden link to the prototype object. For example, if you have an object myObj, you can access its prototype using myObj.__proto__.

// Prototype Chain: Objects in JavaScript form a chain of prototypes. When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it, it looks at the object's prototype (__proto__), and then continues up the chain until it finds the property/method or reaches the end of the chain (where the prototype is null).

// Here's a simple analogy:

// Think of a prototype as a recipe book. Each recipe is like a method or property that an object can have.
// An object is like a chef in a kitchen. When a chef needs a recipe (method or property), they first check their own recipe book. If they don't find it, they check the bigger recipe book (prototype), and so on, until they find the recipe or reach the last book (where there are no more recipes).
// Using __proto__ directly is generally discouraged in modern JavaScript because it's not part of the official standard and can lead to performance issues. Instead, you should use Object.getPrototypeOf() to get an object's prototype and Object.setPrototypeOf() to set an object's prototype.