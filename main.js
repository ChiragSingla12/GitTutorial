// GET ELEMENTS BY CLASS NAME

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);

items[1].textContent='hello 2';
items[2].style.background='green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}