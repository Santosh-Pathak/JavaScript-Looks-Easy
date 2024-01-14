//how to declare objects
const tinderUser = new Object();
 tinderUser.id = "123ABC";
 tinderUser.name = "Sunder";
 tinderUser.isLOggedIn = true;
// console.log(tinderUser);

const regularUser ={
    email : "Sunder987@gmail.com",
    fullName: {
        userFullName : {
                firstName : "Sunder",
                lastName : "Singh"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"santosh",2:"Sneha",3:"Sunder"};
const obj2 = {4:"Pawan",5:"Dev",6:"Darpan"};

// const obj3  = {obj1,obj2}; 
//const obj = Object.assign({},obj1,obj2); //{}-> to combine all the parameter (for more than 2 objects , we have to use {} to combine all other )
// console.log(obj);

const obj3 = {...obj1,...obj2}; //mostly used
// console.log(obj3);



console.log(tinderUser);
console.log(Object.keys(tinderUser)); // show all the keys
const arrayOfKeys =  Object.keys(tinderUser); // an array of keys of Object TInderUser
const arrayOfValues = Object.values(tinderUser);

