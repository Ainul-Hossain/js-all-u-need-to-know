// var s = 'Ainul' + '\n' + '\n' +
// '    Hossain' + ' Sakib ' + 
// '\n' + '\n' + 'Arif';

// var s =    `Ainul

//    Hossain Sakib

// Arif`;

// var age = 22;
// var myName = 'Ainul Hossain';

// console.log(`My name is ${myName} and I am ${age} years old.
// I am ${age<18?'not an ':'an '}adult.`)

// console.log(myName.padStart(20));
// console.log(myName.padEnd(20, '*'));
// console.log('*'.repeat(5));


//  --- Arrow function in JS ---

// function add(a, b){
//     return a + b;
// } 

// let add = (a, b) => {
//     return a + b;
// }
// let add = (a, b) => a+b;
// let sqr = a => a*a;

// console.log(add(3, 9));


//  --- Arrow functions & this in JS ---

// function x (){
//     console.log(this);
// }

// x();

// var name = 'Sakib';

// let person = {
//     name: 'Ainul Hossain',
//     print: function (){
//         setTimeout(() =>{
//             console.log(this);
//             console.log(`Hello, ${this.name}`);
//         }, 1000)
//     }
// }

// person.print();


//  --- Default Parameters in JS ---

// function sqrt(n = 3) {
//     return n * n;
// }

// console.log(sqrt());


//  ---- Rest & Spread Operator in JS ----

// function sum (b, c,...a){   // rest operator
//     // return a.reduce((acc, val) => acc + val);  // 18
//     return a;
// }

// //console.log(sum(1, 3, 'Ainul', 'Sakib', 'Hossain', 'Arif'));

// let x = [1, 2, 3, 4];
// console.log(...x);

// let x = {
//     a: 10, 
//     b: 20, 
//     c: 30
// };

// let y = {...x}
// console.log(y)
//let z = Object.assign({},x) // another way of cloning Object


//  --- Enhance Object in JS ---

// let a = 10,
//     b = 20;

// let x = {
//     //a: a, 
//     a, // ES6 feature 
//     //b: b
//     b,
//     // print: function (){
//     //    console.log(this);
//     //}
//     print() { // ES6 feature (without function keyword) 
//         console.log(this);
//     }
// }

// console.log(x)


//  --- Destructuring in JS** ---

// let person = {
//     name: 'Ainul',
//     email: 'ainulsakibs@gmail.com',
//     address: {
//         city: 'Chittagong',
//         country: 'Bangladesh'
//     }
// }

// let {name, email, address, address:  {city, country}} = person;
// console.log(address);

// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let [first, second,,,,,,,,ten] = x;   // Array Destructuring
// console.log(first)

// let [a, b, ...rest] = [10, 29, 30, 40, 50];
// console.log(rest)

// let {a = 10, b} = {a: 1, b: 2};   // also possible
// console.log(a)

// let {a: b = 10, c: d = 30} = {a: 66};   // another way
// console.log(b)
// console.log(d)


//  --- ObjectFromEntries in JS ---

// let x = {
//     a: 10, 
//     b: 20
// }
// // console.log(Object.entries(x))   // key, value pair
// //console.log(Object.fromEntries(Object.entries(x)))

// let objArr = [ ['name', 'Ainul Hossain'], ['varsity', 'NSTU'] ];
// console.log(Object.fromEntries(objArr))


// --- Symbol in JS ---

// let sym1 = Symbol('First Symbol');
// let sym2 = Symbol('Second Symbol');
// // let sym1 = 'Ainul'; // (X) error ! not possible
// // console.log(sym1);

// // alert(sym1);   // এটা এরর শো করবে। implicitly string e convrt hbe na
// // console.log(sym1.description) // এটা ক্রোমের কনসোলে শো করবে।
// console.log(sym1);
// console.log(typeof sym1.valueOf());
// console.log(typeof sym2.toString());
// console.log(sym1 === sym2)

// var toss = {
//     HEAD: Symbol('HEAD'),
//     TAIL: Symbol('TAIL')
// }

