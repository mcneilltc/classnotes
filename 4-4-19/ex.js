function outer(){

    var a =10;
function inner(){
    var a = 20;
    console.log(a+b);
}
return inner;
}
var x = outer();// function inner(){ var a=20; console.log(a+b);}

var y = outer();
/* when outer() is invoked the second time:

    A new variable b is created, its scope is limited to the outer() function, and its value is set to 10.
	
    The next line is a function declaration, so nothing to execute.
    
	return inner returns the entire body of the function inner.
    
	The contents returned by the return statement are stored in Y.
    
	Function outer() finishes execution, and all variables within the scope of outer() now no longer exist.*/