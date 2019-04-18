const fetchGetReturningPurchaser = id => fetch(`someAPIURL\${id}`).then(response => {//.then function here returns another promise, the fetchGetReturingPurchaser is the initial promise

if( !response.ok) {
    throw new Error(response.statusText);
}
return response.json();
})
const{returningId} = state;
fetchGetReturningPurchaser(returningId.value).then(purchaser =>{
    setLoggedOn(purchaser);
}).catch(error =>{
    setState({
        returningId:{... returningId, message: error.message},
        isLoggingOn: false,
        isWaiting: false,
    });
});




let p = new Promise(function(resolve, reject){
    if(/* what ever the condition is*/){
        resolve(/* whatever the value you are looking for */)// fullfilled successfully, it will stay pending until it has resolved it will stay pending. once the promise is getting a value you can pass it around to other functions. resolve is a keyword. -- new promise is the executor/ the call back function
    };
} else{
    reject(/* reason*/);// error, rejected, 
})// to the promise is either pending, fulfilled or rejected, resolved can either mean fulfilled or rejected


//these are the same statements and the do the same thing
.then((val)=> console.log("fulfilled"), val)// needs a value, then takes in a value of the previous argument. use the .then only when chaining the promises.
(err) => console.log("rejected",err)

.then((val)=> console.log("fulfilled"), val)
.catch((err) => console.log("rejected",err))// .catch is only used when you want to output the error

//"BASIC STRUCTURE OF PROMISE"

let p = new Promise(function(resolve, reject) {  
    if (/* condition */) {
       resolve(/* value */);  // fulfilled successfully
    }
    else {
       reject(/* reason */);  // error, rejected
    }
  });
  
  
  //These are the same statements
  .then((val) => console.log("fulfilled"), val)
        (err) => console.log("rejected", err))
  
  .then((val) => console.log("fulfilled"), val)
  .catch((err) => console.log("rejected", err)