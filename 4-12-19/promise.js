const p = new Promise(function(resolve,reject){
	//do something async...and get a value
	const myAsyncValue = 'abc'
	resolve(myAsyncValue);
});

p.then(function(data){
	//console.log(data);
})

var p = new Promise(function(resolve, reject) {  
    if (/* condition */) {
       resolve(/* value */);  // fulfilled successfully
    }
    else {
       reject(/* reason */);  // error, rejected
    }
 });
 
//1. Login page - Display a login form asking user for a username.
//On Submit, look up the username entered by the user.
//If no user is found, display a detailed error message.





//2.If the user is found, store user object and render User's homepage
//User's homepage displays:
//User's name
//User's post titles
//User's albums
