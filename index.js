// fetch(`https://api.github.com/users/sahil030804`)
//   .then((Response) => Response.json())
//   .then(
//     (user) =>
//       new Promise((resolve, reject) => {
//         let img = document.createElement("img");
//         img.src = user.avatar_url;
//         // img.className("imageApi");
//         document.body.append(img);
//         // console.log(user.avatar_url);

//         // setTimeout(() => {
//         //   img.remove();
//         //   resolve.user;
//         // }, 3000);
//       })
//   )
//   .catch((err) => console.log(err));

// function sum(a, b) {
//   console.log(a + b);
// }

// function calc(a, b, callback) {
//   callback(a, b);
// }

// calc(1, 2, sum);

// function getData(id, callback) {
//   setTimeout(() => {
//     console.log("ID : ", id);
//     if (callback) {
//       callback();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });

// Promise.race([
//   new Promise(resolve => setTimeout(() => resolve('First!'), 150)),
//   new Promise(resolve => setTimeout(() => resolve('Second!'), 100))
// ])
// .then(result => console.log(result)); // "First!"

// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Error')
// ])
// .then(results => console.log(results));
// [
//   { status: 'fulfilled', value: 'Success' },
//   { status: 'rejected', reason: 'Error' }
// ]

export function Hello(name) {
  console.log(`Helloooo! ${name}`);
}
