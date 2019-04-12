

//Make a GET request for the items to render
$.get('http://jsonplaceholder.typicode.com/posts',function(posts){
	//Iterate over the response, adding elements to DOM
	console.log(posts);
	});//get the post

$('#getallposts').click(function(){
    $.get('http://jsonplaceholder.typicode.com/posts',function(posts){
	//Iterate over the response, adding elements to DOM
	console.log(posts);
	});//the button will get all the post
});

$('#post10').click(function(){$.get('http://jsonplaceholder.typicode.com/comments?postId=10', function(postId){
    console.log(postId);
});
});