// console.log(toss.HEAD == toss.TAIL);  // return false 

// let x1 = Symbol.for('First');
// let x2 = Symbol.for('First');

// console.log(x1 == x2)  // return true; 

// let sym1 = Symbol('age')

// let person = {};

// person.name = 'Ainul';
// person.varsity = 'NSTU';
// person[sym1] = 23;    // make private property using Symbol()

// // console.log(person);

// for(let key in person){
//     console.log(key)         // iterate করলেও ঐ প্রোপার্টিকে পাওয়া যাবে না। 
// }


//  ---- How to Create External Prototype method using Symbol() ----

// let includes = Symbol('This is My own includes method.');

// Array.prototype[includes] = () => {
//     console.log('This is external prototype method using Symbol().')
// }

// let x = [1, 2, 3, 4];
// x[includes]();  // my own created external prototype method.

// // console.log(x.includes(2));   // original includes method.

// // console.log(Array.prototype)


// --- We can also Create(another V) Existing Method as we need, using Symbol() ---

// // class Person {   // ref: Sumit Saha
// //     constructor(name){
// //         this.name = name;
// //         // this[Symbol.search] = function (string){
// //         //     console.log(string.indexOf(this.name) >= 0 ? 'Found' : 'Not Found');
// //         // }
// //     }

// //     // [Symbol.search](string){
// //     //     console.log(string.indexOf(this.name) >= 0 ? 'Found' : 'Not Found')
// //     // }
// // }

// let p1 = new Person('Ainul');

// let p1 = {    //  by Object literal 
//     name: 'o',
//     [Symbol.search]: function (string){
//         console.log(string.indexOf(this.name) >= 0 ? 'Found' : 'Not Found')
//     }
// }   

// 'Ainul Hssain'.search(p1);      



//  ---- Basic Iterator in JS ----

// // var x = 'Ainul Hossain';
// var x = [1, 2, 3];

// function iterateArray(collection) {
//     let i = 0;
//     return {
//         next: function () {
//             return {
//                 done: i >= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }

// let iterate = iterateArray(x);
// // console.log(iterateArray(x).next());

// console.log(iterate.next());
// console.log(iterate.next());
// console.dir(iterate.next);
// console.log(iterate.next());
// console.log(iterate.next());

// console.log(iterateArray(x).next())
// console.log(iterateArray(x).next())
// console.dir(iterateArray(x).next);


//  ---- Iterator with Symbol in JS*** ----

// var x = [1, 2, 3];
// var z = 'ABC';

// // console.log(x[Symbol.iterator]);
// // console.log(z[Symbol.iterator]);


// let iterateArray = x[Symbol.iterator]();

// console.log(iterateArray.next());
// console.log(iterateArray.next());
// console.log(iterateArray.next());
// console.log(iterateArray.next());

// let iterateStr = z[Symbol.iterator]();

// console.log(iterateStr.next());
// console.log(iterateStr.next());
// console.log(iterateStr.next());
// console.log(iterateStr.next());


//  ---- Custom Iterateable Object in JS ----

// //যদি অবজেক্টের মধ্যে সিরিয়ালি নাম্বার স্টোর করা থাকে। তবে আমরা এইটা ইউজ করব।  নিচে আরো পার্ফেক্ট ইটারেবল অবজেক্ট ক্রিয়েট করে দেখানো হয়েছে।
// // var y = 'z';
// var x = {     
//     start: 1,  
//     end: 5,
//     [Symbol.iterator]: function (){
//         let currentValue = this.start;
//         let self = this;
//         return {
//             next: function (){
//                 return {
//                     done: currentValue>self.end,
//                     value: currentValue>self.end ? undefined: currentValue++
//                 }
//             }
//         }
//     }
// }

// // for (let v of x){
// //     console.log(v);
// // }

// let iterateObject = x[Symbol.iterator]();

// console.log(iterateObject.next());
// console.log(iterateObject.next());
// console.log(iterateObject.next());
// console.log(iterateObject.next());
// console.log(iterateObject.next());
// console.log(iterateObject.next());


// --- Generators in JS ---

