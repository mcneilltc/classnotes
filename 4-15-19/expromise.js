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