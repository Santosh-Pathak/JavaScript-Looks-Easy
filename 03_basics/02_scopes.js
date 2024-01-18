// let  a= 10;
// const b = 20;
// var c = 30;
if(true)
{
let  a= 10;
const b = 20;
var c = 30;
}
// console.log(a);
// console.log(b);
// console.log(c);
// here var is also accessible outside the SCOPE . (problem of SCOPE)

// Closure and SCope 
function one()
{
    const userName = "Santosh"
    function two()
    {
        const website  = "Youtube"
        console.log(userName);
    }
    // console.log(website);
    // two()
}
one();
//Closure =>in closure child Functions can use the variable of Parent Functions

// **************INTERESTING***********************
function addone(num)
{
    return num+1;
}
console.log(addone(5));

// console.log(addTwo(5)); => ERROR
const addTwo = function(num)
{
    return num+2;
}
console.log(addTwo(5));