// let arr = [100, 200, 300, 400];

// function* x(arr){
//     // console.log('Ainul Hossain');
//     // yield 5;
//     // yield 2;
//     // yield arr;
//     // yield 3;
//     for(let i = 0; i<arr.length; i++){
//         yield arr[i];
//     }
// }

// let iterator = x(arr);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next().value);
// // console.log(iterator.next().done);
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());


// --- How to make Object Iterable using Symbol.iterator & Generator ---

// let x = {     // Using [Symbol.iterator]
//     name: 'Ainul Hossain',
//     age: 23,
//     email: 'ainulsakibs@gmail.com',
//     varsity: 'NSTU',
//     // [Symbol.iterator]: function () {
//     //     let entries = Object.entries(this);
//     //     let count = entries.length;
//     //     let index = 0;
//     //     return {
//     //         next: function () {
//     //             if (count > 0) {
//     //                 let result = {
//     //                     done: false,
//     //                     value: entries[index][1]
//     //                 };
//     //                 count--;  // this line is very very Important
//     //                 index++;
//     //                 return result;
//     //             } else {
//     //                 return {
//     //                     done: true, 
//     //                     value: undefined
//     //                 }
//     //             }
//     //         }
//     //     }
//     // }
// }

// Object.prototype[Symbol.iterator]= function () {   //we can also do it from Object.prototype
//   let entries = Object.entries(this);
//   let count = entries.length;
//   // let count = entries.length;
//   let index = 0;
//   return {
//       next: function () {
//           if (count > 0) {
//               let result = {
//                   done: false,
//                   value: entries[index][1]
//               };
//               count--;
//               index++;
//               return result;
//           } else {
//               return {
//                   done: true, 
//                   value: undefined
//               }
//           }
//       }
//   }
// }

// for(let v of x){
//     console.log(v);
// }

// console.log([...x]);  // now x is iterable because [Symbol.iterator] (iterator implementation) is implemented inside x Object and/or Object Prototype.

// let iterator = x[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// ---- --- ---- --- --- Now using *generator function ---- ---- ---- ----

// let x = {     // Using *Generator function (see below)
//     name: 'Ainul Hossain',
//     age: 23,
//     email: 'ainulsakibs@gmail.com',
//     varsity: 'NSTU'
// }

// function* iterateObject(obj){  // which returns a generator; acts like iterator
//   let entries = Object.entries(obj);
//   for(let v of entries){
//     yield v[1];
//   }
// }

// for(let v of iterateObject(x)){
//   console.log(v);
// }

// // console.log([...iterateObject(x)]);

// // let iterator = iterateObject(x);

// // console.log(iterator.next())
// // console.log(iterator.next())
// // console.log(iterator.next())
// // console.log(iterator.next())
// // console.log(iterator.next())


//  ---- Set in JS*** ----

// let x = new Set([1, 2, 3, 'Ainul']);
// // x.add(4);
// x.add(5);
// x.add(6);
// x.add(5);
// x.add(6);
// x.add(7);

// console.log(x);  // set maintain unique value;

// // for(let item of x){
// //     console.log(item)
// // }

// // let z = x.entries();

// // // console.log(z);  // will print setIterator 
// // console.log(z.next())   // hence z is now an iterator
// // console.log(z.next().value)
// // console.log(z.next().value)


//  ---- Map in JS ----

// let a = {a: 10}

// let x = new Map([
//     ['name', 'Ainul'],
//     ['age', 23],
//     [a, 'Key-check'], // an object as key!!!
//     ['name', 'Sakib'], // Map maintain key uniqueness
// ]);

// x.set('varsity', 'NSTU');
// x.delete('age');
// //x.clear();
// // console.log(x.get('name'))
// // console.log(x.keys())
// // console.log(x.values())
// // console.log(x.entries())
// // console.log(x)

// // let y = new Map(x);    // cloning map!!
// // console.log(y)

// // for(let [k,v] of x){
// //     console.log([k,v])
// // }

// a = null;    //  Garbage is not collected, that's why WeakMap.
// x.forEach((val, key) => console.log([key, val]))

