// console.log("Hello World 45");
// console.log(9+9);


// var x = "45.89";
// var int = Number.parseInt(x);
// var int = Number.parseFloat(x);
// console.log(int);
// console.log(typeof int,"\n");

// var after = 8e8;
// console.log(after+"\n");

// var before = 8e-3;
// console.log(before);
// console.log(typeof before,"\n");


// var i = 9999999999999999;
// console.log(i);
// console.log(typeof i,"\n");

// var i = '9999999999999999';
// console.log(i);
// console.log(i.length);
// console.log(typeof i);


// var myNumber = 2;
// while (myNumber != Infinity) {   // Execute until Infinity
//   myNumber = myNumber * myNumber;
// }   

// console.log(myNumber);
// console.log(typeof myNumber);

// console.log(-2/0);

// console.log(07);

// var myNumber = 32;

// var x = myNumber.toString(10);

// console.log(x); //Decimal
// console.log(typeof x);

// console.log(myNumber.toString(32));
// console.log(myNumber.toString(16)); //Hexadecimal
// console.log(myNumber.toString(8)); //Octal
// console.log(myNumber.toString(2)); //Binary


// var x = 123;

// var y = new Number(123);

// console.log(x);
// console.log(y);

// console.log(typeof x);
// console.log(typeof y);

// var x = 100/"Apple";
// console.log(x);
// console.log(typeof x);
// console.log(isNaN(x)+"\n");

// var w = NaN;
// var z = w + " 5";
// console.log(z);
// console.log(typeof z);

// var x = 123;

// var y = x.toString();
// console.log(y);
// console.log(typeof y);
// var w = (12+3).toString();
// console.log(w);
// console.log(typeof w);

// var x = 9.656;

// var y = x.toExponential();

// var y = (5.5656).toExponential(6);
// console.log(y);
// console.log(typeof y);

// var x = 9.656;

// var y = x.toFixed(0);

// // var y = (100).toFixed();
// var y = x.toPrecision(1);
// console.log(y);

// var x = 123;

// var y = x.valueOf();
// console.log(y);
// console.log(typeof y);


// var x = 6;
// var y = x.MAX_VALUE; //Not Possible
// console.log(y);

// var n = 0756;
// console.log(Number(n.toString(10)));

// var user = "John";
// console.log(user??"anonymous");

// var lastName = null;
// var firstName = null;
// var fullName = "Ainul";
// var nickname;

// console.log(lastName??firstName??fullName??nickname??"anonymous");

// Arrow Function

// let sum = (a, b) => a + b;

// /* This arrow function is a shorter form of:

// let sum = function(a, b) {
//   return a + b;
// };
// */

// console.log( sum(1, 2) ); // 3

// let double = n => n*2;

// console.log(double(2));


// let name = () => "Ainul";

// console.log(name());


// Regular Function Form 

// var example = function(x,y){
//     return x+y;
// }

// console.log(example(5,6));


// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ? () => alert('Hello') : () => alert ("Greetings!");

// welcome();

// let sum = (a,b) => "I am the Boss!";

// console.log(sum());

// let sum = function(a,b){
//     let result = a+b;
//     return result;
// }

// console.log(sum(9,8));



// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

// Task

// let ask = (question, yes, no) => confirm(question) ? yes() : no();

// ask(
//     'Do you agree?',
//     () => console.log('You agreed.'),
//     () => console.log('You canceled the execution.'),
// );


// console.log(Math.PI);

// var n = 8.33890;

// console.log(Math.abs(n));
// console.log(Math.floor(n));
// console.log(Math.ceil(n));
// console.log(Math.round(n));
// console.log(Math.max(56,78,100));
// console.log(Math.min(90,1,78,0));

// console.log(Math.random());

// console.log(Math.round(Math.random()*50));

// var dates =new Date();

// console.log(dates);
// console.log(dates.toDateString());
// console.log(dates.toTimeString());
// console.log(dates.toLocaleString());
// console.log(dates.getFullYear());
// console.log(dates.getMonth());
// console.log(dates.getHours());
// console.log(dates.getMinutes());
// console.log(dates.getSeconds());

// var a = 10;
// var b = 30;

// var check = !(a>b);

// console.log(check);

// var n = 11;

// var str;

// console.log((n%2 === 0) ? "Even" : "Odd");

// var name = "Ainul";

// var fullName = `Name is ${name}`;

// console.log(fullName);

// var name = 'Ainul';

// var fullName = name || "Hossain";

// console.log(fullName);

// var isOK = false;

// isOK && console.log("My name is Hossain");

// let sum = 0; 
// for (let i = 1; i <= 100; i++) { 
// 	if (i % 2 === 0) { 
//         console.log(sum + " + " + i + " = " + (sum + i));
//         sum += i;
//     }
// } 

// console.log("\nFinal sum is " + sum); 

// While Loop

// let i = 1;
// let sum = 0;

// while (i<=100){
//     if (i % 2 === 0){
//         console.log(`${sum} + ${i} = ${sum + i}`)
//         sum += i; 
//     }
//     i++;
// }

// console.log(`Final result is ${sum}`);

// While Loop

// var isTrue = 0;

// while (isTrue<100){
//     var rand = Math.floor(Math.random()*10+1);
//     if(rand === 9){
//         console.log("Winner Winner Chicken Dinner");
//         // isTrue = false;
//         break;
//     }else{
//         console.log(rand);
//     }
//     isTrue ++;
// }

// Do While Loop

// var i = 1;
// var sum = 0;

// do {
//     if (i % 2 === 0){
//         // console.log(`${sum} + ${i} = ${sum + i}`);
//         console.log(sum + " + " + i + " = " + (sum + i))
//         sum += i;
//     }
//     i++;
// }while (i<=100)

// Pattern

// var n = 5;
// for (var i = 1; i<= n; i++){
//     var result = "";
//     for (var j = 1; j<=i; j++){
//         result += j + " ";
//     }
//     console.log(result);
// }

// Pattern

// var n = 5; 

// for (var i = 1; i <= n; i++){
//     var result = "";
//     for (var j = 1; j <= i; j++){
//         result += "*" + " ";
//     }
//     console.log(result);
// }

// My First Success: Pyramid

// var n = 5;

// for (var i = 1; i <= n; i++) {
//   var result = " ".repeat(n - i);
//   for (var j = 1; j <= i; j++) {
//     result += "*" + " ";
//   }
//   console.log(result)
// }

// Pyramid With 1,3,5,7,9.... [Which is shows on Browser!]

// var n = prompt();

// for (var i = 1; i <= n; i++) {
//   var result = "  ".repeat(n - i);
//   for (var j = 1; j <= (i*2 - 1); j++) {
//     result += "* ";
//   }
//   console.log(result)
// }

// Infinity loop using Do While Structure

// var isTrue = 0;

// do {
//     var rand = Math.floor(Math.random()*10 + 1);
//     if(rand === 7){
//         console.log("We got Seven");
//         break;
//     }else{
//         console.log("Rand is " + rand);
//     }
//     isTrue ++;
// }while (isTrue < Infinity);

// Infinity Loop Using While Structure

// var isTrue = true;

