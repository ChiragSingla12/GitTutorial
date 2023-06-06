// GET ELEMENTS BY CLASS NAME

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);

// items[1].textContent='hello 2';
// items[2].style.background='green';

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }


// GET ELEMENTS BY Tag NAME

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);

// li[1].textContent='hello 2';
// li[2].style.background='green';

// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold';
// }

// QUERYSELECTOR

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'hello world';

// var submit = document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem = document.querySelector('.last-group-item:kast-child');
// lastItem.style.color='blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='green';

// var secondItem = document.querySelector('.list-group-item:nth-child(3)');
// secondItem.style.display='none';

//QUERYSELECTORALL

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent= 'hello';

// var odd =  document.querySelectorAll('li:nth-child(odd)');
// var even =  document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
//     even[i].style.backgroundColor='#ccc';
// }

// traversing the dom

// var itemList = document.querySelector('#items');

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].getElementsByClassName.backgroundColor='yellow';

// //firstChild
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello 1';

// lastChild
// console.log(itemList.lastChild);
//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='hello 4';

// //nextSibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';


//create element
// create a div

var newDiv = document.createElement('div');
//add a class
newDiv.className='hello';
// add a id
newDiv.id='hello1';
//add attr
newDiv.setAttribute('title', 'hello div');

//create text node

var newDivText=document.createTextNode('Hello World');
// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');


console.log(newDiv);
newDiv.style.fontSize='30px';

container.insertBefore(newDiv, h1);