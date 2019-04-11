/*$('#myButton').on('click', function(event){
	//Update button html
	$(this).html("button clicked");

	//Create a new element
	const newEl = '<a>look at me!</a>';

	//Append new element
	$('#someOtherElement').append(newEl);

	//Add an attribute
	$('#someOtherElement').append(newEl).attr({'href' : 'http://techtalentsouth.com'})

	//Remove it
    newEl.remove();*/
    
    $('#submit').hover(function(){
     $('#submit').html('Make sure that everything on the list is complete');
    },function() {$('#submit').html("Click when ALL task are complete")
    });
    $('#submit').click(function(){
        alert ('Glad you are finished!')
    })

    $(document).ready(function(){

        $("#addOne").click(function() {
              var value = $("#name").val();
                var $listItem = $("<li striked=false>" + value + "</li>");
                $listItem.click(function(){
      
                  if($(this).attr('striked')=='true'){
                    $(this).attr('striked', 'false');
                    $(this).removeClass('strike-through');
                  } else {
                    $(this).attr('striked', 'true');
                    $(this).addClass('strike-through');
                  }
      
                });
                $("#todolist > ol").append($listItem);
              });
      
              $("#clear").click(function(){
                $("#todolist > ol").empty();
              });
      });