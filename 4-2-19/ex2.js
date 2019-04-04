function add(){
    var a = "This variable is only visible inside the add function";
}
console.log(a) //undefined because you can only use inside this function. It's a local variable only.

function getGreeting(name){
    var greeting ="hello";
    return greeting + name;
}
getGreeting('Max'); // Hello Max call the function to access the variable
console.log(greeting) // will be undefined because you are trying to get the greeting function outside the function.

for(var i= 0; i<10; i++){
    var x=i;
}
console.log(i,x); // functions can only define scope so this would run. they would both show x = 9 and i=9

function greeting(){// setting a variable without a keyword will make it global
    greeting ="hello";
    return greeting +name;
}

//scope chain with functions inside a function,
var city= 'Charlotte'
var greet = function(){
    console.log('Hello' + city);// will look inside the local function first and then go outside.
}
//nested scope
function outer(){
    var x = 'x';
    function inner(){
        var y= 'y';
        console.log(x); //will work
    }
    console.log(x);//
    console.log(y);// does not work because its logs outside the function  in order for it to work you can console.log it inside the funtion. or do a return function to evaluate y to get a value for it so that it can be logged.
}

//nested scope
var landscape = function(){
    var result = '';
    var flat = function(size){
        for (var count =0; count <size; count++)
        result += "_" //
    }; 
    var mountain = function(size)
{
    result += '/';
    for ( var count = 0; count <size; count++)
    result+= "'"
    result+= "//"
;}
flat(3);
mountain(4);
flat(6);
mountain(1);
flat(1);
return result;
}
console.log((landscape()));

const name ='Jack';// global stays the same at var and const
var greet = function(){
    const name = 'Rose'// local and stays the same at var and const
    console.log(name);// looks at the local variable first then the global
} 
console.log(name);// Jack
console.log(greet(name))// Rose and undifined

// sometime a function can define a variable with a same name
const name = 'JAck';
var greet = function(name){
    console.log(name);
}
greet('Joe'); //Joe

const name = 'Jack';
var greet = function(superUniqueVariable){
    var name = superUniqueVariable;
    console.log(name);
}

greet('Joe')// Joe
//

const name = 'Jack';
var greet = function(name){
    console.log(name);
}
greet('Joe'); //Joe

var greet = function(superUniqueVariable){
    var name = superUniqueVariable;
    console.log(name);
}
greet('Joe')// Joe

// scope, closure and hoisting, oh my

function createFunction(){
    var a = "Hans Zimmer Rules!";// function defined to execute in the scope
    inception = function(){
        console.log(a);
    }
}
var inception;
createFunction();
inception(); // "Hans Zimmer Rules!"

// a only exists inside the function, inception references the inception outside of the function- it looks inside the function first and then goes outside. The createFunction just creates a function that you can run outside of the function later in this ex, inception can be run outside of the function

const teacher = {
    name: 'Jimmy',
    sayName: function(){
        console.log(this.name);// this is referring to the object
    }
}
teacher.sayName();// 'Jimmy
//

function sayName(){
    console.log(this.name);
}
const teacher1 = {
    name: 'Jimmy',
    speak: sayName
}
const teacher2 = {
    name: 'Chris',
    speak: sayName
}
teacher1.speak();
teacher2.speak();