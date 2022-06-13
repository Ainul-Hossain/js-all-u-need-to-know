// console.log('Ainul Sakib');
// --- All OOP code here ---

// var rect = {
//     width: 40,
//     height: 50,

//     draw: function (){
//         console.log('I am a Rectangle.');
//         console.log('My Width is ' + this.width);
//// https://stackoverflow.com/questions/12799702/javascript-this-versus-object-name (why 'this')
//     }
// }

// rect.draw();

// rect.width = 60;

// rect.draw();

// rect.width = 100;

// rect.draw();

// --- Why "this" !!! ---

// var user = {

//     name : 'John Doe',

//     show_name : function(){

//         // alert(this.name);
//         console.log(this.name);

//         // OR

//         // alert(user.name);
//         console.log(user.name);
//     }
// };

// user2 = Object.create( user );
// user2.name = "someone else";
// user2.show_name();
// user.show_name();
// user.show_name();
// user2.show_name();

// var rect = {
//     width: 40,
//     height: 60,

//     draw: function (){
//         // console.log('I am a rectangle');
//         this.print();
//         // console.log(this);
//     }, 

//     print: function (){
//         console.log('My Width is ' + this.width);
//         console.log('My height is ' + this.height);
//     }
// }

// rect.draw();

// function sum (){
//     rect.print();
//     // console.log(this);
// }

// sum();

// var circle = {
//     width: 100, 

//     draw: rect.draw
// }

// circle.draw();

// --- Factory Pattern in JS ---

// var rect = {
//     width: 100,   // basic Object Literal format
//     height: 200,

//     draw: function () {
//         console.log('My Width is ' + this.width);
//         console.log('My Height is ' + this.height);
//     }
// }

// rect.draw();

// var createRect = function (width, height) { // factory pattern format
//     return {
//         width: width,
//         height: height,

//         draw: function () {
//             console.log('I am a Rectangle.');
//             console.log('My Width is ' + this.width);
//             console.log('My Height is ' + this.height + '\n');

//             // console.log(`I am a Rectangle. \nMy Width is ${this.width} \nMy Height is ${this.height}\n`) // All Three lines in One line
//         }
//     }
// }

// var rect1 = createRect(10, 20);
// // console.log(rect1);
// rect1.draw();

// var rect2 = createRect(30, 40);
// // console.log(rect2);
// rect2.draw();

// --- Constructor Pattern in JS ---

// var Rectangle = function (width, height){
//     this.width = width;
//     this.height = height;

//     this.draw = function (){
//         console.log('My Width is ' + this.width);
//         console.log('My Height is ' + this.height);
//     }
// }

// var rect1 = new Rectangle(40, 60);
// rect1.draw();
// // rect1.name = 'Ainul Hossain';
// // console.log(rect1);

// var rect2 = new Rectangle(70, 80);
// rect2.draw();

// -- How to add a new item to an object at a specific position with JS: --

// var addToObject = function (obj, key, value, index) {
// 	// Create a temp object and index variable
// 	var temp = {};
// 	var i = 0;
// 	// Loop through the original object
// 	for (var prop in obj) {
// 		if (obj.hasOwnProperty(prop)) {
// 			// If the indexes match, add the new item
// 			if (i === index && key && value) {
// 				temp[key] = value;
// 			}
// 			// Add the current item in the loop to the temp obj
// 			temp[prop] = obj[prop];
// 			// Increase the count
// 			i++;
// 		}
// 	}
// 	// If no index, add to the end
// 	if (!index && key && value) {
// 		temp[key] = value;
// 	}
// 	return temp;
// };

// // Output: 

// // Original object
// var lunch = {
//   sandwich: 'turkey',
//   drink: 'soda',
//   chips: true
// };

// // Add to the end of the object
// var lunchWithDessert = addToObject(lunch, 'dessert', 'cookie');
// // Add between sandwich and drink
// var lunchWithTopping = addToObject(lunch, 'topping', 'tomato', 1);
// // Immutable copy of lunch
// var lunchClone = addToObject(lunch);

// In Normal Way:

// let obj = {b: 1, c: 3};
// let c = Object.assign({b: null , a: 5, c: null}, obj);
// console.log(c);

// let obj = {"1" : "test1","2" : "test2"};
// let c = Object.assign({"key1": "value1"}, obj);
// console.log(c);
// console.log(c['1']);  //in that case not happening, new property added to the end