// while (isTrue < Infinity){
//     var rand = Math.floor(Math.random()*10 + 1);
//     if(rand === 7){
//         console.log("We got Seven");
//         break;
//     }else{
//         console.log("Rand is " + rand);
//     }
//     isTrue ++;
// }

// Infinity Loop Using for Loop

// for (; ;) {
//     var rand = Math.floor(Math.random() * 10 + 1);
//     if (rand === 7) {
//         console.log("We got Seven");
//         break;
//     } else {
//         console.log("Rand is " + rand);
//     }
// }

// var x = "This \\is \t\"String\" ";

// console.log(x);

// String Comparison

// var x = "001";
// var y = 1;

// console.log(x == y);

// var a = "abbc";
// var b = "abbbc";

// var q = (a>b);

// console.log(q);

// var a = "Ainul";
// console.log(a.concat("Xhn"));

// var numbers = ["f", "h", "k", "a", "i", "u", "n"];

// function fifty(x) {
//     return x > "i";
// }

// var val = numbers.find(fifty);

// console.log(val);

// var x = "My name is Ainul Hossain";

// console.log(x.substr(2, 7))
// console.log(x.endsWith("n"));

// console.log("    hjjk  jksj    ".trim());

// var males = ["Rahim", "Ainul", "Sakib", "Hossain"];

// var females = ["Sonia", "Tasnim"];

// females.push(males[3]);

// console.log(males);

// console.log(females);

// console.log(males, females);

// delete(males[3]);

// males.splice(3);

// console.log(males);

// String Length

// var x = "My name is Ainul Hossain";

// var length = 0;

// while (true){
//     if (x.charAt(length) == ""){
//         break;
//     }else {
//         length ++;
//     }
// }

// console.log(length);

// console.log(`\n${x.length}`);

// console.log("\n"+x.charAt(1));

// console.log(x[4]);

// var x = [1, 5, 6, 7, 10, 100, 59, 48, 91, 33, 111, 4, 32, 600];

// var length = x.length;

// for (var i = 0; i<= length-1; i++){[]
//     // console.log("Index" + "["+ i+ "]" + " = " + x[i]);
//     // console.log(`Index[${i}] = ${x[i] + 1} `);
//     x[i] = x[i] + 2;

//     console.log(`Index[${i}] = ${x[i]}`);
// }
// console.log("\n",x);

// var sum = 0;

// for(var i = 0; i<= x.length-1; i++){
//     sum += x[i];
// }

// console.log(sum);

// var sum = 0;

// for (var i = 0; i<= x.length - 1; i++){
//     if (x[i] % 2 !== 0){
//         console.log(`Index[${i} = ${x[i]}]`);
//         sum += x[i];
//     }
// }
// console.log("\n"+sum);

// var x = [1,2,3,4,5,10,6,7,8,9];

// x[3] = 9;
// x.push(9);

// x.splice(-4, 2);

// var find = 10;

// var isFound = false;

// for (var i = 0; i <= x.length - 1; i++){
//     if(x[i] === find){
//         console.log(`Index [${i}]`);
//         isFound = true;
//         break;
//     }
// }

// if(!isFound){
//     console.log("Data Not Fonud.");
// }

// var student = [
//     [80, 77, 90, 79],
//     [78, 90, 67, 78, 88],
//     [77, 75, 58, 91]
// ]

// // console.log(student[0][1]);
// // console.log(student[1][0]);

// for (var i = 0; i <= student.length - 1; i++) {
//     for (var j = 0; j <= student[i].length - 1; j++) {
//         console.log("Index of Main Array " + "[" + i + "]" + " and " + "Index of Secondary Array " + "[" + j + "]" + " = " + student[i][j] + "\n");
//     }
// }

// ---- Reverse an Array ----

// var x = [1, 2, 3, 4, 5, 6, 7];

// for (var i = 0; i <= ((x.length - 1) / 2); i++) {
//     var temp = x[i];
//     x[i] = x[x.length - 1 - i];
//     x[x.length - 1 - i] = temp;
// }

// var i = 0;
// var j = x.length - 1;

// while (i<j){
//     var temp = x[i];
//     x[i] = x[j];
//     x[j] = temp;

//     i++;
//     j--;
// }

// console.log(x);

// ----Reverse a String (Without Method)----

// var x = "KONOK";

// var newString = "";

// for (var i = x.length - 1; i>=0; i--){
//     newString = newString + x[i];
// }

// console.log(newString);

// if(newString == x){
//     console.log("It is Palindrome.")
// }else{
//     console.log("It is not Palindrome.")
// }

//  ---- Swapping Two Variables ----

// var a = 5, b = 6;

// var temp = a;
// a = b;
// b = temp;

// console.log(a,b);

// var x = "Ainul";

// console.log(x.split("").reverse().join(""));

// var x = ["S", "a", "k", "i", "b"];

// console.log(x.reverse().join(""));


// var x = [1, 3, 5, 6, 7, 8, 9];

// console.log(x.slice(4));

// ------ How can I print multiple arrays on separate lines using same console.log? Very Important! ------

// var a = [2, 4];

// var b = [5, 6];

// console.log('', a, '\n', b);
// console.log(a,'\n',b);

// var x = .2;
// var y = .1;

// var res = x + y;

// console.log(res);

// var x = 9.657.toPrecision(2);

// console.log(x);

// var x = [1, 2, 3, 4, 11, 100, 222, 3, 4, 5];

// x.fill(100, 5, 8);

// console.log(x);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var arr2 = [5, 6, 7, 8];
// console.log(Array.isArray(arr));
// var arr2 = Array.from(arr);

// var arr2 = arr;
// arr2[0] = 100;

// console.log(arr2);
// console.log('\n')
// console.log(arr);

// var x = ["1", "3", 5, 6, 7, 8, 9, 10];

// console.log(x.join());

// ----- Objects in Javascript -----

// - - - Assinging Value in Object - - -

// var obj = {
//     x: 10,
//     y: 20
// };

// obj.z = 67;

// console.log(obj);

// var obj = Object();

// obj.a = 1;
// obj.b = 2;

// console.log(obj);


// var obj2 = new Object();

// obj2.c = 3, obj2.d = 4;

// console.log(obj2);

// var x = {
//     a: 10,
//     b: 20,
//     c: 30
// }

// console.log(x.a);
// console.log(x.a + x.b);

// console.log(x['a']);
// console.log(x["b"]);

// var show = "a";
// console.log(x[show]);

// var x = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 100
// }

// // delete x.c;
// delete x["c"];

// console.log(x);

//  ----- Comparing Objects -----

// var x = {
//     a:10,
//     b:20,
//     x:{
//         a:10,
//         b:20,
//         c:30
//     },
//     c:30
// };
// var y = {
//     a:10,
//     b:20,
//     x:{
//         a:10,
//         b:20,
//         c:30
//     },
//     c:30
// };

// console.log(x===y); //---- It returns false! ----

// if(x.a === y.a && x.b === y.b && x.c === y.c){
//     console.log(true);
// }else{
//     console.log(false);
// }

// console.log(JSON.stringify(x) === JSON.stringify(y)); 


// console.log(JSON.stringify([new Number(3), new Boolean(true), new String("X")]));

// console.log(JSON.stringify([new Number(3), new Boolean("false"), new String("X")]));

