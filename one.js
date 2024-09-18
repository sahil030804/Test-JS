// let user = {
//   name: "Default User",
//   role: "user",

//   sayHello() {
//     console.log(`My name is ${this.name} and my role is ${this.role}`);
//   },

//   logOut() {
//     console.log(`${this.name} is logged out`);
//   },
// };

// let admin = {};
// admin.__proto__ = user;
// admin.name = "Admin";
// admin.role = "Admin";

// admin.deleteUser = function (username) {
//   console.log(`${this.name} has deleted user : ${username}`);
// };

// let guest = {};
// guest.__proto__ = user;
// guest.name = "Guest";
// guest.role = "Guest";

// guest.requestAccess = function () {
//   console.log(`${this.name} has requesting access to system`);
// };

// admin.sayHello(); //My name is Admin and my role is Admin
// admin.deleteUser("marcus"); //Admin has deleted user : marcus

// guest.sayHello(); //My name is Guest and my role is Guest
// guest.requestAccess(); //Guest has requesting access to system
// guest.logOut(); //Guest is logged out

// setTimeout(function () {
//   try {
//     noSuchVariable; // try...catch handles the error!
//   } catch (err) {
//     console.log("error is caught here!", err.message);
//   }
// }, 1000);

// try {
//   const result = 10 / i; // This will throw a "Division by zero" error
//   console.log(result);
// } catch (error) {
//   console.error("An error occurred:", error.message);
// }

// let user = {
//   age: 20,
// };

// try {
//   if (!user.name) {
//     throw new SyntaxError("name not defined in object");
//   }
// } catch (error) {
//   console.log("Error occured : ", error.message);
// }

// let firstPromise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("First Promise resolved!"), 1000);
// });

// firstPromise
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Second Promise resolved!");
//       }, 2000);
//     });
//   })
//   .then((result) => console.log(result));

// function checkLoggedIn() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let isLoggedIn = false;

//       if (isLoggedIn) {
//         resolve("User is logged in");
//       } else {
//         reject("user is not logged in");
//       }
//     }, 1000);
//   });
// }

// function getUserProfile() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let profile = { name: "sahil", age: 20 };
//       resolve(profile);
//     }, 1000);
//   });
// }

// checkLoggedIn()
//   .then((result) => {
//     console.log(result);
//     return getUserProfile();
//   })
//   .then((profile) => {
//     console.log(profile);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://api.github.com/users/jeresig",
// ];

// let requests = urls.map((url) => fetch(url));

// Promise.all(requests).then((responses) => {
//   responses.forEach((response) => console.log(response.url, response.status));
// });

import {Hello} from "./index.js";

Hello("sahil");
