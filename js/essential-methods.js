$(document).ready(function() {

    var heading = $('#heading').html();
    // alert(heading);

    var cardContent = $('.card').html();
    // alert(cardContent);

    // $('.card').html("Howdy from JavaScript");
    $('.card').html("<h2>javascript</h2><p>hello</p>");

    // alert($('#box').css('width')); //to get info need to input in css()

    $('#box').css("background", "cadetblue");
    $('#box').css("background", "orangered"). css('border-color', "darkslateblue"); //chaining method to select multiple elements to change
    $('#box').css({    // Json notation
        'background': "papayawhip",
        'border-color': "saddlebrown",
        'width': '150px'
    })

    // adding a class by jquery
    // notice no . before class highlighted class affects all <p> tags but is not retroactive, only
    // those created but not <p> tags (or elements targeted) created after
    // class can be chain-able
    $('p').addClass("highlighted");

    // removing a class
    // side note: order of operations, add the event after the creation of the element being affected

    // $('.highlighted').click(function(){
    //     $(this).removeClass("highlighted");
    // })

    $('p').click(function(){
        $(this).toggleClass("highlighted");
    })










})