// let first = new Map([
//     [1, 'one'],
//     [2, 'two'],
//     [3, 'three'],
// ])

// let second = new Map([
//     [1, 'uno'],
//     [2, 'dos']
// ])

// let merged = new Map([...first, ...second, [1, 'eins']]);   // we can merge maps!!

// console.log(merged.get(1))
// console.log(merged.get(2))
// console.log(merged.get(3))


// --- WeakSet in JS ---

// let a = {a: 10}, b = {b: 20}, c = {c: 30};

// let x = new WeakSet([a, b, c]);

// b = null;

// x.delete(c);

// console.log(x)
// console.log(x.has(b))


// --- WeakMap in JS ---{

// let a = {a: 10}, b = {b: 20}, c = {c: 30}, e = new Set([1, 2, 3]);

// let x = new WeakMap([
//     [a, 10], 
//     [b, 20], 
//     [c, 30],
//     [e, 'random']
// ])

// a = null;
// e = null;

// let d = {d: 40};
// x.set(d, 40);

// x.delete(c);

// console.log(x)
// console.log(x.has(e));  // print 'false'


//  --- Class in JS ---

// function Rectangle (width, height){
//     this.width = width;
//     this.height = height;
//     this.name = 'Ainul Hossain';
// }

// Rectangle.prototype.draw = function (){
//     console.log(this);
//     console.log('Drawing this....');
// }

// let rect1 = new Rectangle(12, 15);
// // rect1.draw();
// // console.log(rect1.name)
// console.log(rect1)

// class Rectangle {
//     constructor (width, height){
//         this.width = width;
//         this.height = height;
//         this.name = 'Ainul Hossain';
//         //this.age = 24;
//         this.test = function() {
//             console.log('This is inside Constructor.')
//         };

//         this.check = function (){
//             console.log("I am for checking purpose.")
//         } 
//     };
//     //age = 23   // property declare, this is also possisble, but show in Chrome // this is Public Field Declaration (holds default value)
//     // test = function (){   // method declare, also possible, only in Chrome

//     // } // this is Public Field Declaration (holds default value)

//     draw (){    // this method will show in Prototype
//         console.log('Drawing....');
//     }
// }
// // Rectangle.prototype.ainul = 'Hossain';   // same as Constructor function

// let rect1 = new Rectangle(12, 15);
// // console.dir(Rectangle);
// console.log(rect1);
// // console.log(typeof rect1);
// // rect1.draw();
// // rect1.check();


// --- Static Method in JS ---

// class Rectangle {
//     constructor (width, height){
//         this.width = width;
//         this.height = height;
//     };

//     print (){    // this method will show in Prototype
//         console.log('Width: ' + this.width + ' Height: ' + this.height);
//     }

//     static create (str){    // static method
//         let rect = JSON.parse(str);
//         return new Rectangle(rect.width, rect.height);
//     }

//     static check (){    // static method
//         return 'Static Check.';
//     }
// }

// let str = '{"width": 17, "height": 25}';
// let rect1 = Rectangle.create(str);

// console.log(rect1);
// rect1.print();
// // console.log(rect1 instanceof Rectangle);

// // let rect2 = new Rectangle(17, 25);
// // console.log(rect2.check());     // is not possible


// --- Private Data with Symbol() in Object & Class in JS ---

// let _check = Symbol();

// function X(name, email){
//     this.name = name;
//     this.email = email;

//     this.task = function (){
//         console.log(this.name);
//     }
// }
// X.prototype[_check] = function (){
//     console.log('This is check.')
// }

// let y = new X('Ainul Hossain', 'ainulsakibs@gmail.com');

// for(let prop in y){
//     console.log(prop)   // _check method will not shown here
// }

// let name = Symbol('name');
// let email = Symbol('email');
// let task = Symbol('task');

// let x = {
//     [name]: 'Ainul Hossain',
//     [email]: 'ainulsakibs@gmail.com',

//     [_task]: function (){
//         console.log('This is task.')
//     }
// }

// console.log(x);

