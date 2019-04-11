//$("h1");
//("section").find("*");
//let current = $(".current");
//current.next():
//current.prev().find("h2")[0];
//$(".highlight").parent().parent();
//let allH2 = Array.from($("section").find("h2"));

$('#circle').click(function(){
$('img').attr('src', '')
});

$('#circle').click(function(){//# call the id
    alert('clicked')
});

$('p').hover(function(){//pick an element to start with
    $('p').html('we changed the text')//pick the element to change
});

$('.square').click(function(){
    $('.square').css('background-color', 'blue')// separate each notation, since blue is what you are changing, separate by a comma from background color, to find what you need to change
});


