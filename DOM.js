// --- Selectors Part 1 [ Id, ClassName, TagName, Name ] in JS ---

// let title = document.getElementById('title1');
// console.log(title);

// let x = document.getElementsByClassName('text-center');
// // console.log(x);

// let y = document.querySelector('.text-center');
// console.log(y);

// let paragraphs = document.getElementsByClassName('lead');
// console.log(paragraphs);

// let lists = document.getElementsByTagName('li');
// console.log(lists);

// let listItemOne = document.getElementsByName('list-item-one');
// console.log(listItemOne);


// --- Selectors Part 2 By Query Selector [ Using CSS SELECTOR ] ---

// let title = document.querySelector('#title');
// console.log(title);

// let paragraph = document.querySelector('.lead');   // which selects the first appearence
// console.log(paragraph);

// let paragraphs = document.querySelectorAll('.lead');   // to select all the apearences
// console.log(paragraphs);

// let lists = document.querySelectorAll('li');
// console.log(lists);

// let listItemOne = document.querySelector('[name^="list-item-one"]');
// console.log(listItemOne);


// --- getElements vs querySelector !!!!! ---

// let li = document.getElementsByTagName('li');  // Element Node
// console.log(li.constructor);

// let li2 = document.querySelectorAll('li');  // Node [ Element, Comment, Text, ... anything ]
// console.log(li2.constructor);

// let ul = document.getElementsByTagName('ul');   // Element means only HTML elements
// console.log(ul);

// let ul2 = document.querySelector('ul');
// // console.log(ul2);
// console.log(ul2.children);   // Only HTML Elements 
// console.log(ul2.childNodes); // Node means everything including HTML elements**


// --- How to Traverse DOM elements in JS ---

// let list = document.getElementById('list');
// console.log(list);

// console.log(list.parentElement);
// console.log(list.children);
// console.log(list.previousElementSibling);
// console.log(list.nextElementSibling);

// let li = document.querySelector('li');
// console.log(li.nextElementSibling);

// console.log(list.firstElementChild)
// console.log(list.lastElementChild)


// --- How to loop throw HTML Collections in JS ---

// let listItem = document.getElementsByTagName('li');   // return an iterable but not array that's why we can iterate using for loop but for-each method doesn't work with this

// // console.log(listItem)
// // let x = Array.from(listItem);   // return an array
// // console.log(x)
// // let y = Array.prototype.slice.apply(listItem);  // return an array
// // console.log(y);
// // let z = [...listItem];    // return an array
// // console.log(z);

// for(let i = 0; i<listItem.length; i++){
//     listItem[i].innerText = `${i+1}  ${listItem[i].innerText}`
// }


// ----- Create DOM elements in JS -----

// function createElement(tagName, className, innerText){
//     let tag = document.createElement(tagName);
//     tag.className = className || '';
//     tag.innerText = innerText || '';

//     return tag;
// }

// function append(parent, children){
//     children.forEach((child)=> parent.appendChild(child));
// }

// let p1 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus necessitatibus, eos ipsa vitae, dolore temporibus provident maxime voluptatem laboriosam repellat ea recusandae facere cupiditate veritatis veniam maiores dolorum eius.');

// let p2 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus necessitatibus, eos ipsa vitae, dolore temporibus provident maxime voluptatem laboriosam repellat ea recusandae facere cupiditate veritatis veniam maiores dolorum eius.');

// let newDiv = createElement('div', 'newDiv');
// append(newDiv, [p1, p2]);
//console.log(newDiv);

// let container = document.querySelector('.container');  // using querySelector
// container.appendChild(newDiv);

// let container = document.getElementsByClassName('container');  // using getElementsBy
// container[0].appendChild(newDiv);

// // ---- Insert Element in JS** -----

// let list = document.getElementById('list');
// let list = document.querySelector('#list');
// // list.insertAdjacentElement('beforebegin', newDiv);
// // list.insertAdjacentElement('afterbegin', newDiv);
// // list.insertAdjacentElement('beforeend', newDiv);
// list.insertAdjacentElement('afterend', newDiv);


// ----- Update & Remove any DOM elements in JS -----

// let list = document.querySelector('#list');
// // let list = document.getElementById('list');
// let firstChild = list.firstElementChild;
// // console.log(firstChild)

// setTimeout(()=>{
//     firstChild.innerText = firstChild.innerText + ' Modified';
//     firstChild.style.backgroundColor = 'green';
//     firstChild.className = 'again new class'; 
//     // firstChild.classList.add('new-Class1', 'newClass2'); // add these className with existing class & className should be single name**
// }, 2000)

// setTimeout(()=>{
//     list.lastElementChild.remove();
// }, 3000)

// // let x = firstChild.classList;
// // console.log(x);
// // firstChild.classList.remove('new')  // working before setTimeout(); NB: classList has many important method, have to learn**


//  ----- How to clone node including it's child element in JS -----

// let list = document.querySelector('#list');
// // let x = list.lastElementChild.cloneNode();   // clone only first element tag
// // // let x = list.lastElementChild.cloneNode(true);  // clone everything

