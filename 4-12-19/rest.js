//get all posts

$('#getallposts').click(function(){
    $.get('http://jsonplaceholder.typicode.com/posts',function(posts){
	//Iterate over the response, adding elements to DOM
	console.log(posts);
	});//the button will get all the post
});
//get post id of 10
$('#post10').click(function(){$.get('http://jsonplaceholder.typicode.com/posts/10', function(postId){
    console.log(postId);//1 user with the post id of 10
});
});
//get the comments from post with id of 12
$('#com12').click(function(){$.get('http://jsonplaceholder.typicode.com/comments?postId=12', function(comId12){
    console.log(comId12);// comments with the post id of 12
});
});
//get all the posts from the user with the id of 2
$('#userid2').click(function(){$.get('http://jsonplaceholder.typicode.com/users?userId=2', function(userId2){
    console.log(userId2);// users with the user id of 2
});
});
//create new post and log the id generated for it by the server
$('#newpost').click(function(){$.post('http://jsonplaceholder.typicode.com/posts/', function(newPost){
    console.log(newPost.id);// create a new post with new id and it is supplied with an id
});
});
//replace post the post with id of 12 and render the responseJSON
$('#replacepost').click(function(){
fetch('https://jsonplaceholder.typicode.com/posts/12',{
    method: 'PUT',
    body:JSON.stringify({
        title: "something",
        body: "something else",    
    }),
    headers: {
        "Content-Type": "application/json"
    }
})
  .then(response => response.json())
  .then(json => console.log(json))

  fetch('https://jsonplaceholder.typicode.com/posts/12', {
      method: 'PATCH',
      body: JSON.stringify({
        title: "new titles",
      }),
      headers: {
          "Content-Type": "application/json"
      }
  })
  .then(response => response.json())
  .then(json => console.log(json))
})
//update the title of the posr with id of 12 and render responseJSON
$('#updatepost').click(function(){
fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'all of this work',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

  fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'almost finished',
     userId: 1// had to add user Id in order to get it to stay the same
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }  
  })
  .then(response => response.json())
  .then(json => console.log(json))
})
  //delete post
  
  $('#deletepost').click(function(){fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'DELETE'
    
  })
  alert('Successfully deleted')})

  //display a list of posts, when the user clicks on the post, display all the comments from the post and then display a link back to all posts
const posts = $('ol#posts');
$('#display').click(function(){$.get('http://jsonplaceholder.typicode.com/posts', function(posts){
    console.log(posts)    
posts.forEach(function(post){
    const li = $ ('<li></li>');
    //li.text(post);
    //posts.append(li);
    
})
});	 
})