// --- 'Constructor' in JS ---{

// var sample = function (width, height){   //'factory' pattern
//     return {
//         width: width,
//         height: height,

//         draw: function (){
//             console.log('My Width is ' + this.width);
//             console.log('My Height is ' + this.height);
//         }
//     }
// }

// // console.log(sample(40, 60).constructor);
// var obj = sample(40, 60);
// console.log(obj.constructor);
// console.log(obj.constructor === Object);


// var Sample1 = function (width, height) { //'constructor' pattern
//     this.width = width;
//     this.height = height;

//     this.draw = function () {
//         console.log('My Width is ' + this.width);
//         console.log('My Height is ' + this.height);
//     }
// }

// // console.log(new Sample1(40, 60));
// // console.log(new Sample1(40, 60).constructor);
// var obj1 = new Sample1(55, 66);
// console.log(obj1.constructor);
// // obj1.draw();


// var obj = {};
// console.log(obj.constructor);

// var obj1 = new Object();
// console.log(obj1.constructor);

// var obj2 = Object();
// console.log(obj2.constructor);

// var str = String('Ainul Hossain');
// console.log(str.constructor);
// console.log(str);

// var str1 = 'Ainul Hossain';
// console.log(str1.constructor);

// var str2 = new String('Ainul Hossain');
// console.log(str2);
// console.log(str2.constructor);
// console.log(str2 + ' Sakib');


// --- Functions are Object in JS ---

// var obj = {
//     name: 'Ainul Hossain',
//     age: 20,
//     propetion: 'Student'
// }

// // console.log(obj);
// console.log(obj.name, obj.length);

// function x (){
//     console.log('Sakib');
// }

// // console.log(x.constructor);
// console.log(x.name, x.length);

// function x(a, b, c, d) {

// }

// console.log(x.constructor);
// // console.log(x.length);

// var Rect = new Function('width', 'height', 'x', `this.width = width;
//     this.height = height;
//     this.area = x;

//     this.draw = function () {
//         console.log('My Width is ' + this.width);
//         console.log('My Height is ' + this.height);
//         console.log('My Area is ' + this.area);
//         console.log('Value of x is ' + x);
//     }`
// )

// var rect4 = new Rect(4, 5, 20);
// console.log(rect4);
// // console.log(rect4.length); // Undefined
// rect4.draw();


// --- The "new Function" syntax ---


/*There’s one more way to create a function. It’s rarely used, but sometimes there’s no alternative.*/

// let func = new Function ([arg1, arg2, ...argN], functionBody); // Syntax

// let sum = new Function('a', 'b', 'return a + b');
// console.log(sum(1, 2)); // 3

/*/*Usually, a function remembers where it was born in the special property [[Environment]]. It references the Lexical Environment from where it’s created (we covered that in the chapter Variable scope, closure).

But when a function is created using new Function, its [[Environment]] is set to reference not the current Lexical Environment, but the global one.

So, such function doesn’t have access to outer variables, only to the global ones.*/

// function getFunc() {
//     let value = "test";

//     let func = new Function('alert(value)');

//     return func;
// }
// getFunc()(); // error: value is not defined

// var x = 10;

// function createFunction1() {
//     var x = 20;
//     return new Function('return x;'); // this |x| refers global |x|
// }

// console.log(createFunction1()());   // Output shows at Browser only


/* Syntaxes */

// new Function('a', 'b', 'return a + b'); // basic syntax
// new Function('a,b', 'return a + b'); // comma-separated
// new Function('a , b', 'return a + b'); // comma-separated with spaces

// --- Call Apply Bind method in JS ---

// function myFunc (c, d){
//     console.log(this);
//     console.log(this.a + this.b + c + d);
//     // console.log(c, d);
// }

// myFunc();
// myFunc.call({a: 5, b: 6}, 10, 18);
// myFunc.apply({a: 10, b: 20}, [20, 40]);

// var bindCall = myFunc.bind({a: 15, b: 25});
// bindCall(10, 20);
// // console.log(bindCall);


// --- Pass by value & Pass by reference ---

// var a = 1;   // Example: 1

// function x (){
//     a = 2;
//     console.log(a);
// }

// x();
// console.log(a);

// var a = 1;  // Example: 2 (Pass by Value)

// function x (y){
//     y = 2;
//     console.log(y);
// }

// x(a);
// console.log(a);

