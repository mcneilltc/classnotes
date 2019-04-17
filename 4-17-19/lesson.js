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


function add(){
    console.log("arguments object:", arguments);
    var numbers = Array.prototype.slice.call(arguments),
    var sum = 0;
    numbers.forEach(function(number){sum += number;});
    return sum;
}
console.log(add(1,2,3,4,5,6,7,8));