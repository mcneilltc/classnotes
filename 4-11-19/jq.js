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
    $('p').html('we changed the text');},//pick the element to change
function(){ $('p').html('This is a sentence');
});

$('.square').click(function(){
    $('.square').css('background-color', 'blue')// separate each notation, since blue is what you are changing, separate by a comma from background color, to find what you need to change
});
$('.square').click(function(){
    $(this).css('background-color', 'purple')// this can separate the color of the circles, to change the color of the exact color.
});

$('#circle').hover(function() {
    $('p').text('You are hovering on the circle.');//hover can have more than one function
}, function() {
    $('p').text('You are not hovering on the circle.');
});
