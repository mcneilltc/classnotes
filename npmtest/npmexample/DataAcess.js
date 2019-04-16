var req = require('request-promise');

const DataAccess = {
    getPost: function(){
        req('http://jsonplaceholder.typicode.com/posts/1')
        .then(function(htmlString){
         console.log(htmlString);
   })
}
}
module.exports = DataAccess;
