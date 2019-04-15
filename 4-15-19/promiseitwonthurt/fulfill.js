var promise = new Promise(function (fulfill, reject) {
    // Your solution here
    setTimeout(function() {fulfill ('FULFILLED!')}, 300);
  
  // Your solution here
  
})
.then((fulfill) => console.log(fulfill, 'FULFILLED'), 300);
(err) => console.log('reject', err);


  
   // Create a promise-- computer answer
    
   var promise = new Promise(function (fulfill, reject) {
    // After the timeout reaches 300ms, fulfill the promise with value
    // 'FULFILLED!'.
  
    setTimeout(function () {
      fulfill('FULFILLED!');
    }, 300);
  });
  
  // Add a handler to the promise’s fulfillment. `console.log` will be called
  // with the value passed to `fulfill`, which is `'FULFILLED!'`.
  // Note that this statement will ALWAYS be executed before `fulfill` is
  // called (we'll talk about this in depth in the lessons to come).
  
  promise.then(console.log);*/