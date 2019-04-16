//console.log("This is the first part of the exercise");

var req = require('request-promise');
var Moment = require('moment');

//var a = new Moment();
//console.log(a.format('h:mm:ss a')); //logs the current time

// req('http://jsonplaceholder.typicode.com/posts/1')
// .then(function(htmlString){
//     console.log(htmlString);
// });




setInterval(() => {req('http://jsonplaceholder.typicode.com/posts/1')
.then(function(htmlString){
    console.log(htmlString);
    console.log(Moment().format("h:mm:ss a"))
});
    
}, 3000);