// for(let prop in x){
//     console.log(prop);
// }

// let _name = Symbol();
// let _email = Symbol();
// let _task = Symbol();
// let _check = Symbol();

// class X {
//     constructor (name, email){
//         this[_name] = name;    // private property
//         this[_email] = email;

//         this[_task] = function (){    // private method
//             console.log('This is task.');
//         }
//         this.anotherTask = function (){
//             console.log('This is another Task.')
//         }

//         // this.name = name;    // normal property 
//         // this.email = email;

//         // this.task = function (){   // normal method
//         //     console.log('This is task.');
//         // }
//     }

//     anotherCheck (){
//         console.log('This is another check.')
//     }
//     [_check] (){
//         console.log('This is check.');
//     }
// }

// let y = new X('Ainul Hossain', 'ainulsakibs@gmail.com');
// // console.log(y);

// for(let prop in y){
//     console.log(prop)
// }

// console.log(Object.getOwnPropertySymbols(y))

// let z = Object.getOwnPropertySymbols(y);
// console.log(y[z[1]])


// ---- Private Properties With WeakMap in JS ----

// let n = new WeakMap();
// let e = new WeakMap();

// function X (name, email){
//     n.set(this, name);
//     e.set(this, email);
// }

// let y = new X('Ainul Hossain', 'ainulsakibs@gmail.com');
// console.log(y)

// let _name = new WeakMap();
// let _email = new WeakMap();
// let task = new WeakMap();

// class X {
//     constructor (name, email){
//         this.size = 100;
//         _name.set(this, name);    // using _name not to conflict with name parameter
//         _email.set(this, email);

//         task.set(this, () => {    // ekhane normal function use korle pore call method diye this ke bind kore dite hoto.
//             console.log(this.size);    
//         })
//     }

//     check (){
//         console.log(_name.get(this), _email.get(this));
//         task.get(this)();
//     }
// }

// let y = new X('Ainul Hossain', 'ainulsakibs@gmail.com');
// y.check()

// for (let prop in y){
//     console.log(prop);
// }


// ---- Getter-Setter & Official Private Prop & Method in ES6 ----

// let _name = new WeakMap();
// let _email = new WeakMap();
// let task = new WeakMap();

// class X {
//     constructor (name, email){
//         this.size = 100;
//         _name.set(this, name);    // using _name not to conflict with name parameter  (actual Private Property.)
//         _email.set(this, email);

//         task.set(this, () => {    // ekhane normal function use korle pore call method diye this ke bind kore dite hoto. (actual Private Method.)
//             console.log(this.size);    
//         })
//     }

//     #eat = function() {   // Private Method (# denotes something as private)
//         return _name.get(this) + ' is eating rice.';
//     };

//     get eat (){    // getter
//         return this.#eat();   // how to get Private Method.
//     }

//     #age = 20;    // Private Property (# denotes something as private)

//     get age (){
//         return this.#age;    // how to get Private Property
//     }

//     set age (value){    // setter
//         this.#age = value;   // how to set Private Property value
//     }

//     get name(){
//         return _name.get(this);
//     }

//     set name (value){
//         _name.set(this, value);
//     }

//     check (){
//         console.log(_name.get(this), _email.get(this));
//         task.get(this)();
//     }
// }

// let y = new X('Ainul Hossain', 'ainulsakibs@gmail.com');
// y.name = 'Ainul Sakib';
// y.age = 23;

// console.log(y.eat)

//           -------------- another Example: -------------

// function Person (name, email){
//     this.name = name;
//     this.email = email;

//     Object.defineProperty(this, 'age', {
//         value: 23
//     })

// }

// Object.defineProperty(Person, 'aa', {   // this property will go to the Function Constructor object. and we can access it from there.
//     value: 'yy'
// })

// class Person {
//     constructor(name, email){
//         this.name = name;
//         this.email = email;

//         // Object.defineProperty(this, 'age', {
//         //     value: 23
//         // })
//     }

//     // check = 'check';

//     // eat (){
//     //     return 'I eat rice.'
//     // }

