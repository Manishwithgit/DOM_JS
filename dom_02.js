// traversing the dom...........

var itemlist=document.querySelector('#items');

//parentNode....................

// console.log(itemlist.parentNode);
// itemlist.parentNode.style.background='lightblue';

// console.log(itemlist.parentNode.parentNode.parentNode);

//parentElement..............

// console.log(itemlist.parentElement);
// itemlist.parentElement.style.background='lightblue';

// console.log(itemlist.parentElement.parentElement.parentElement);


//childNode..........................

// console.log(itemlist.childNodes);

// console.log(itemlist.children);

// console.log(itemlist.children[1]);
// itemlist.children[1].style.background='yellow';

//firstClass.................

// console.log(itemlist.firstChild);

// firstElementChild........
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent='hello 01';

//lastElementChild...
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent='hello 04';


//nextSibling....

console.log(itemlist.nextSibling);

console.log(itemlist.nextElementSibling);

//previousSibling..........
console.log(itemlist.previousSibling);
console.log(itemlist.nextElementSibling);
itemlist.previousElementSibling.style.color='green';

// createElement.............

//create div
var newDiv=document.createElement('div');

//add class
newDiv.className="hello agin";

// Add id
newDiv.id='next';

// add attribute
newDiv.setAttribute('title','hello div');

// create text node...........
var newDivtext=document.createTextNode('hello world');

// add text to div.........
newDiv.appendChild(newDivtext);

var container=document.querySelector('header .diba');
var h1=document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv, h1);