// // x.innerText = 'Four';

// // list.appendChild(x);

// let y = list.cloneNode(true);

// let container = document.querySelector('.container');
// container.appendChild(y);


// ---- How to deal with attributes in DOM manipulation in JS ----

// let list = document.querySelector('#list');

// console.log(list.attributes)   // how to get attributes of any element; some more way given below
// // console.log(list.getAttributeNames());   // return like id, class, style etc
// // console.log(list.getAttributeNode('style'));
// // console.log(list.getAttribute('style'))

// // console.log(list.style) // but we use like this


// // list.id = 'new id';  // how to set an attribute in any element; some more way given below
// // list.setAttribute('id', 'another new id');   // this is prefarable

// let attr = document.createAttribute('title');
// attr.value = 'this is new title';

// list.setAttributeNode(attr);


// ----- Style in DOM in JS -----

// // let title = document.querySelector('#title1');

// // title.style.background = 'green';
// // title.style.fontSize = '40px';
// // title.style.color = 'yellow';

// let list = document.querySelector('#list');
// list.style.background = 'red';

// let styleObj = {
//     background: 'green',
//     fontSize: '40px',
//     color: 'yellow'
// };

// //Object.assign(list.style, styleObj);

// for(let element of list.children){
//     Object.assign(element.style, styleObj);
// }

// // [...list.children].forEach((element)=> Object.assign(element.style, styleObj));  // another way


//  ----- Introduction to Event in DOM manipulation in JS -----

// let button = document.querySelector('#btn');

// button.addEventListener('click', (event) => {
//     let list = document.querySelector('#list');
//     let newChild = list.lastElementChild.cloneNode();
//     newChild.innerText = 'Newly Created Item';
//     list.appendChild(newChild);
//     console.log(event);
// })

// let list = document.querySelector('#list');

// list.addEventListener('click',  function (event){   // using normal funciton instead of arrow function because of 'this'
//     if(this.contains(event.target)){
//         event.target.remove();
//     }
// })


// let button = document.querySelector('#btn');
// let list = document.querySelector('#list');   // dynamically add new Item

// function wrapper() {
//     let i = 0;
//     button.addEventListener('click', clickHandler)

//     function clickHandler() {
//         let newChild = list.lastElementChild.cloneNode(true);
//         let x = ['Four', 'Five', 'Six', 'Seven'];

//         newChild.innerText = x[i];

//         list.appendChild(newChild);
//         if (i === x.length - 1) {
//             button.removeEventListener('click', clickHandler);
//         }

//         i++;
//     }
// }

// wrapper();


// let lists = list.children;

// [...lists].forEach((element)=> {
//     element.addEventListener('click')
// })


// let box = document.querySelector('#box');

// box.addEventListener('mousemove', (event) => {
//     // document.querySelector('#x-value').innerText = event.clientX;
//     // document.querySelector('#y-value').innerText = event.clientY;
//     document.querySelector('#x-value').innerText = event.offsetX; // return box-wise value
//     document.querySelector('#y-value').innerText = event.offsetY;
//     if (event.offsetX === 50 && event.offsetY === 50) {
//         alert(`${event.offsetX}, ${event.offsetY}`);
//     }
//     // console.log(event);
// })


// ---- Input Box Event Handling in JS ----

// let inputBox = document.querySelector('#name');

// inputBox.addEventListener('keypress', function (event){
//     if(event.key === 'Enter'){
//         let showName = document.querySelector('#showName');
//         showName.innerText = `Your Name is ${event.target.value}`;
//         event.target.value = '';
//     }
// })


// ---- Checkbox Event Handling in JS ----

// let skill = document.querySelectorAll('input[name="skills"]');
// let result = document.querySelector('#result');
// let i = 0;

// [...skill].forEach((element)=>{
//    element.addEventListener('change', function (event){
//         if(event.target.checked){
//            let copy = event.target.parentElement.cloneNode(true);
//            copy.querySelector('input').remove();
//            copy.querySelector('label').innerText = `(${++i})  ${event.target.value}`;

//            result.appendChild(copy)
//         } else{
            
//         }
//    })
// })


// From Jahid Bhai**

// let inputFields = document.querySelectorAll('input[name=skills]')
// let result = document.querySelector('#result')

// inputFields.forEach((checkBox) => {
//   checkBox.addEventListener('change', changeHandler)
// })

// let num = 0
// let array = [[], []]

// function changeHandler(e) {
  
//   if(e.target.checked) {
//     num++
//     array[0].push(num)
//     array[1].push(e.target.value)
//     let selectedSkillsContainer = document.createElement('div')

//     array.forEach((subArray, i) => {
//       let label = document.createElement('label')
//       subArray.forEach((el, j) => {
//         if(i % 2 === 1) {
//           label.classList.add('skillText')
//           label.innerHTML = `${el}`
//           selectedSkillsContainer.appendChild(label)
//         }else {
//           label.classList.add('sn')
//           label.innerHTML = `(${el}) `
//           selectedSkillsContainer.appendChild(label)
//         }
//       })
//     })
//     result.appendChild(selectedSkillsContainer)
//   }else {
//     array[1].forEach((el, i) => {
//      if(e.target.value === el) {
//        array[1].splice(i, 1)
//        result.childNodes[i].remove()
//        array[0] = []
//      }
//     })
//     array[1].forEach((el, i) => {
//       array[0].push(i+1)
//       num = array[0].length 
//     })
//     if(array[1].length === 0) num = 0
//     update()
//   }
// }

