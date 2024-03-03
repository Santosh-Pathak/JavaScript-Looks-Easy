// ES6 l baad ka seen h sab


class User {
  constructor(userName, email, pass) {
    this.userName = userName;
    this.email = email;
    this.pass = pass;
  }

  encryptPass()
  {
        let pass = this.pass;
        return pass+"abc";
  }
  makeCapital()
  {
    return `${this.userName.toUpperCase()}`;
 }
}

let chai = new  User("santosh" ,"sp@gmail.com","123@");
// console.log(chai.encryptPass());
// console.log(chai.makeCapital());

class Student{
    constructor(userName)
    {
        this.userName = userName;
    }
    logMe()
    {
        console.log(`UserName is : ${this.userName}`);
    }
}
class teacher extends Student{
    constructor(userName , id , pass)
    {   
        super(userName);
        this.id =id;
        this.pass = pass
    }
}
let s = new Student("Santosh");
console.log(s.logMe());
