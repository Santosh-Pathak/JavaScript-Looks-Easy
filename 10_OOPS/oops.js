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
// When we Use 'new" Keyword then a Empty Objecct get cretaed which
//  is called as Instance
// construcor funtion is called due to ew keyword
// 
