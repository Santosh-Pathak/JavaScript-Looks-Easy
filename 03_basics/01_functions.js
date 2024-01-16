// function printNtime()
// {
//     console.log("Hello World");
// }
// printNtime();
function add(n,m){
    // console.log(n+m);
    return n*m;
}
const result = add(2,3);
// console.log(result);

// ... =>rest Operator and Spread Operator
// function calculateCartPrice(...num1) {
//     return num1;
// }
// console.log(calculateCartPrice(900,444,777));
function calculateCartPrice(v1,v2,...num1) { //behind the scene v1= 900 nad v2 = 456 and other values are in ...num1
    return num1;
}
// console.log(calculateCartPrice(900,456,444,777));

const user ={
    name: "santosh",
    age : 20
}
function handleObject(anyObject)
{
    console.log(`User Name is ${anyObject.name} and age is ${anyObject.age}`)
}
// handleObject(user);
// handleObject({  name: "santosh",
// age : 20})
const array =[234,345,567];

function returnVal(getArray)
{
    return getArray[2];
}
console.log(returnVal(array));