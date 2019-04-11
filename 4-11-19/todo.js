$('#myButton').on('click', function(event){
	//Update button html
	$(this).html("button clicked");

	//Create a new element
	const newEl = '<a>look at me!</a>';

	//Append new element
	$('#someOtherElement').append(newEl);

	//Add an attribute
	$('#someOtherElement').append(newEl).attr({'href' : 'http://techtalentsouth.com'})

	//Remove it
	newEl.remove();