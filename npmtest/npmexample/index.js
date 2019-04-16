//console.log("This is the first part of the exercise");

//var req = require('request-promise');
//var Moment = require('moment');

var req = require ('./DataAcess')// ./ is needed to locate the file
var req2 = require('./TimeStamp')

//var a = new Moment();
//console.log(a.format('h:mm:ss a')); //logs the current time

// req('http://jsonplaceholder.typicode.com/posts/1')
// .then(function(htmlString){
//     console.log(htmlString);
// });




// setInterval(() => {req('http://jsonplaceholder.typicode.com/posts/1')
// .then(function(htmlString){
//     console.log(htmlString);
//     console.log(Moment().format("h:mm:ss a"))// in order to get the time to print differently, you will have to use the Moment, not the new moment.
// });
    
// }, 3000);



//modules
//added data access and timestamp modules in separate js files. And then each module had to have the variable needed to run the module.

// req.getPost();// was called to run the function  getPost() in the module data access
// req2.getTime();// was called to run the function getTime() module time stamp

setInterval(() => {
    req.getPost();
req2.getTime();
}, 3000);// a new setinterval was created to take in the two required variables with their functions so that you display the information at 3 second intervals