// var obj1 = {
//     a: 10,
//     b: 20,
//     c: 30
// }

// delete obj1.a;
// console.log(obj1);
// console.log(JSON.stringify(obj1));

// ---- Uses of in Operator ----

// var x = ["Ainul", "Sakib", "Hossain", "Arif"]

// console.log(5 in x); 
// console.log("length" in x);

// var obj = {
//     x: 40,
//     y: 50,
//     z: 60
// }

// console.log("x" in obj);
// console.log("p" in obj);

// for (var i in obj){
//     console.log(i);
//     console.log(`${i} = ${obj[i]}`);
// }


// var x = {
//     a: 10,
//     b: 20,
//     c: 30
// }

// var y = {
//     a: 50,
//     d: 90,
//     e: 55
// }

// console.log(Object.assign({},x));

// var s = Object.assign({}, x);
// console.log(s);
// s.a = 50;
// console.log(s);
// console.log(x);

// var test = Object.assign(x,y);
// console.log('y: ', y, '\n');
// console.log('Test :', test, "\n");
// console.log('x: ', x, "\n");
// test.a = 60;
// console.log('y: ', y, '\n');
// console.log('Test again: ', test, "\n");
// console.log('x: ', x);

// for (var i = 0; i<=Object.keys(x).length - 1; i++){
//     console.log(Object.keys(x)[i]);
// }  ----Extra Practice----

// console.log(Object.keys(x));
// console.log(Object.values(x));
// console.log(Object.entries(x));

// console.log(Object.entries(x));

// for (var [key,value] of Object.entries(x)){
//     console.log(key + " : " + value);
// }

// var date = new Date();
// console.log(date.getFullYear());

// ---- Array Sum ----

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [7, 8, 9];


// function arraySum(x){
//     var sum = 0;
//     for (var i = 0; i<x.length; i++){
//         sum += x[i];
//     }
//     console.log('Sum of '+ x + ' is ' + sum);
//     // console.log(`Sum of ${x} is ${sum}`);
// }

// arraySum(c);

// --- Optimal ArraySum Solution ---

// var a = [1, 3, 4, 3]

// function arraySum(x, varName) {
//     var sum = 0
//     for (let i = 0; i < x.length; i++) {
//         sum += x[i]
//     }
//     console.log("sum of " + varName + " is " + sum)
// }

// arraySum(a, "a");

// const abc = '123';
// const def = '456';

// const varToString = varObj => Object.keys(varObj)[0]

// console.log("value of " +varToString({def}) +" is "+ def +" and value of " +varToString({abc})+" is "+abc );

// ---- Arguments ----

// function test(a, b, c){
// console.log(arguments);
// console.log(JSON.stringify(arguments));
// console.log(typeof a);

// var sum = 0;
// for (var i = 0; i<arguments.length; i++){
//     sum += arguments[i];
// }
// console.log(sum);

// for (var i = 0; i<arguments.length; i++){
//     console.log(arguments[i]);
// }

// console.log(arguments[0]);
// }

// test(10, 20, 30); 

// var sum = 0;
// function addAll(){
//     for (var i = 0; i<arguments.length; i++){
//         sum+=arguments[i];
//     }
//     console.log(sum);
// }

// addAll(1, 2, 3, 4, 5, 6, 7, 8, 9,10);


// function sum(a, b){
//     return a+b;
// }

// var x = sum(7,8);
// console.log(x);

// function person(name, email){
//     return {
//         name: name,
//         email: email
//     }

//     console.log('This will never be shown');
// }

// var x = person(1, "ainulsakibs@gmail.com");

// console.log(x);

// var addition = function (a, b){
//     return a+b;
// }

// console.log(addition(5,6));
// console.log(add(7,8)); //---- Not Workigng ----

// setTimeout(function (){
//     console.log("I will call after 5 seconds");
// }, 5000)

// var extra = addition;

// console.log(extra(4,4));


// --- Inner Function ---

// function something (greet, name){
//     function getFirstName (){
//         if (name){
//             return name.split(" ")[0];
//         }
//         else {
//             return "";
//         }
//     }

//     var message = greet + ', ' + getFirstName();

//     console.log(message);
// }

// something('Good Morning', 'Ainul Hossain Sakib');

// --- Another Inner Function ---

// function something(greet, name) {
//     function sayHi() {
//         console.log(greet+', '+name);
//     }

//     sayHi();
// }

// something('Good Morning', 'Ainul Hossain Sakib');

//  ---- Function Scoping In JS ----

// var a = "abc";

// function x(){
//     var a = "def";

//     function y(){
//         var a = 10;
//         console.log(a);
//     }
//     console.log(a);
//     y();
// }

// x();

// console.log(a);

// --- Another Surprise Example of Function Scoping ---

// var a = "abc";

// function x(){
//      a = "def"; /* new value assign for previous variable a, so the previous value will change */

//     function y(){
//         var a = 10;
//         console.log(a);
//     }
//     console.log(a);
//     y();
// }

// x();

// console.log(a);

// ---Checking True or False---

// function x(n){
//     return n%5===0;
// }

// console.log(x(6));

// --- Test ---

// function test(n){

//     function a(){
//         return n%5===0;
//     }

//     function b(){
//         return n%6===0;
//     }

//     if (a() && b()){
//         console.log(n + ' is divisible by both 5 & 6');
//     }
//     else {
//         console.log('Not a valid number');
//     }
// }

// test(30);

// var n = 10;

// function change(){
//    var n = 100;
//    console.log(n);
// }

// change();
// console.log(n);

// ---- ----

// var n = 10;

// function change(){
//     n = 100;
// //    console.log(n);
// }

// change();
// console.log(n);

// --- Impure Function ---

// var point = {
//     x: 10,
//     y: 20
// }

// function printPoint(){
//     point.x = 100;
//     point.y = 200;
//     point.s = 500;

//     console.log(point);
// }

// printPoint();

// console.log(point);

// --- First Class Function ---

// 1. A function can be stored in a Variable:

// function add(a, b){
//     return a+b;
// }

// var sum = add; 
// console.log(sum(5, 4));

// 2. A function can be stored in an Array:

// var arr = [];

// arr.push(add);
// console.log(arr);
// console.log(arr[0](5, 6));

// 3. A function can be stored in an Object: 

// var obj = {
//     sum: add
// }

// console.log(obj);
// console.log(obj.sum(3, 9));

// 4. We can create function as we need: 

// setTimeout(function (){
//     console.log('I have created ...')
// }, 5000)

// function add(a, b){
//     return a+b;
// }

// var sum = add;
// console.log(sum(4, 5));
// console.log(typeof sum);


// --- Higher Order Function**** ---

// function add(a, b){
//     return a+b;
// }

// function manipulate(a, b, func){
//     var c = a + b;
//     var d = a - b;

//     function multiply(){
//         var m = func(a, b);

//         return c*d*m;
//     }

//     return multiply;
// }

// console.log(manipulate(3, 4, add)());

// var a = 10;

// --- First look of Closure ---

// function test(){
//     var x = 20;

//     return function (){
//         console.log(x);
//         // return x;
//     }
// }

// var abc = test();
// console.dir(abc);
// // abc();

