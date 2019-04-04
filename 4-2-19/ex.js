/*var x = 1;
var y =1;
 x =2;
//statement becomes false when the value of x changes because they are no longer equal
x === y;

 var y = x;


 var x = {name: "Evan"}
 vay y ={name: "Evan"}

 x===y
 //false

 var x = {name: "Evan"}
 vay y ={name: "Evan"}
var y=x
 x===y
 // true because y has been reassinged to equal x


 var matt ={name: 'matt'};
 var julian ={name:' julian'};
 var students ={matt, julian};

 students.indexOf(julian);
 students.indexOf({name: 'julian'});

function add(){
var sum =0
for(var i= 0; i<arguments.length; i++

)
sum += arguments[i];
} return sum;
 console.log(add (1,2,3,4,5,6,7,8,9));*/

//Anonymous function
 /*var calculator ={
     add: function(a,b){
         return a+b;
     }
 }
 calculator.add(2,3);
 console.log(calculator.add(2,3));*/

 var arrayWow = [
     ['anonymous' ,'array'],
     { name: 'anonymous object'},
     function(){return 'Anonymous function'}
 ]
 console.log(arrayWow[0][1]); //array
 console.log(arrayWow[1].name); //anonymous object
 console.log(arrayWow[2]());