// function update() {
//   let x = result.childNodes;
//   x.forEach((el, i) => {
//   el.childNodes[0].innerHTML = `(${array[0][i]}) `
//  })
// }


//  ---- List & Input Event Handler in JS ----

// let listItem = document.querySelector('#list').children;

// [...listItem].forEach((li)=> {
//     li.addEventListener('dblclick', function(event){
//         if(event.type === 'dblclick'){
//             let innerText = event.target.innerText;
//             let inputBox = createInputElement(innerText);
//             event.target.innerText = '';
            
//             event.target.appendChild(inputBox);
            
//             inputBox.addEventListener('keypress', function (e){
//                 if(e.key === 'Enter'){
//                     event.target.innerText = e.target.value;
//                 }
//             })
//         }
//     })
// })

// function createInputElement(value){
//     let input = document.createElement('input');
//     input.type = 'text';
//     input.value = value;

//     return input;
// }


// ---- Form Handling & Validation in DOM in JS ----

// let form = document.querySelector('#form');

// // console.log(form);
// // console.log(form.elements);
// // console.log(form.length)
// // console.log([...form])

// form.addEventListener('submit', function (event){
//     event.preventDefault();
//     let dataObj = {};
//     let isValid;
//     [...form].forEach((element)=>{
//         isValid = formValidation(element);
//         if(isValid){
//             if(element.type !== 'submit'){
//                 dataObj[element.name] = element.value;
//             }
//         } else {
//             alert(`Please Enter Your ${element.name}.`);
//         }
//     });
//     console.log(dataObj);
// })

// function formValidation(element){
//     if(!element.value){
//         return false;
//     } else {
//         return true;
//     }
// }

// form.addEventListener('submit', function (event){   // form validation with dynamic alert
//     event.preventDefault();
//     let dataObj2 = {};
//     let isValid;
//     let array = [...form];
//     for(let i = 0; i<array.length; i++){

//         if(i === 0){
//             for(let j = 0; j<array.length; j++){
//                 isValid = formValidation(array[j]);
//                 if(isValid){
//                     if(array[j].type !== 'submit'){
//                         dataObj2[array[j].name] = array[j].value;
//                     }
//                 }
//             }
//         }

//         isValid = formValidation(array[i]);

//         if(!isValid){
//             alert(`Please Enter Your ${array[i].name}.`);
//             break;
//         }
//     }
//     console.log(dataObj2);
// })


//  ---- All About AJAX & XMLHttpRequest() Communicate With the World (From Geekyshows & Sumit Saha)  ----

let getButton = document.querySelector('#getBtn');
let sendButton = document.querySelector('#sendBtn');

getButton.addEventListener('click', makeRequest);

// function makeRequest(){   // making request using onreadystatechange properties
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'data.txt', true);
//     xhr.onreadystatechange = function (){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 console.log(xhr);
//                 console.log(xhr.response);
//             } else{
//                 console.log('Problem Occured.');
//             }
//         }
//     }
//     xhr.send();
// }

function makeRequest(){   // making request using onload properties instead of onreadystatechange
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true);

    // xhr.timeout = 2;   // in milliseconds (we can provide our own value)
    // xhr.withCredentials = true;
    // xhr.responseType = 'text'; // which is by default in text format
    // xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function (){
        if(xhr.status === 200){
            console.log("XHR Object:",xhr);
            console.log("XHR Response:",xhr.response);
            // console.log("Response Text:",xhr.responseText);
            // console.log("Response URL:",xhr.responseURL)
            // console.log("XHR Status:",xhr.status);
            // console.log("XHR Status Text:",xhr.statusText);
            // console.log("XHR With Credentials:",xhr.withCredentials);  // we can change this value same as xhr.timeout
            // console.log("XHR Get Response Header:",xhr.getResponseHeader('Last-Modified'));
            // console.log("XHR Get All Response Headers:",xhr.getAllResponseHeaders());
        } else{
            console.log('Problem Occured.');
        }
    }

    // xhr.onprogress = function (event){
    //     console.log(event.loaded);
    //     console.log(event.total);
    // }

    // xhr.onerror = function (){
    //     console.log('Network not not available.')
    // }

    // xhr.onloadstart = function (){
    //     // logic ....
    //     console.log('Transaction has started.')
    // }

    // xhr.onloadend = function (){
    //     // logic ....
    //     console.log('Transaction End.')
    // }

    // xhr.onabort = function (){
    //     // logic ....
    //     console.log('Abort');
    // }

    // xhr.ontimeout = function (){
    //     console.log('Timeout.');   // this will be printed when timeout limit touched
    // }

    xhr.send();
}