//  ----- Console.log() & Console.dir() -----

// var str = "Howdy GeeksforGeeks"
// var geek = {
//     book: "harrypotter",
//     price: "2000"
// };
// var geek2 = [10, 20, 30];

// console.log(str);
// console.dir(str);
// console.dir(geek);
// console.log("geek (log) = ", geek);
// console.dir(geek2);
// console.log("geek2 (log) = ", geek2);

// // Prints only string as dir() takes 
// // only one parameter. 
// console.dir("geek2 (dir) = ", geek2);

// --- Functioin as Arguments** ---

// function sayName (name){
//     return 'Hello, ' + name;
// }

// function test(name, func){
//     return func(name);
// }

// var x = test('Ainul', sayName);
// console.log(x);

// --- Self Invoking Function*** (We can create function as we needed!!!) ---

// var sum = 10 + function (){console.log(20)}(); (X) 

/*           or 

// var sum = 10 + (function (){console.log(20)})(); */

// var sum = 10 + function (){return 20}(); /*একটা function এর মধ্যেকার value return করলে ঐ function টাই value হয়ে যায়।*/

// console.log(sum);

// --- test for above problem ---

// function test(){
//     console.log(20);
//     // return 20;
// }

// test();
// // console.log(test());

// --- We can return function from another function ---

// function base(b){
//     return function (n){
//         var result = 1;

//         for (var i = 0; i<b; i++){
//             result *= n;
//         }

//         return result;
//         // console.log(result);
//     }
// }

// var power = base(0);
// console.log(power(""));

// // base(4)(2);

// --- Test for Above Problem ---

// var multi = 8*'2'; /* In JS, Number can be multipled with String (Subtraction & Division is also possible), but Addition is not possible! */

// console.log(multi);

// --- Inner Function ---

// function outer(){

//     function inner(){
//         console.log('I am Inner Function.')
//     }

//     inner();
//     console.log('I am Outer Function.');
//     // return inner(); 
// }

// outer();
// return outer();

// --- All about Return Statement* ---

// function x(firstName, lastName, gender){
//     if(gender === 'male'){
//         var output = firstName + ' ' + lastName;
//         // console.log(output);
//         return output;
//     } else if(gender === 'female'){
//         var output = firstName + ' ' + lastName;
//         // console.log(output);
//         return output;
//     } 
// }

// // return x('Ainul', 'Hossain', 'male');

// console.log(x('Ainul', 'Hossain', 'male'));

// --- From W3schools ---

// function y(){ 
//      x = 10;
//     // return x;
//     console.log(x);
// }

// y();
// console.log(x);  // Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

// --- From FB msngr ---

// if(null == undefined){
//     console.log(true);
// }else {
//     console.log(false);
// }

// --- Problem From FB msngr Group ---

// let arr = ['Zahidul Islam', 'Zohorul Islam', 'Ainul Hossain', 'Tomato', 'Jackfruit', 'Mango'];

// function findManName (arr) {
//     for(var i = 0; i<arr.length; i++){
//         var x = arr[i];

//         if(arr[i].includes(' ')){
//             console.log(arr[i]);
//         }
//     }
// }

/*   Without includes() Method */

// function findManName (arr) {
//     for(var i = 0; i<arr.length; i++){
//         var x = arr[i];

//         for(var j = 0; j<x.length; j++){
//             if(x[j] == ' '){
//                 console.log(arr[i]);
//             }
//         }
//     }
// }

// findManName(arr);

// --- Callback Function ---

// function testCallBack(a, b, cb) {
//     var c = a + b;
//     var d = a - b;

//     var result = cb(c, d); // Callback function Invocked

//     return result;
// }

// // function sum(a,b){
// //     return a+b;
// // }

// // var x = testCallBack(4, 5, sum);
// // console.log(x);

// var x = testCallBack(4, 5, function (a, b) { 
//     return a+b;         /* We can create function as  we need */
// });
// console.log(x);

// --- forEach() method ---

// var arr = [1, 2, 3, 4, 5, 6];

// var sum = 0;
// arr.forEach(function (value, index, array){  // Built in method
//      //sum += value;       
//     // value += 5;
//     // arr[index] = value;
//     console.log(value, index, array);
// })

// // console.log(sum); 

// function forEach(arr, cb){
//     for (var i = 0; i<arr.length; i++){
//         cb(arr[i], i, arr);
//     }
// }
// var sum = 0;
// var newAarr = [];
// forEach(arr, function (value, index, array){
//     console.log(value, index, array);
// sum += value;

// value += 5;
// newAarr.push(value);

// value += 5;
// arr[index] = value;

// })
// console.log(sum);
// console.log(arr);

// // --- Problem solving (Time AM & PM question) from FB msngr ---

// var hoursArray = [5, 11, 13, 23, 8, 24];

// var newArray = [];

// function newHours(hours) {
//     for (var i = 0; i < hoursArray.length; i++) {

//         if (hoursArray[i] === 13) {
//             hoursArray.splice(i, 1);
//         }

//         hoursArray[i] = hoursArray[i] + 2;

//         if (hoursArray[i] > 23) {
//             hoursArray[i] = hoursArray[i] - 24 + 'AM';
//         } else if (hoursArray[i] > 12) {
//             hoursArray[i] = hoursArray[i] + 'PM';
//         } else {
//             hoursArray[i] = hoursArray[i] + 'AM';
//         }
//         newArray.push(hoursArray[i]);
//     }
//     return newArray;
// }

// console.log(newHours(hoursArray));

// --- New Solution ---

// var hoursArray = [5, 11, 13, 23, 8, 24];

// var newArray = [];

// function newHours(hours) {
//     for (var i = 0; i < hoursArray.length; i++) {

//         if (hoursArray[i] === 13) {
//             hoursArray.splice(i, 1);
//         }

//         hoursArray[i] = hoursArray[i] + 2;

//         if (hoursArray[i] > 23) {
//             hoursArray[i] = hoursArray[i] - 24 + 'AM';
//         } else if (hoursArray[i] > 12) {
//             hoursArray[i] = hoursArray[i] + 'PM';
//         } else {
//             hoursArray[i] = hoursArray[i] + 'AM';
//         }
//         newArray.push(hoursArray[i]);
//     }
//     //return newArray;
// }

// newHours(hoursArray);
// console.log(newArray);

// --- map() function ---

// var arr = [1, 2, 3, 5, 6];

// // var newArr = arr.map(function (value, index, array){
// //     return value*value;
// // })

// // console.log(newArr);
// // console.log(arr);

// function map(array,cb){
//     var newArr = [];
//     for (var i = 0; i<array.length; i++){
//         var temp = cb(array[i], i, array);
//         newArr.push(temp);
//     }
//     return newArr;
// }

// var qb = map(arr, function (value, index, array){
//     return value*value*value;
// })

// var plus = map(arr, function (value, index, array){
//     return value+=2;
// })

// console.log(arr);
// console.log(qb);
// console.log(plus);

// console.log(arr);
// console.log(map(arr));

// function map(array,cb){
//     for(var i = 0; i<array.length; i++){
//         cb(array[i], i, array);
//     }
// }

// var newArr = [];

// map(arr, function (value, index, array){
//     value *= value;
//     newArr.push(value);
// })

