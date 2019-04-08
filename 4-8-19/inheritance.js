function Teacher(){
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
 console.log(teacher1.name, teacher2.name);