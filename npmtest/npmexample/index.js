//console.log("This is the first part of the exercise");

//var req = require('request-promise');
//var Moment = require('moment');

var req = require ('./DataAcess')
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

// req.getPost();
// req2.getTime();

setInterval(() => {
    req.getPost();
req2.getTime();
}, 3000);