// console.log(newArr);

// --- filter() method in JS ---

// var a = [1, 3, 'i', 's', 'a', 'f', 'j', 2, 4, 5, 6, 7];

// var filteredArray = a.filter(function (value, index, array){
//     if (typeof value !== 'string'  ){
//         return value;
//     }
// })

// console.log(filteredArray);

// function filter(array, cb){ // how filter() method works
//     var newArr = [];
//     for (var i = 0; i<array.length; i++){
//         if(cb(array[i], i, array)){
//             newArr.push(array[i]);
//         }
//     }
//     return newArr;
// }

// var x = filter(a, function (value, index, array){
//     return typeof value !== 'string';
// });
// console.log(x);

// --- reduce() method in JS ---

// var r = [65, 48, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 0, 7, 8];

// var x = r.reduce(function (accumulator, currValue, currentIndex, array){
//    return accumulator+currValue;
// }, 0)

// console.log(x);

// function reduce(array, cb, accumulator){  // How reduce() method works

//     for (var i = 0; i<array.length; i++){
//         accumulator = cb(accumulator, array[i]);
//     }
//     return accumulator;
// }

// var x = reduce(r, function (acc, curr){
//     return Math.min(acc, curr);
// }, r[0]);
// console.log(x);

//  --- find() & findIndex() method in JS ---

// var a = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];

// var r = a.find(function (value, index){
//     // if (value === 9){
//     //     return value;
//     // }
//     return value === 9;
// })

// console.log(r);

// var x = a.findIndex(function (value, index){
//     return value === 9;
//     // if (value === 9){
//     //     return index;
//     // }
// })

// console.log(x);

// function find(array, cb) {  // How find() method works
//     for (var i = 0; i < array.length; i++) {
//         if (cb(array[i], i, array)){
//             return array[i];
//         }
//     }
// }

// var y = find(a, function (value, index, array) {
//     // if (value === 9){
//     //     return value;
//     // }
//     return value === 9;
// })

// console.log(y);

// -- -- -- -- -- -- -- --

// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function find(array, cb) {
//     for (var i = 0; i < array.length; i++) { // --From Jahidul Vai--
//        cb(array[i], i);
//     }
// }

// var y = find(a, function (value, index) {
//     if(value === 9) {
//       console.log(value)
//     }
// })

// y;

//  ---- Sort, Some and Every function in JS ----

// var b = ['A', 'AbB', 'aaa', 'bbc', 'ccd', 'b', 'v', 'c', 'd', 'E', 'F', 'g', 'Z', 'i'];

// b.sort(function (a, b){  // ONLY FOR String ELEMENT
//     if(a>b){
//         return 1;
//     } else if(a<b){
//         return -1;
//     } else {
//         return 0;
//     }
// });

// console.log(b);

// var x = [
//     {
//         name: 'Ainul',
//         age: 22
//     },
//     {
//         name: 'Sakib',
//         age: 21
//     },
//     {
//         name: 'Hossain',
//         age: 24
//     },
//     {
//         name: 'Arif',
//         age: 20
//     }
// ]

// x.sort(function (a, b){
//     // if(a.age>b.age){
//     //     return 1;
//     // } else if(a.age<b.age){
//     //     return -1;
//     // } else {
//     //     return 0;
//     // }
//     // return a.age - b.age;
//     return b.age - a.age;
// });

// console.log(x);

// var a = [1, 3, 55, 66, 77, 88, 12, 4, 5, 12, 56, 99, 1, 2, 6, 7, 9, 11, -1, -9, 0, -17, -20, -31, -50];

// a.sort(function (a, b) {
//     // if (a > b) {
//     //     return 1;
//     // } else if (a < b) {
//     //     return -1;
//     // } else {
//     //     return 0;
//     // }
//     return a-b;
//     // return b-a;
// });

// console.log(a);

// var result = a.every(function (value, index, array){
//     return value%2 === 1;
// })

// console.log(result);

// var result = a.some(function (value){
//     return value<0;
// })

// console.log(result);


// var stringArray = ['Blue', 'Humpback', 'Beluga'];  // From MDN
// var numericStringArray = ['80', '9', '700'];
// var numberArray = [40, 1, 5, 200];
// var xArray = ['80', '9', '700', 40, 1, 5, 200];
// xArray.sort(function (a, b){
//     // if (a>b){
//     //     return 1;
//     // } else if (a<b){
//     //     return -1;
//     // } else {
//     //     return 0;
//     // }
//     return a-b;
// })
// console.log(xArray);
// var alphabet = ['A', 'AbB', 'aaa', 'bbc', 'ccd', 'b', 'v', 'c', 'd', 'E', 'F', 'g', 'Z', 'i'];

// function compareNumbers(a, b) {
//     // return b - a;
//     if (a>b){       // ONlY for String element 
//         return 1;
//     } else if (a<b){ 
//         return -1;
//     } else {
//         return 0;
//     }
// }

// console.log('alphabet:', alphabet.join());
// console.log('Sorted without a compare function:', alphabet.sort());
// console.log('Sorted with compareNumbers:', alphabet.sort(compareNumbers));

// console.log('stringArray:', stringArray.join());
// console.log('Sorted:', stringArray.sort());
// console.log('Sorted with compareNumbers:', stringArray.sort(compareNumbers));


// console.log('numberArray:', numberArray.join());
// console.log('Sorted without a compare function:', numberArray.sort());
// console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));

// console.log('numericStringArray:', numericStringArray.join());
// console.log('Sorted without a compare function:', numericStringArray.sort());
// console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));

// console.log('mixedNumericArray:', mixedNumericArray.join());
// console.log('Sorted without a compare function:', mixedNumericArray.sort());
// console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));

//  --- Return a function from another function ---

// function greet (name){
//     function greetings(msg){
//         return msg + ', ' + name + '!';
//     }

//     return greetings;
// }

// console.log(greet('Ainul')('Hello'));
// var gm = greet('Ainul');
// console.log(gm('Good Morning'));

// function base(b){
//     function power(n){
//         var result = 1;
//         for (var i = 0; i<b; i++){
//             result *= n;
//         }
//         return result;
//     }
//     return power;
// }

// console.log(base(4)(4));

// --- Recursive function in JS ---

//  sum(1)(2)(3)(4)... = 10

//  sum(1)(2)() = 3

// var sum = function (a){
//     return function (b){ 
//         // console.log(a+b);
//         // return a+b;
//         if (b){
//             return sum(a+b);   
//         } else {
//             return a;
//         }
//     }
// }

// sum(1)(2);
// console.log(sum(1)(2));
// console.log(sum(1)(2)(3)(4)(5)(6)());

// var sum = function (a){
//     return function (b){
//         return function (c){
//             return function (d){
//                 return a+b+c+d;
//             }
//         }
//     }
// }

// var sum = function (a){
//     return function (b){  //From Akshar Saini
//         return function (c){
//             return function (d){
//                 return function (e){
//                     if (e){
//                         return a+b+c+d+e;
//                     } else {
//                         return a;
//                     }
//                 }
//             }
//         }
//     }
// }

// var sum = function (a){
//     return function (b){
//         return a+b;
//     }
// }

