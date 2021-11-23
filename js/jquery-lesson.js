"use strict"

$(document).ready(function(){
    // alert("The document is ready!");

    // var title = $('#albumDiv').html();
// alert(title);
//alert($('#albumDiv').html());
//
// var list = $('.list').css("border", "1px red solid");
//
//     var li = $("li").css("font-size", "20px");
//
//     var highLights = $("h1, p, li").css("background-color", "yellow");
//     console.log(highLights);
//
//     var headerOne = $("h1").html()
//     alert(headerOne);
$('#pjHeader').click(function(){
    $(this).css('background-color', 'blue');
});

$('p').dblclick(function(e){
    $(this).css('font-size', '18px');
});

$('li').hover(
    function(){
        $(this).css('background-color', 'red');
    }, function(){
        $(this).css('background-color', 'white');
    }
);








});


