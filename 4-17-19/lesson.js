//Template literals
// console.log(`Hello! I'm a string
// continues on this line`);// pressed enter and the line continued

// const name = "Jimmy"
// const day =" Wednesday"
// const instructor = {//ES6
//     name: "Chris",
//     lesson: "ES6",
//     greet: function(){
//         return `Hellow ${this.name} whatever lesson is ${this.lesson}`
//     }
// }

// console.log("Hello" + name + "I hope you have a great day on" +day);

// //es6 way

// console.log(`Hello ${name} I hope ${day} goes well`)
// console.log(`${instructor.name} will be teaching ${instructor.lesson} today`)

// console.log(instructor.greet());

// //var let const

// // function foo(){
// // let x =true;
// // if(x){
// //     var usingVar = "I'm using var";//hoisting happens with the var- its usually at the top of the function and can be used through the whole thing
// // }
// // console.log(usingVar)
// // }
// // foo();

// // function foo(){
// //     let x =true;
// //     if(x){
// //         let usingVar = "I'm using let";//using let gives you more control of your variables
// //     }
// //     console.log(usingVar)
// //     }
// //     foo();// will log undefined

//  //typeError
 
//  const instructors =["Jimm", "Christ"]
//  //instructors=["Jim", "Chris"]//won't work because the const has all ready been assigned
//  instructors.push("Jack", "Jill")// this method adds new instructors to the array
//  console.log(instructors)

//  function  hello(name){
//      name =name || "Mystery Person";
//      console.log("Hello" + name + "!")
//  }
// hello("Bobby");
// hello();


// function hello(name = "Mystery Person"){
//     console.log(`Hello ${name} is it me you're looking for`)
// }


// //arrow functions!

// const teacher ={
//     name: "Jimm",
//     speak: function(){
//         ///bind a fuction to a specific context
//         let boundFunction = function{
//         console.log('later my name is' + this.name);
//     }.bind(this);//have to explicitly use bind.this in order to pull out the this.name since this.name is sutck inside hte function
//     //bound function will always run in bound context
//     setTimeout(boundFunction, 1000);
// }
// };
// teacher.speak();
// const teacher = {
// name: "Jimm",
// speak:(){
//     let boundFunction = () => {// take out the function and replace with ()=> and then remove .this.name
//     console.log('later my name is' + this.name);
// };
// setTimeout(boundFunction, 1000);

// }};
// teacher.speak();
// //lexical Binding-they bind to scope where defined not where they are used

// let students =[
//     {name: 'Hugo'},
//     {name: 'Candace'},
//     {name: 'Taylor'},
//     {name: 'Dimitri'}

// ];
// let names = students.map((student)=> student.name);// .map is the function, student is the argument there is an implict return happening.
// let names = students.map((student) =>{
//     return student.name
// })// this will return the same value as above, its just that there is the
// console.log(names);


// function add(){
//     console.log("arguments object:", arguments);

//     var numbers = Array.prototype.slice.call(arguments);
//     var sum = 0;

//     numbers.forEach(function (number){sum += number;
//     });
//     return sum;
// }
// console.log(add(1,2,3,4,5,6,7,8));

//ES6
let add = (...numbers) => {// ... is the rest operator for the parameter
    console.log("rest parameters", numbers)
    let sum= 0;
    numbers.forEach(function(number){
        sum += number;
    })
    return sum;
}
console.log(add(1,2,3,4,5,6,7,8));

//rest parameter

let add2 =(...numbers) =>numbers.reduce((sum, number)=> sum += number, 0);// reduce takes in all the numbers and returns it as an array. 0 is where you want the function to start in the array
console.log(add2(1,2,3,4,5,6,7,8));


function addStuff(x, y, ...z){
    //make sure he rest element is at the end of the arugment
    return (x+y) * z.length
}
console.log(addStuff(1,2, "hello", "world", true, 99));// returns 12 because the length of array z is 4, the last 4 items in the parameters are taken in as an array of z.

//spread operator
let random = ["hellow", "world", true, 99]
let newArray = [1,2, ...random, 3]
console.log(newArray);

let spreadEX =(item) => {
    let spreadArray = [...item]
    console.log(spreadArray);
    return spreadArray
}
spreadEX("Hello World");
//[ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ], breaks apart each piece of the arugment and returns it into  an array

let restEX = (...z) => {
    console.log(z)
    return z
} 
restEX("hello", "world")
//[ 'hello', 'world' ] is returned as an array