// console.log(sum(1)(2)(3)(4)(7));

// function factorial(n){       // --- find the value of factorial ---
//     if (n === 0){
//         return 1;
//     } else {
//         return n * factorial(n-1);
//     }
// }

// console.log(factorial(10));

// function sum(n){      //  --- sum of Nth number ---
//     if(n<0){
//         return 0;
//     } else {
//         return n + sum(n-1);
//     }
// }

// console.log(sum(100));

// var sum = 0;
// function repeat(n){
//     if (n == 0){
//         return 0;
//     } else {
//         return n-1;
//     }
// }

// console.log(repeat(5));


// function recursive (n){   // From JS all u need to know
//     if (n===0){
//         return 0;
//         // console.log(0);
//     } else {
//         console.log('Hi, Ainul');
//         return recursive(n-1);
//         // recursive(n-1); // last value will be executed as undefined     (which is explain in next example)
//     }
// }

// recursive(10);
// console.log(recursive(10));

// function A(){
//     var msg = 'Say my name!';
//     return function B(){
//         console.log(msg);
//         // return msg;
//     }
//     // function B(){
//     //     console.log(msg);
//     // }

//     // B();
// }

// // A();
// console.log(A()());


// function sayHi(n){
//     if (n === 0){
//         // return;
//         console.log(0);
//     } else {
//         console.log('Hi, Sakib');
//         sayHi(n-1);
//     }
//     // console.log('Hi, Sakib');
//     // sayHi(n-1);
// }

// sayHi(10);

// var array1 = [1, 2, 3, 4, 5];   // Sum of Array's number element

// function arraySum(array, lastIndex){
//     if (lastIndex < 0){
//         return 0;
//     } else {
//         return array[lastIndex] + arraySum(array, lastIndex - 1);
//     }
// }

// console.log(arraySum(array1, array1.length - 1));

// --- Find String length without method ---

// var st = 'Ainul Hossain';

// function sLength(s){
//     var n = 0;
//     while (s[n] !== undefined){
//         n++;
//     }
//     return n;
// }

// console.log(sLength('Ainul Hossain'));

// const str = "Ainul Hossain";         // With ES6 
// console.log([...str].reduce(a => a+1, 0));


// --- Curryin in JS ---

//Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.

// function sum(a){
//     return function (b){
//         return function (c){
//             return function (d){
//                 return a+b+c+d;
//             }
//         }
//     }
// }

// console.log(sum(1)(2)(3)(4));    


//  --- Function Composition in JS ---

// function print(input){
//     console.log(input);
// }

// function multiply(n){
//     return n*5;
// }

// function sum(a, b){
//     return a+b;
// }

// print(multiply(sum(1, 2)));

// --- Hoisting & Execution Context Test ---

// var a = 100;

// newPrint(a);

// print(10);

// var newPrint = print;
// newPrint(45);

// function print(a){
//     console.log(a);
// }

// print(a);

// // Creational Phase 
// // 1. a = undefined
// // 2. newPrint(a) -> will be ignored (cause it's a function call)
// // 3. print(10) -> will be ignored
// // 4. newPrint = undefined
// // 5. print = ref (casue it's a function)
// // 6. print(a) -> will be ignored

// // Executional Phase
// // 1. a = 100
// // 2. newPrint(a) -> error 
// // (if we comment out newPrint(a), then we can go to step 3)
// // 3. print(10) -> will be executed(10)
// // 4. newPrint = ref (cause we assign a function here*)
// // 5. newPrint(45) -> will be executed(45)
// // 6. print(a) -> will be executed(100)

//  Another Example: 

// abc();

// function abc(){
//     console.log('I am Function.');
// }

// newAbc();

// var newAbc = function (){
//     console.log('I am new Abc Function.');
// }

// newAbc();

// // Creational Phase:
// // 1. abc() -> will be ignored (cause it's a function call)
// // 2. abc = ref (cause it's a function)
// // 3. newAbc() -> will be ignored
// // 4. newAbc = undefined

// // Executional Phase:
// // 1. abc() -> will be executed( I am Function. )
// // 2. newAbc() -> error (cause of Function expression)
// // // (if we comment out newAbc(), then we can go to step 3)
// // 3. newAbc = ref (cause we assign a function here*)
// // 4. newAbc() -> will be executed ( I am new Abc Function.)

// --- Nested Scope in JS ---

// var x = 55;

// console.log(x);

// function aa(){    //function name a is reserved in JS that's why aa!!
//     // var x = 45;
//     // console.log(x);

//     function b(){
//         // var y = 5;
//         x = 66;
//         console.log(x);
//         // console.log(y);
//     }
//     // x = 66;
//     b();
//     console.log(x);  // it will not be executed cause of scope chain   
// }

// aa();
// console.log(x);

// --- test (very very important) ---

// var x = 55;

// function sk(){
//     var x = 45;
//     x = 66;  // in this case it changes the value of it's own scope's value
//     console.log(x);
// }

// sk();
// console.log(x);

// --- Closure ---

// function A(){
//     var msg = 'Say my name!';
//     // return function B(){
//     //     console.log(msgii);
//     // }
//     return function B(){
//         // console.log(msg);
//         // return msg;
//     }
// }
// // A();
// console.log(A()());

// --- How Closure works totally different in loop ---

// for (var i = 0; i<=5; i++){
//     setTimeout(function (){
//         console.log('Current Value is ' + i);
//     }, 1000 * i)
// }

// for (var i = 0; i <= 5; i++) {
//     (function (n) { // to avoid previous example's fault
//         setTimeout(function () {
//             console.log('Current Value is ' + n);
//         }, 1000 * n)
//     })(i);
// }

// for (let i = 0; i<=5; i++){ // in this case (let) behaves different from var
//     setTimeout(function (){
//         console.log(i);
//     }, 1000 * i)
// }

// --- IIFE (Immediately Invoked Function Expression), which block scope ---

// var result = (function (s){
//     // console.log(s);
//     return s;
// })('Ainul')

// console.log(result);

// (function (s){
//     console.log(s);
// })('Ainul')

// var result = (function foo(s) {
//     // console.log(s);
//     return s;
// }('Ainul'));

// console.log(result);

// --- From Jahidul Haque Heaven (IIFE) ---

// (function () {
//     // console.log('Ainul')
//     return;
// })()

// (function () {
//     console.log("JavaScript");
// })()

// (function () {
//     console.log("JavaScript");
//     return 1
// })()

//  --- Extraordinary Example of Global & Local Scope ---

// function a() {
//     x = 20; // without var keyword x is a global variable
//     // console.log(x); 
// }

// a();
// console.log(x); // 20

// function a() {
// 	var x = 20; // with var keyword x is a local variable
// }

// --- From Jahidul Vai (Infinite loop using setTimeOut)
// let isShown = false;
// function enterSearchKeyword() {
// 	stopId = setTimeout(function() {
// 		if(!isShown) {
// 			document.write("Zahidul <br>");
// 			setTimeout(function(){
// 				isShown = true;
// 				enterSearchKeyword()
// 			})
// 		}else if(isShown) {
// 			document.write("Islam <br>");
// 				setTimeout(function(){
// 					isShown = false;
// 					enterSearchKeyword()
// 				})
// 		}
// 	}, 600)
// }
// enterSearchKeyword()

