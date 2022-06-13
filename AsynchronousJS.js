// console.log('This is line One.')

// setTimeout(function (){
//     console.log('This is line Two.');
// }, 3000)

// setTimeout(function (){
//     console.log('This is line Three.')
// }, 2000)

// console.log('This is line Four.')

// setTimeout(function (){
//     console.log('This is line Five.')
// }, 1000)


// --- How to store result from Async func in JS ---

// function sayMyName (name){
//     // let result;

//     setTimeout(() => {
//         // result = name;
//         console.log(name);  // this is the way 
//     }, 3000)

//     // return result;   // we can't store result of async func in this way
// }

// // let x = sayMyName('Ainul Hossain');
// // console.log(x);

// sayMyName('Ainul Hossain');


// --- What is AJAX? ---- To Know more (w3school & Sumit Saha - XMLHttp Video)

// AJAX is a technique for accessing web servers from a web page.
// AJAX stands for Asynchronous JavaScript And XML (JSON).


// --- AJAX With Callback in JS ---

// // function getRequest() {   // Without Callback Function (Basic AJAX use)
// //     var xhr = new XMLHttpRequest(); 
// //     xhr.open('get', 'https://jsonplaceholder.typicode.com/users');

// //     xhr.onreadystatechange = function () {
// //         if (xhr.readyState === 4) {
// //             if (xhr.status === 200) {
// //                 let result = JSON.parse(xhr.response);
// //                 console.log(result);
// //             } else {
// //                 console.log(xhr.status);
// //             }
// //         }
// //     }

// //     xhr.send();
// // }

// // getRequest();


// function getRequest(url, callback) {   // Using Callback Function
//     var xhr = new XMLHttpRequest(); 
//     xhr.open('get', url);

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 let response = JSON.parse(xhr.response);
//                 callback(null, response);
//             } else {
//                 callback(xhr.response, null);
//             }
//         }
//     }

//     xhr.send();
// }

// getRequest('https://jsonplaceholder.typicode.com/users', (err, res)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// })

// // getRequest('https://jsonplaceholder.typicode.com/posts', (err, res)=>{
// //     if(err){
// //         console.log(err);
// //     } else {
// //         res.forEach((value) => console.log(value.title));
// //     }
// // })

// // getRequest('https://jsonplaceholder.typicode.com/comments', (err, res)=>{
// //     if(err){
// //         console.log(err);
// //     } else {
// //         res.forEach((value) => console.log(value.email));
// //     }
// // })


// ----- Callback is not always Asynchronous in JS -----

// let x = [1, 2, 3, 4];

// // let result = x.map((v) => v*v*v);  //using callback but not Asynchronous
// // console.log(result);


// function asyncMap(arr, cb){
//     return (arr.map((v) => {
//         setTimeout(cb.bind(null, v), 0)
//         // setTimeout(() => cb(v), 0)
//         // setTimeout(cb.call(null, v), 0) // (x) - this is Error
//     }));
// }

// let qbArr = asyncMap(x, (v) => {
//     console.log(v*v*v);
// });

// console.log(qbArr);


// --- Why not Callback in JS ---

// function getRequest(url, callback) {   // Using Callback Function
//     var xhr = new XMLHttpRequest(); 
//     xhr.open('get', url);

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 let response = JSON.parse(xhr.response);
//                 callback(null, response);
//             } else {
//                 callback(xhr.response, null);
//             }
//         }
//     }

//     xhr.send();
// }

// const base_url = 'https://jsonplaceholder.typicode.com';

// getRequest(`${base_url}/posts/1`, (err, res) => {
//     if(err){
//         throw new Error('Error Occurred');
//     }

//     let {userId} = res;

//     getRequest(`${base_url}/users/${userId}`, (err, res) => {
//         if(err){
//             throw new Error('Error Occurred');
//         }

//         getRequest(`${base_url}/comments/${res.id}`, (err, res) => {
//             if(err){
//                 throw new Error('Error Occurred');
//             } else {
//                 console.log(res);
//             }
//         })
//     })
// })


// --- Promise in JS ---

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 4000, 'I am done (One).')
//     // setTimeout(() => {
//     //     resolve('I am done (one).');
//     // }, 4000)   // this is also possible
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'I am done (Two).')
// });

// p1.then((value) => {
//     console.log(value);
// })

// p2.then((value) => {
//     console.log(value);
// })


// function getIphone(isPassed){  // use case of Promise
//     let p  = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(isPassed){
//                 resolve('I am done.');
//             } else {
//                 reject('I am done (One).');
//                 // reject(new Error('I am not done.'));  //  this is also possible.
//             }
//         }, 3000)
//     })

//     return p;
// }

// // let x = getIphone(false);   // that's also working don't know why

// getIphone(false).then((value) => {   // that's the way
//     console.log(value);
// }).catch((err) => {
//     console.log(err);
//     // console.log(err.message);
// })


//  --- Using Promise instead of Callback function in AJAX work ---

// const base_url = 'https://jsonplaceholder.typicode.com';

// function getRequest(url) { // Using Promise() instead of Callback Function
//     return new Promise((resolve, reject) => {   // return a Promise Object
//         var xhr = new XMLHttpRequest();
//         xhr.open('get', url);

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     let response = JSON.parse(xhr.response);
//                     resolve(response);
//                 } else {
//                     reject(xhr.status);
//                 }
//             }
//         }

//         xhr.send();
//     })
// }

// getRequest(`${base_url}/users/1`)
//     .then((value) => {
//         console.log(value);
//     }).catch((err) => {
//         console.log(err);
//     })

