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

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent= 'hello';

var odd =  document.querySelectorAll('li:nth-child(odd)');
var even =  document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
    even[i].style.backgroundColor='#ccc';
}