//  --- Number (and many more) method checking ---

// var num = 5.56789;
// var n = num.toExponential();
// console.log(num.toLocaleString("bn-EG"));

// var x = '123';
// var x = 123;

// var y = 456;
// var z = Number(456);

// console.log(y == z);
// console.log(parseInt(6.565));

// console.log(new String(x));
// console.log(new String(x).toString());
// console.log(typeof String(x));
// console.log(typeof Number(x));

// var x = 'ainul';
// var y = 'sakib';
// console.log(x.charCodeAt(3));
// console.log(String.fromCharCode(119));
// console.log(x.localeCompare(y));
// console.log(x.concat(' ', y)); 
// console.log('ainul'.concat(' hossain'))

// var str = "The rain in SPAIN stays mainly in the plain";
// var res = str.match(/ain/gi);  // discuss later after finishing regex
// console.log(res);

// var str = "Visit Microsoft!";
// var res = str.replace(/Microsoft/gi, "A");
// console.log(res);

// var x = 'Ainul hossain'
// console.log(x.search('s'))
// console.log(x.slice(-4, -2))
// console.log(x.split(''));
// console.log(x.split('').reverse().join(''));
// console.log(x.startsWith('Ainl'))
// var str = "Hello world!";
// var res = str.substr(-11, 5);
// console.log(res);
// console.log(x.substr(-4, 1))
// console.log(x.substring(-4))
// console.log(x);
// console.log(x.trim())
// console.log(x.valueOf());
// console.log(x.repeat(2));
// console.log(x);
// console.log(x.search('A'));
// console.log(x.match(/A/g));
// console.log(typeof x.toString());
// console.log(typeof x);
// console.log('Ainul Hossain '.repeat(2));
// var s = 4;
// var u = 5;
// console.log(!(s===u));
// console.log(s !== u);
// var a = 10; 
// var b = 20;
// console.log(eval('a+b'));
// console.log(10+'5');
// console.log('10'+'5');
// console.log('5'+10);

// for (var i = 0; i < 10; i++) {
//     // some code
//     console.log(i);
// }
// console.log(i);

//  ---- All About Lexicographic Order (VVI) ----

// var a = 'aabA';
// var b = 'aaabAA';
// var a = 'AAA';
// var b = 'aaaa'; // (in this 'aaaa' is greater than 'AAA' !!!)
// var a = 'alpha';
// var b = 'Zeta';
// console.log(a === b);
// console.log(a.localeCompare(b));

// var k = [
//     'Cat', 'dog', 'Elephant', 'bee', 'ant'
// ];

// console.log(k.sort());

// console.log(k.sort(function (a, b){
//     var x = a.toLowerCase();
//     var y = b.toLowerCase();
//     if (x>y){
//         return 1;
//     } else if (x<y){
//         return -1;
//     } else {
//         return 0;
//     }
//     // return x-y; //not working (actually its working only for number element) (there is a question!!!)
//     // return a-b;
// }));

// console.log(k.sort(function (a, b){
//     return b.localeCompare(a);
// }))

// --- Another Example ---

// var s = ['aaAc', 'aAbA', 'aDbb', 'AaBB'];

// console.log(s.sort(function (a, b){
//     var x = a.toLowerCase();
//     var y = b.toLowerCase();
//     if (x>y){
//         return 1;
//     } else if (x<y){
//         return -1;
//     } else {
//         return 0;
//     }
//     // return x-y;
//     // return a-b;
// })); 

// console.log(s.sort(function (a, b){
//     return a-b;
// }))

// console.log(s.sort(function (a, b){
//     return a.localeCompare(b);
// }))

// console.log(s.sort());

// --- Javascript Type Corecion (All links on Sticky Notes) ---

// console.log(+ {} + []);
// console.log([] + {}); 
// console.log(+ [] + {});
// // console.log(Number({}));
// console.log(NaN + []);
// console.log({} + []);
// console.log(+ [] + + +{});
// console.log(0 + {})
// console.log(String({}));
// console.log(String([ ]));
// console.log(5 + {});
// console.log({} + 5);
// console.log([1] + [2,3])
// console.log(! + []);
// console.log(Boolean(+[]));
// console.log(Boolean(![]));
// console.log(+[]);
// console.log(Number(+[]));
// console.log('' +'foo'.split(""))
// console.log({} + [] + {} + [1]); // Different result from terminal!!!***

// ---- Problem By Jahid Vai ----

// function getMiddle (str) {
//     var x = str.length;
//     var y = x/2;

//     if (x % 2 == 0){
//         // console.log(str[y-1]+str[y]);
//         return str[y-1] + str[y];
//     } else if (x % 2 == 1) {
//         return str[parseInt(y)];
//         // console.log(str[parseInt(y)]);
//     }
// }

// console.log(getMiddle('Happy Birth Day Jahid Vai'));
// getMiddle('Ainul');
// getMiddle('Ainu');

// -- Another Problem by Jahid Vai ---

