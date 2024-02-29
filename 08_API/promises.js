// fetch('http://gogle.com').then().catch().finally();
/// the tine when we doesn't have the Promises in dev tools peoples uses
// Q and blueBird like Libraries throught which we can use all functionality
// like fetch  ,cathc etc in core Javascript.

const { response } = require("express");

// const promise1 = new Promise( (resolve , reject) =>{
//     // DO anasync Task like :
//     //DB calls, CryptoGraphy  , networl etc

//         setTimeout(function(){
//             console.log("Async Task 1 Completed");
//             resolve();
//         },1000);

// });
// // resolve --- resolve
// promise1.then(function(){
//     console.log("Promise Consumed");
// })

// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("Async Task 2 Completed");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Asynce 2 Resolved");
// })

// const promise3 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ userName: "Sonu", email: "pathaksantosh987@gmail.com" });
//   }, 1000);
// });

// promise3.then(function (user) {
//   console.log(user);
// });

// const promise4 = new Promise(function (resolve, reject) {
//   {
//     setTimeout(function () {

//       let error = true;
//       if (!error) {
//         resolve({ userName: "Santosh", pass: "123" });
//       } else {
//         reject("ERROR  : Something Went Wrong ");
//       }
//     }, 1000);
//   }
// });
// //chaining
// promise4
// .then((user) => {
//     console.log(user);
//     return user.userName;
//   })
// .then((UserName) => {
//     console.log(UserName);
//   })
// .catch((error)=>{
//     console.log(error);
//   })
// .finally(()=>{
//     console.log("The PRomise is Either Resolved or Rejected");
// })

// const promise5 = new Promise(function(resolve,reject){

//     setTimeout(function () {
//         // let error = false;
//         let error = true;

//         if (!error) {
//           resolve({ userName: "Santosh", pass: "123" });
//         } else {
//           reject("ERROR  : Something Went Wrong ");
//         }
//       }, 1000);

//   });

//   async function consumePromise5(){
//     try {
//         const response = await promise5;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
//   }
//   consumePromise5()

// const fetch = require('node-fetch');

// async function getAllusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json(); // Parse JSON response
//         console.log(data); // Now you can work with the parsed data
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllusers();
import fetch from 'node-fetch';

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(responseData => {
    console.log(responseData);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