// fetch(`${base_url}/users/1`)    // same thing using Fetch Api
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         return Promise.resolve('Extra Resolve Check 1.');  // that's also psbl
//     })
//     .then((value) => {
//         console.log(value);
//         return Promise.resolve('Extra Resolve Check 2.');
//     })
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((e) => {
//         console.log(e);
//     })


// --- Functionalities of Promise Api in JS ---

// // function delay(x, str){
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             resolve(str)
// //         }, x*1000)
// //     })
// // }

// let delay = (x, str) => new Promise((resolve) => {   // using Arrow Function
//     setTimeout(() => {
//         resolve(str);
//     }, x*1000)
// })

// let d1 = delay(4, 'One');
// // delay(1, 'One').then((v) => console.log(v));

// let d2 = delay(1, 'Two');
// // delay(2, 'Two').then((v) => console.log(v));

// let d3 = delay(2, 'Three');
// // delay(3, 'Three').then((v) => console.log(v));

// let d4 = delay(3, 'Four');
// // delay(4, 'Four').then((v) => console.log(v));

// let promiseArr = [d1, d2, d3, d4];

// Promise.all(promiseArr).then((v) => console.log(v)); // which returns an array

// Promise.race(promiseArr).then((v) => console.log(v));

// Promise.resolve('Check').then((v) => console.log(v));

// Promise.reject(new Error('Check One')).catch((v) => console.log(v.message));


// let p1 = new Promise((resolve) => {
//     setTimeout(resolve, 3000, 'One');
// })

// let p2 = new Promise((resolve, reject) => {   // to check reject; is there
//     setTimeout(reject, 4000, 'Two');
// })

// let p3 = new Promise((resolve) => {
//     setTimeout(resolve, 2000, 'Three');
// })

// let promiseArr = [p1, p2, p3];

// // Promise.all(promiseArr)
// //     .then((v) => console.log(v))
// //     .catch((v) => console.log(v))

// Promise.race(promiseArr)
//     .then((v) => console.log(v))
//     .catch((v) => console.log(v))


// --- Async Await (Handy Feature for Promise) in JS ---

// // async function x (){
// //     return 'Test Value'
// // }

// // x().then((v) => console.log(v));

// let p1 = new Promise((resolve) => {
//     setTimeout(resolve, 3000, 'Test Value')
// });

// async function x(){   // what async-await can do
//     let v = await p1;  // use await to resolve p1's value
//     console.log(v);    // this will be printed after(3s) await is executed
// }

// x();


// async function newAsync() {
//     try {
//         let v = await fetch('https://jsonplaceholder.typicode.com/users');
//         let u = v.json();
//         let k = await u; // await works same as 'then' in Promise

//         // basically await uses to resolve any Promise instead of using 'then'

//         // console.log(k);
//         console.log(k.map((v) => v.name));
//     } catch (e) {        // using try-catch block to catch Error
//         console.log(e);
//     }
// }

// newAsync();


// let promiseArr = [Promise.resolve('One'), Promise.resolve('Two'), Promise.resolve('Three')];

// async function promiseAll(){
//     let result = await Promise.all(promiseArr);   // using 'await' keyword instead of 'then' to resolve a Promise
//     console.log(result);
// }

// promiseAll();


// ---- Async Iterator & For await of loop in JS ----

// let x = {
//     name: 'Ainul Hossain',
//     age: 23,
//     varsity: 'NSTU',
//     email: 'ainulsakibs@gmail.com',

//     [Symbol.asyncIterator]: function () {  // implementation of asyncIterator
//         let count = Object.entries(this);
//         let len = count.length;
//         let index = 0;

//         return {
//             next: function () {
//                 if (len > 0) {
//                     let result = {
//                         done: false,
//                         value: count[index][1]
//                     }
//                     index++;
//                     len--;   
//                     return Promise.resolve(result);
//                 } else {
//                     return Promise.resolve({
//                         done: true,
//                         value: undefined
//                     });
//                 }
//             }
//         }
//     }
// }

// async function forAwait(){
//     for await (let v of x){
//         console.log(v);
//     }
// }

// forAwait();

// // for await (let v of x){   // this also works
// //     console.log(v);
// // }

// // let y = x[Symbol.asyncIterator]();

// // async function asyncIterable(){
// //     console.log(await y.next());
// //     console.log(await y.next());
// //     console.log(await y.next());
// //     console.log(await y.next());
// //     console.log(await y.next());
// // }

// // asyncIterable();

// // console.log(await y.next()) // this also works but only on Chrome Console
// // console.log(await y.next())
// // console.log(await y.next())
// // console.log(await y.next())
// // console.log(await y.next())


// --- Async *Generator in JS ---

// async function* asyncGenerator(){
//     let i = 0; 

//     while(i<5){
//         yield Promise.resolve(i);
//         i++;
//     }
// }

// async function generator(){
//     for await (let v of asyncGenerator()){  // jekhanei async sekhanei await
//         console.log(v);
//     }
// }

// generator();

// // for await (let v of asyncGenerator()){  // this also works
// //     console.log(v);
// // }

// // let z = asyncGenerator();

// // async function asyncGenerate(){
// //     console.log(await z.next());
// //     console.log(await z.next());
// //     console.log(await z.next());
// //     console.log(await z.next());
// //     console.log(await z.next());
// //     console.log(await z.next());
// // }

// // asyncGenerate();

// // console.log(await z.next())   // this also works
// // console.log(await z.next())
// // console.log(await z.next())
// // console.log(await z.next())
// // console.log(await z.next())
// // console.log(await z.next())
