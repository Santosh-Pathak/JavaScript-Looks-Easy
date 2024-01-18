const user ={
    userName :"Santosh",
    price : 999,

    welcomeMSg : function()
    {
        console.log(`${this.userName} , welcome to this Module.`);
        console.log(this);
    }

}
// user.welcomeMSg();
// user.userName="Sunder";
// user.welcomeMSg();
// console.log(this); //Anser=> {}

// function chai()
// {
//     let name = "Sonu"
//     console.log(this.userName);
// }
// const chai = function()
// {
//     let name = "Sonu"
//     console.log(this.userName);
// }

//ARROW FUNCTIONS
const chai =()=>{
    let name = "Sonu"
    console.log(this.userName);
}
// chai();

//BASIC ARROW FUNCTION (EXPLICIT RETURN )
const addTwo= (n,m)=>{return n+m}
// console.log(addTwo(2,3));

//IMPLICIT RETURN METHOD (no use of return method )
const mulTwo=()=> m*n;

const returnObject =() => ({userName:"Sunder",nickName:"Hacker"});
console.log(returnObject());
