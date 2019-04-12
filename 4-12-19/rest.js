

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

$('#post10').click(function(){$.get('http://jsonplaceholder.typicode.com/posts/10', function(postId){
    console.log(postId);//1 user with the post id of 10
});
});
$('#com12').click(function(){$.get('http://jsonplaceholder.typicode.com/comments?postId=12', function(comId12){
    console.log(comId12);// comments with the post id of 12
});
});
$('#userid2').click(function(){$.get('http://jsonplaceholder.typicode.com/users?userId=2', function(userId2){
    console.log(userId2);// users with the user id of 2
});
});
$('#newpost').click(function(){$.get('http://jsonplaceholder.typicode.com/users?userId=2', function(newPost){
    console.log(newPost);// create a new post with new id
});
});