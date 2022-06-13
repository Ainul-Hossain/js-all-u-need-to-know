// let text = '{ "employees" : [{ "firstName":"John" , "lastName":"Doe" },{ "firstName":"Anna" , "lastName":"Smith" },{ "firstName":"Peter" , "lastName":"Jones" } ]}'  // using array because of multiple Object together

// // let text = `{ "employees" : [
// //     { "firstName":"John" , "lastName":"Doe" },
// //     { "firstName":"Anna" , "lastName":"Smith" },
// //     { "firstName":"Peter" , "lastName":"Jones" } 
// // ]}`     // same as avobe & using Template String (` `) to create newline 

// // let text = '{ "employees" : [' +     // using (+) to create new line
// // '{ "firstName":"John" , "lastName":"Doe" },' +
// // '{ "firstName":"Anna" , "lastName":"Smith" },' +
// // '{ "firstName":"Peter" , "lastName":"Jones" } ]}';   // same as avobe

// let obj = JSON.parse(text);
// console.log(obj)



// let check = `[{"name": "Ainul Hossain",
//     "age": 23,
//     "job": "WebDeveloper",
//     "passion": "Coding"
// }, {
//     "parent": "yes",
//     "father-name": "Abul Kashem",
//     "mother-name": "Lucky Akter"
// }]`  // we have to use array when there are multiple Object together, this is the rule for JSON Object.

// let obj1 = JSON.parse(check);
// console.log(obj1)