//     // get x (){    // act like a Object property but Inside of class Prototype
//     //     return 8;
//     // }
// }

// let p1 = new Person('Ainul Hossain', 'ainulsakibs@gmail.com');

// console.log(p1);

// for(let prop in p1){
//     console.log(prop)
// }


// --- From there We learn ES6 modules ---

// We have to go to ES6_Modules Folder to learn ES6 modules. ****


// --- Error in JS ---

// // console.log(a)

// let n = 10;

// if(n>5){
//     throw new Error('The Number is greater than 5.')
// }

// // if(n>7){
// //     throw new RangeError('Number is greater than 7.')
// // }


// --- Error Handling with if-else in JS ---

// function changeToInt (v){
//     let result = Number.parseInt(v);

//     if(!result){
//         throw new Error('Please provide a valid Number or Number String.');
//         // return 'Please provide valid Number or Number String.';
//     } else {
//         return result;
//     }
// }

// let check = changeToInt('ainul04');
// console.log(check);


// --- Error Handling with try-catch in JS ---

// function makeWords(text) {
//     try {
//         let str = text.trim();
//         let words = str.split('');
//         return words;
//     } catch (e) {
//         // console.log(e);
//         return e;
//         // console.log(e.message);   // because error is an Object.
//         // console.log('Please provide valid text.') // this is also possible
//     }

//     // return 'This line is after try-catch block.'

//     // let str = text.trim();
//     // let words = str.split(' ');
//     // return words;
// }

// let check = makeWords({});
// console.log(check)


// --- Throwing an Error in JS ---

// try {
//     console.log('This is 1.')
//     console.log('This is 2.')
//     throw new Error('There\'s an Error.');
//     console.log('This is 3.')
//     console.log('This is 4.')
// } catch(e){
//     console.log(e);
//     // console.log(e.message)
// }

// console.log('This line is outside of try-catch block.');


// --- Finally Block in JS ---

// try{
//     console.log('This is line 1.')
//     console.log('This is line 2.')
//     // throw new Error('This is an Error.');
//     console.log('This is line 3.')
//     console.log('This is line 4.')
// } catch(e){
//     console.log(e);
// } finally{
//     console.log('This is finally block.'); // when we have to print something mandatory after try or catch block.
// }


// --- Optional Catch Binding in JS ---

// try {
//     console.log('This is line 1.')
//     console.log('This is line 2.')
//     throw new Error('There\'s an Error.')
//     console.log('This is line 3.')
// } catch {    // there's no (e) parameter in catch block
//     console.log('This is a Custom Error message.');
// } finally {
//     console.log('This is finally block.');
// }


// --- How to Create Custom Error in JS*** ---

// // function CustomError (msg, xyz){     // in ES5 Way
// //     let instance = new Error(msg);
// //     instance.name = 'CustomError';

// //     // if(Error.captureStackTrace){
// //     //     Error.captureStackTrace(instance, CustomError);
// //     // }  // in ES5 this block is Mandatory*

// //     instance.extra = xyz;  // We can create extra custom property

// //     return instance;
// // }

// // CustomError.prototype = Object.create(Error.prototype);
// // CustomError.prototype.constructor = CustomError;


// class CustomError extends Error {    // ******in ES6 Way*******
//     constructor(msg, xyz) {
//         super(msg);

//         if (Error.captureStackTrace) {
//             Error.captureStackTrace(this, CustomError);   // to check where error happen
//         } // in ES6 this block is not Mandatory

//         this.name = 'CustomError';
//         // this.message = msg;   // not needed

//         this.extra = xyz;  // We can create extra Custom Property;
//     }
// }

// try {
//     console.log('This is line1.')
//     console.log('This is line2.')
//     throw new CustomError('This is Custom Error.', 'This is Extra Thing');
//     console.log('This is line3.')
//     console.log('This is line4.')
// } catch(e) {
//     console.dir(e);
//     // console.log(e.extra);
//     // console.log(e.name)
//     // console.log(e.message);
//     // console.log(e.stack)
// } finally {
//     console.log('This line will be printed everytime.')
// }
