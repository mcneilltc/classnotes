/*function Teacher(){
    }
Teacher.prototype = {
    name: "Whatever",
    teach: function(){
        console.log(this.name + "says contructos are cool");
    }
}
const teacher1 = new Teacher('Chane');
const teacher2 = new Teacher('Assaf');


 teacher1.teach();
 teacher2.teach();
 teacher1.name = "jimmy"
 console.log(teacher1.name, teacher2.name);*/

 function Person(){
     this.brain =true;
 }
 function Student(){
     this.computer =true;
 }
 function Graduate (){
     TouchList.skillz = "Mad";
 }
 const p = new Person()
Student.protoype =p;//true
const s = new Student();  
Graduate.prototype = s;
const g = new Graduate();
console.log (g.skillz, g.computer, g.brain);   
// every graduate is a student, every student is a person, is how the order works. The graduate
 // if you chain prototypes you have if will have to have the the properties in the next chain to call in the new prototype

 class Person {
    constructor(){
        this.brain = true;
    }
}
class Student extends Person {
    constructor() {
        super();
        this.computer = false;
    }
}
class Graduate extends Student {
    constructor() {
        super();
        this.skillz = "Mad";
    }
}

const p = new Person();
Student.prototype = p; //true
const s = new Student();
Graduate.prototype = s; //false
const g = new Graduate(); //"Mad"
console.log(g.skillz, g.computer, g.brain);

//Using previous example
console.log(g.hasOwnProperty('skillz'),g.hasOwnProperty('computer')) //true,false