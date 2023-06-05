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

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);

li[1].textContent='hello 2';
li[2].style.background='green';

for(var i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';
}
