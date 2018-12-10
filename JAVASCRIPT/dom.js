
//GETELEMENTBYID//
// var Header = document.getElementById('main-header');
// var HeaderTitle = document.getElementById('header-title');
// HeaderTitle.textContent = 'hello';
// HeaderTitle.innerText = 'Goodbye';
//Cela va ajouter un <h3>, il ne va pas changer le <h1> en <h3>.
//HeaderTitle.style.border = 'solid 3px #000';



























//GETELEMENTSBYCLASSNAME//

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);

// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundcolor = 'yellow';

// // items.style.backgroundColor = '#f4f4f4';

// for (var i = 0; i < items.length ; i++)
// {
//     items[i].style.backgroundColor = 'gray';
// }























//GETELEMENTBYTAGNAME//


// var items = document.getElementsByClassName('li');
// console.log(li);
// console.log(li[1]);

// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundcolor = 'yellow';

// // items.style.backgroundColor = '#f4f4f4';

// for (var i = 0; i < li.length ; i++)
// {
//     li[i].style.backgroundColor = 'gray';
// }















//QUERYSELECTOR//

// var header = document.querySelector('#main-header');

// header.style.borderBottom = 'solid 4px gray';

// var input = document.querySelector('input');
// input.value = 'Hello world';

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = 'EnvoyerDeTypeInstantané';

// var item = document.querySelector('.list-group-item');
// item.style.color = "blue";

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = "red";

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color = "green";

// var fourthItem = document.querySelector('.list-group-item:nth-child(4)');
// fourthItem.style.color = "black";


//QUERYSELECTORALL//

// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'red';
//     even[i].style.backgroundColor = 'green';
// }



//TRAVERSING THE DOM//

var itemList = document.querySelector('#items');





// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';






// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';




// childNodes
// console.log(itemList.childNodes);





// console.log(itemList.children [2]);
// itemList.children[1].style.backgroundColor = 'yellow';



// //FIRST CHILD//

// console.log(itemList.firstChild);

// //FIRSTELEMENTCHILD//

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.color = 'green';



// //LASTELEMENTCHILD//

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.color = 'red';




// //Nextsibbling

// console.log(itemList.nextSibling);

// //Next element sibling

// console.log(itemList.nextElementSibling);








// //previous sibling

// console.log(itemList.previousSibling);

// //previous element sibling

// console.log(itemList.previousElementSibling);





//at this moment, jquery isnt opitmized, so useless to use it.




//create Element


//create a div
var newDiv = document.createElement('div');
//add a class to previous div
newDiv.className = 'hello';
//add an id to previous div
newDiv.id = 'helloo';


// add attribute
newDiv.setAttribute('title', 'Hello div');


//create txt node

var newDivText = document.createTextNode('Hello world !!');

//add text to div

newDiv.appendChild(newDivText);


var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);


newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);


