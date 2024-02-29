const user  =  {
    userName : "Hitesh",
    loginCount : 8 ,
    signesIn : true,
    getUserDetails :  function()
    {
        console.log(`userName is : ${this.userName}`);
        console.log(this);
    }
}
// console.log(user.userName);
console.log(user.getUserDetails());
// console.log(this);

// new() -> new keyword is a constructor function 


