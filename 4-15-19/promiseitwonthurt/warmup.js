/*Parse.User.logIn('user', 'pass').then(function (user) {
    return query.find();
  }).then(function (results) {
    return results[0].save({ key: value });
  }).then(function (result) {
    // the object was saved
  }).catch(function (err) {
    // an error happened somewhere in the process
  });
*/
setTimeout(function (){
    console.log("TIMED OUT")
}, 300)//this example does not work in the node school because of the 

setTimeout( () => {console.log('TIMED OUT!')}, 300)// remember to look at the arrow function because this example was looking for the strict comparisons