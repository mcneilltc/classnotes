//Template literals
console.log(`Hello! I'm a string
continues on this line`);// pressed enter and the line continued

const name = "Jimmy"
const day =" Wednesday"
const instructor = {//ES6
    name: "Chris",
    lesson: "ES6",
    greet: function(){
        return `Hellow ${this.name} whatever lesson is ${this.lesson}`
    }
}

console.log("Hello" + name + "I hope you have a great day on" +day);

//es6 way

console.log(`Hello ${name} I hope ${day} goes well`)
console.log(`${instructor.name} will be teaching ${instructor.lesson} today`)

console.log(instructor.greet());

//var let const

function foo(){
let x =true;
if(x){
    var usingVar = "I'm using var";//hoisting happens with the var- its usually at the top of the function and can be used through the whole thing
}
console.log(usingVar)
}
foo();

function foo(){
    let x =true;
    if(x){
        let usingVar = "I'm using let";//using let gives you more control of your variables
    }
    console.log(usingVar)
    }
    foo();// will log undefined

    