// var obj = {  // Example: 3 (Pass by Reference)
//     a: 10,
//     b: 20
// }

// function x (y){
//     y.a = 30;
//     y.b = 40;
//     console.log(y);
// }

// x(obj);
// console.log(obj);

// var computer = {   // Example: 4 (Extra) 
//     isOn: false
// };

// function turnOn(x) {  
//     // x = {
//     //     isOn: true // Object is mutable when we change ValueofObject(explicitly) 
//     // }
//     return x = {
//         isOn: true
//     };
//     // machine.isOn = true;
// }

// // turnOn(computer);
// console.log(turnOn(computer));

// console.log(computer); // false;


//  --- Private Properties In Js*** ---

// var Rectangle = function (width, height){

//     this.width = width;
//     this.height = height;

//     var position = { // Private Property
//         x: 1,
//         y: 2
//     }

//     this.draw = function (){
//         console.log('I am a Rentangle');
//         printProperties();
//     }

//     var printProperties = function (){ //Private Property
//         console.log('My Width is ' + this.width);
//         console.log('My Height is ' + this.height + '\n');
//         console.log('Position of X is: ' + position.x + ' ' + 'and Y is:' + position.y);
//     }.bind(this);
// }

// var rect1 = new Rectangle(23, 45);
// rect1.draw();


// --- Getter Setter in JS ---

// var Rectangle = function (width, height) {
//     this.width = width;
//     this.height = height;

//     var position = {
//         x: 10,   // Have Clear This Topic again & Clear Basic
//         y: 20   // Getter & Setter very Important Topics(programiz.com)
//     }

//     // this.getPosition = position;
//     // this.getPosition = function (){
//     //     return position;
//     // }

//     this.draw = function () {
//         console.log('I am a Rectangle.');
//         printProperties();
//     }

//     var printProperties = function () {
//         console.log('My Width is ' + this.width);
//         console.log('My Height is ' + this.height);
//         console.log('My Position of X is: ' + position.x + ' & ' + 'Y is: ' + position.y);
//     }.bind(this);

//     Object.defineProperty(this, 'position', {
//         get: function () {
//             return position;
//         },
//         set: function (value) {
//             position = value;
//         }
//     })
// }

// var rect2 = new Rectangle(25, 26);
// rect2.draw();
// // console.log(rect2.getPosition());
// console.log(rect2.position);
// rect2.position = {
//     x: 50,
//     y: 60
// };
// rect2.position.x = 1000;
// console.log(rect2.position);
// // rect2.x = {
// //     z: 3,
// //     p: 7
// // }
// // console.log(rect2.x);


//  --- Extra Practice (Before Jump to the Prototype & Inheritance)---

//  --- for - in loop in  JS ---

// var a = {
//     c: 'common',
//     d: 'Ainul',
//     e: 'Hossain',
//     f: 'Sakib',
//     g: 'Arif', 
//     z: 5
// }

// console.log(a['z']);

// // var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // var a = 'Ainul Hossain';

// for (var i in a){
//     // console.log(i);
//     // console.log(a[i], '\n');

//     console.log(a[i]);  // because value of i is string
//     // console.log(typeof i);
// }

// --- for - of loop in JS ---

// var a = ['Ainul', 'Kashem', 'Lucky', 'Hossain', 'Arif'];

// var a = 'Ainul Hossain';

// // var a = {
// //     x: 'Ainul',
// //     y: 'Hossain',  // not possible in for - of loop
// //     z: 'Sakib', 
// //     s: 'Karim',
// //     u: 'Arif'
// // }

// for (var i of a){
//     console.log(i);
// }


//  ---- Property Descriptor in JS ----

// var country = {
//     name: 'Bangladesh'
// }

// // console.log(Object.getOwnPropertyDescriptor(country.__proto__, 'toString'));

// // delete country.__proto__.toString;

// console.log(Object.getPrototypeOf(country));

// function Person(name){
//     this.name = name;
// }

// var p1 = new Person('Ainul Hossain');

// console.log(Object.getPrototypeOf(p1));


//  ---- Using Instance and Prototype Members in JS ----

// function X(name, age){
//     this.name = name;
//     this.age = age;
//     this.getAge = function () {
//         return this.eat();
//     }
// }

// X.prototype = {
//     eat: function (){
//         // this.getAge();
//         return this.name + ' is ' + 'eating.';
//     },
//     anotherName: 'Ainul Arif',
//     fullName: 'Ainul Hossain'
// }

