/*const p = new Promise(function(resolve,reject){
	//do something async...and get a value
	const myAsyncValue = 'abc'
	resolve(myAsyncValue);
});

p.then(function(data){
	//console.log(data);
})
*/
//var p = new Promise(function(resolve, reject) {  
    //if (/* condition */) {
      // resolve(/* value */);  // fulfilled successfully
    //}
    //else {
    //   reject(/* reason */);  // error, rejected
    //}
 //});
 /*
 promise.then(function(result) {
   console.log(result); // "Stuff worked!"
 }, function(err) {
   console.log(err); // Error: "It broke"
 })*/

//1. Login page - Display a login form asking user for a username.
//On Submit, look up the username entered by the user.
//If no user is found, display a detailed error message.

//$('#submit').click(function(){$.get('http://jsonplaceholder.typicode.com/users', function(user){
    //Iterate over the response, adding elements to DOM
	//console.log(user);
	//});//the button will get username
//});

$('#submit').click(function() {

    // 1. Get the value from the form the user entered as the username
    // Note: all usernames retreived from the site are in lowercase letters
    var user = document.getElementById('inlineFormInputGroupUsername2').value;
    var exists = false;

    let userName = document.querySelector('input#inlineFormInputGroupUsername2')
 let submit = document.querySelector('button [type="submit"]')
 submit.addEventListener("click", event => {
    //executor
 })
function findUser(userName) {
   return new Promise(function(resolve, reject){
      $.get('http://jsonplaceholder.typicode.com/users?username=' + userName, function(user){
         if(user.length) resolve(user[0])
   else reject('error message');
      }) //if the user option exists
   })
}

function getUserPost(user){
   return new Promise(function(resolve, reject){
$.get('http://jsonplaceholder.typicode.com/post?userid=' + user.Id, function(posts){
   resolve(posts)
})
   })
}

    // 2. Get the list of users from jsonplaceholder.typicode.com/users
    // https://api.jquery.com/jQuery.get/
    // 3. See if the entered username exists in the list of users from jsonplaceholder.typicode.com
    $.get('http://jsonplaceholder.typicode.com/users', function(users) {

        // users is the list of users returned from jsonplaceholder.typicode.com/users
        // the "users" variable is an array of objects
        // Gets the number of users returned from the website.
        var numUsers = users.length;
        // loops through the "users" array
        for (var i = 0; i < numUsers; i++) {
            // 
            if (user === users[i].username) {
                exists = true;
                break;
            }
        }
	  });

    
    
    // maybe some kind of loop, break if the user is found, set "exists" to true?
    // $.get('http://jsonplaceholder.typicode.com/users', function(users){
    //   $('').html(users.filter(function(user){
    //       return ''
      
    //   }))  
    // 4. If not, show an error message on promise.html
    if (exists === false) {
        // do stuff
    }

    // 5. If so, redirect the user to a second webpage showing them their user information
    if (exists === true) {
        // redirect to second page
    }
});




//2.If the user is found, store user object and render User's homepage
//User's homepage displays:
//User's name
//User's post titles
//User's albums
