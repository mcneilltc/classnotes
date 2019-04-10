/*Update the 'Coffee' item to say 'Fair Trade Coffee'
Remove 'Twinkies' from the list
Add an item 'Cheese Whiz'
Clear the list and programmatically add items from the array ['protein powder', 'muscle milk', 'power bars']
Add the class 'important' to the muscle milk item.*/

var list = document.querySelector('#list');// # references an id and not a class
var coffee = list.children[1].textContent = "Fair Trade Coffee";

var newLi = document.createElement('li');
newLi.innerHTML = "Cheese Whiz"
list.appendChild(newLi);


//var newLI3 = document.createElement('li');
//newLI3. innerHTML = "protein powder" ;
//list.appendChild(newLI);
//list.appendChild(newLI2);
//list.appendChild(newLI3);
 
//console.log(newLI);
//console.log(newLI2);