// var p1 = new X('Ainul', 22);

// var p2 = new X('Sakib', 23);

// // console.log(Object.keys(p1));

// Object.defineProperty(p1, 'eat', {
//     enumerable: false
// })

// for (var i in p1){
//     console.log(i);
// }

// console.log(p1.eat());


// --- Object.create() in JS ---

// var x = {
//     name: 'Ainul Hossain',
//     age: 22
// }

// var y = Object.create(x, {
//     passion: {
//         value: 'Coding',
//         // enumerable: true
//     },
//     hobby: {
//         value: 'Coding',
//         // enumerable: true
//     }
// });

// console.log(y);


//  ---- First Prototypical Inheritance in JS ----

// function preDeclare(Child, Parent){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;  // Mandatory Constructor resetting
// }

// function Common(study) {
//     this.study = study;
// }
// Common.prototype = {
//     relegion: 'Islam',
//     common: function (){
//         console.log('This is common method.')
//     } 
// };

// function Person(name, study) {
//     Common.call(this, study);
//     this.name = name
// }
// preDeclare(Person, Common); 
// Person.prototype.language = 'Bengali';
// Person.prototype.common = function () {
//     Common.prototype.common.call(this);
//     // Person.prototype.__proto__.common();  // Constructor function এর prototype এর সরাসরি __proto__ তে গিয়ে ভ্যালু গুলো অ্যাড হয়। 
//     console.log('XYZ');
// };

// var son = new Person('Ainul', true);
// // console.log(son);
// // console.log(son instanceof Person);

// function Company(name, study){
//     Common.call(this, study);
//     this.name = name;
// }
// preDeclare(Company, Common);

// var it = new Company('Khan IT', 'Coding');
// // console.log(it);
// console.log(it instanceof Company);
// console.log(it instanceof Common);


// ---- Inheritance & Composition Mixing in JS ----

// var canWalk = {
//     walk: function (){
//         console.log('Walking...');
//     }
// }

// var canEat = {
//     eat: function (){
//         console.log('Eating...');
//     }
// }

// var canSwim = {
//     swim: function (){
//         console.log('Swimming...');
//     }
// }

// // var person = Object.assign({}, canWalk, canEat);   // By Composition Mixing
// // person.name = 'Ainul Hossain';
// // console.log(person);

// function mixing (target, ...sources){
//     Object.assign(target, ...sources);
// }

// function Person(name){
//     this.name = name;
// }
// // Object.assign(Person.prototype, canWalk, canEat);
// mixing(Person.prototype, canWalk, canEat);   // By Inheritance, when we have Constructor function 
// var person = new Person('Ainul Sakib');
// console.log(person);
// person.eat();

// function Fish(name){
//     this.name = name;
// }
// // Object.assign(Fish.prototype, canEat, canSwim);
// mixing(Fish.prototype, canEat, canSwim);
// var goldFish = new Fish('bla bla bla');
// console.log(goldFish);
// goldFish.swim();


//  ----

// // constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// // creating objects
// const person1 = new Person();
// const person2 = new Person();

// // adding property to constructor function
// Person.prototype.gender = 'male';

// // prototype value of Person
// console.log(Person.prototype);

// // inheriting the property from prototype
// console.log(person1);
// console.log(person2.gender);


// --- Understanding "this" ---

// var person = {
//     name: 'Ainul Hossain',

//     print: function (){
//         // console.log(this);
//         console.log('Hello, ' + this.name);
//     }
// }

// // person.print();

// var myFunc = person.print.bind(person);

// // var myFunc = function (){
// //     console.log('Hello, ' + this.name);
// // }
// console.log(myFunc);
// myFunc();

// Example: 02

// function add (num){
//     console.log(this);
//     return this.value + num;
// }

// console.log(add(10));

// // console.log(add());

// var obj = {
//     value: 10
// }

// var result = add.bind(obj);

// console.log(result(10)); // now 'this' keyword does not return 'window' object

// Example: 03

// var person = {
//     name: 'Ainul Hossain',

//     print: function (){
//         // console.log(this);
//         // console.log(this.name);

//         // var q = this.name;

//         setTimeout(function (){
//             console.log(this);
//             console.log('Hello, ' + this.name);
//             // console.log(q);
//         }.bind(this), 2000)
//     }
// }

// person.print();