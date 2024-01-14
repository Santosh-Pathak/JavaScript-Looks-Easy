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
console.log(regularUser);
console.log(regularUser.fullName.userFullName.firstName);