// function newArray() {
//     let arr = [false, 'kola', 0, 0, 0, 3, 'lichu', true, 0, 0, 'anarosh'];
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === 0) {
//         arr.splice(i, 1)
//         newArr.push(0)
//         i = i - 1;
//       }
//     }
//     for(let el of newArr) {   // Answer by Jahid Vai
//         arr.push(0)
//     }
//     //console.log(newArr)
//     return arr
// }

// console.log(newArray());

// var a = [false, 'kola', 0, 0, 0, 3, 'lichu', true, 0, 0, 'anarosh'];

// var moveZeros = function (arr) {
//     var length = arr.length;
//     var k = [];
//     var n = [];

//     for (var i = 0; i < length; i++) {
//         if (arr[i] === 0) {
//             n.push(arr[i]);
//             //arr.splice(i,1);
//             // continue;
//         } else {
//             k.push(arr[i]);   // Answer by Me!!!
//         }
//     }

//     for (var j = 0; j < n.length; j++) {
//         k.push(n[j]);
//     }

//     return arr = k;
// }

// console.log(moveZeros(a));

// ---- First non-repeating character ---

// function firstNonRepeatingLetter(s) {
//     let x = s.toUpperCase();
//     let y = s.toLowerCase();
//     let len = s.length;

//     let res1 = '';
//     let res2 = '';

//     if (len === 0) {
//         return res1;
//     }

//     if (len === 1) {
//         return s;
//     }

//     for (let i = 0; i < len; i++) {
//         if (len > 1) {
//             if (x.indexOf(x[i]) === i && x.indexOf(x[i], i + 1) === -1) {
//                 res1 += x[i];
//             }
//             if (y.indexOf(y[i]) === i && y.indexOf(y[i], i + 1) === -1) {
//                 res2 += y[i];
//             }
//         }
//     }

//     for (let j = 0; j < len; j++) {
//         if (res1[0] === s[j]) {
//             return res1[0];
//             // return s[j];
//         } else if (res2[0] === s[j]) {
//             return res2[0];
//             // return s[j];
//         } else if (res1 === '' || res2 === '') {
//             return res1;
//         }
//     }
// }

// console.log(firstNonRepeatingLetter('sTresSSs'))


// --- getString from Array ---

// var arr = [
//   [1, 3, 2, 'a', 7, 9, 4, 6, 8],
//   [4, 9, 8, 2, 6, 1, 'b', 7, 5],
//   ['c', 5, 6, 3, 8, 4, 2, 1, 9],
//   [6, 4, 3, 1, 'd', 44, 22, 8, 7],
//   [5, 2, 'e', 7, 9, 3, 8, 4, 6],
//   [9, 8, 7, 4, 2, 'f', 5, 3, 1],
//   [2, 1, 4, 9, 3, 5, 6, 8, 'g'],
//   [3, 'h', 5, 8, 1, 7, 9, 2, 4],
//   [8, 7, 9, 6, 4, 2, 1, 'i', 3]
// ];

// function getString(arr){
//     var nArr = [];
//     for (var i = 0; i<arr.length; i++){
//         for (var j = 0; j<arr[i].length; j++){
//             if(typeof arr[i][j] !== 'number'){
//                 nArr.push(arr[i][j]);
//             }
//         }
//     }
//     return nArr;
// }

// console.log(getString(arr));


// var x = {};

// Object.defineProperty(x, 'name', {   // Have to ask!
//     y: 'Ainul',
//     get: function () {
//         return this.y;
//     },
//     set: function (value) {
//         this.y = value;
//     }, 
//     enumerable: true,
//     configurable: true
// })

// console.log(x.name);


// ---- New Problem By Jahid Vai ----
//diamondArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]

// function diamondArrays(x) {
//     var arr = [];
//     var arr1 = [];
//     var finalArr = [];
//     var k;
//     var l;
//     for (var i = 1; i <= x; i++) {    
//         if(i === x){
//             for(var j = x-1; j>=1; j--){
//                 var strr = '';
//                 strr += j;
//                 l = strr.repeat(j);
//                 arr1.push(l.split(''));
//             }
//         }
//         var str = '';
//         str += i;
//         k = str.repeat(i);
//         arr.push(k.split(''));
//     }
//     finalArr = arr.concat(arr1)
//     for(var z = 0; z<finalArr.length; z++){
//         for(var b = 0; b<finalArr[z].length; b++){
//             finalArr[z][b] = Number(finalArr[z][b]);
//         }
//     }
//     return finalArr;
// }

// console.log(diamondArrays(5))


// ---- New Problem By Codewar --- 

// var x = ['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4'];

// var a = [' ', '?', '!', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var b = a.reverse();
// var c = [];

// for (var i = 0; i <= x.length - 1; i++) {
//     c.push(b[parseInt(x[i]) - 1]);
// }

// console.log(c.join('')); // Numbers to Letters


//  ---- Calculating with Functions ----




//  --- Problem by Jahid Bhai ---

// let x = 15;

// function jahidBhai (num){

// }



//  --- Format a string of names like 'Bart, Lisa & Maggie' ---

// function list(names) {
//     let x = names.map(x => x.name);
//     let k;
//     let y;
//     let z;
//     if (x.length === 1) {
//         return x;
//     } else if (x.length === 2) {
//         return x.join(' & ');
//     } else {
//         k = x.splice(x.length-1);
//     }
//     y = x.join(', ');
//     z = y.concat(' & ', k);
//     return z;
// }

// console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));



//solution(1000); // should return 'M'
/* I          1
V          5
X          10
L          50
C          100
D          500
M          1,000 */
// function solution(number) {
//     number = number.toString();
//     let x = '1 2 3 4 5 6 7 8 9 10 100 400 500 900 1000'.split(' ');
//     //console.log(x)
//     let y = 'I II III IV V VI VII VIII IX X C CD D CM M'.split(' ');
//     for (let i = 0; i < x.length; i++) {
//         if (number == x[i]) {
//             return y[i]
//         } else if (number.length === 3 & number[0] == x[i] && number != 400 && number != 500 && number !== 900) {
//             return y[10].repeat(Number(x[i]));
//         } 
//     }
// }

// console.log(solution(2000))



// --- Sum of Pairs Solution ---

// function sumPairs(ints, s) {
//     let k = [];
//     let w = [];
//     let lastNumber;
//     for (let i = 0; i < ints.length; i++) {
//         if (lastNumber && lastNumber === ints[i]) {
//             continue;
//         } else {
//             lastNumber = ints[i];
//         }
//         for (let j = i + 1; j < ints.length; j++) {
//             if ((ints[i] + ints[j]) === s) {
//                 k.push([ints[i], ints[j]]);
//                 w.push(Math.abs([i - j]));
//             }
//         }
//     }
//     //   console.log(w);
//     //   console.log(k);
//     //   let min = w.sort();
//     let min = Math.min(...w);
//     //   console.log(min);
//     if (k.length === 0) {
//         return undefined;
//     } else if (k.length === 1) {
//         return k[0];
//     } else {
//         return k[w.indexOf(min)];
//     }
// }

// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10))


/** From Facebook Chat Group
  12, 15, 20, 50, 75, 70, 99, 63, 90
  ব্যবধান ৫
  10-14
  15-19
  20-24
  25-29
  
  ... ...
  ... ...

  95-99

*/

// function tallyProblem(arr) {
//     let obj = {
//         14: 0,
//         19: 0,
//         24: 0,
//         29: 0,
//         34: 0
//     }

//     for(let value in obj){
//         for(let i = 0; i<arr.length; i++){
//             if(arr[i] <= parseInt(value)){
//                 obj[value]++;
//                 arr.splice(i, 1);
//                 i--;
//             }
//         }
//     }

//     return obj;
// }

// console.log(tallyProblem([12, 13, 31, 35, 21, 27, 29, 14, 31, 32, 15, 16, 17, 20]));


// Factorial of any number without Recurrsion****

// function factorialize(num) {
//   let result = num;
//   if (result === 0) {
//     return 1;
//   } else {
//     while (num !== 1) {
//       result = result * (--num);
//     }
//   }
//   return result;
// }

// console.log(factorialize(0));


// Missing letter Problem from freecodecamp

// function fearNotLetter(str) {
//   // let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   // for (let i = alphabet.indexOf(str[0]); i <= alphabet.indexOf(str[str.length - 1]); i++) {
//   //   if (!str.includes(alphabet[i])) {
//   //     return alphabet[i];
//   //   }
//   // }
//   for(let i = str.charCodeAt(0); i<=str.charCodeAt(str.length-1); i++){  // another way
//     if(!str.includes(String.fromCharCode(i))){
//       return String.fromCharCode(i);
//     }
//   }
// }

// console.log(fearNotLetter("abce"));


// Sum of all fibonacci odd numbers from freecodecamp

// function sumFibs(num) {
//   let fibonacci = [0, 1];
//   let sum = 0;

//   for (let i = 0; i < num; i++) {
//     if ((fibonacci[i] + fibonacci[i + 1]) <= num) {
//       fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
//     } else {
//       break;
//     }
//   }

//   for (let i = 0; i < fibonacci.length; i++) {
//     if (fibonacci[i] % 2 === 1) {
//       sum += fibonacci[i];
//     }
//   }

//   //console.log(fibonacci);
//   //console.log(sum);

//   return sum;
// }

// console.log(sumFibs(75025));

