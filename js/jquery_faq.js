$(document).ready(function(){


    // $("dt").click(function(){
    //     $(this).css("background", "#ef0");
    // })

    $('dt').click(function (){
        $(this).toggleClass('highlighted');
    });

    $('h1').click(function (){
        $('dd').toggleClass('invisible');
    });

    $('#yellowBg').click(function(){
        $('ul').each(function(){
                $(this).children('li').last().css('background', 'yellow');
        })
    })
    $('h3').click(function(){
        $('ul').children().css('font-weight', 'bold');
    })

    $('li').click(function(){
        $('ul').each(function(){
           $(this).children('li').first().css('color', 'blue');
        })
    })

    //div elements
    var divOne = $('#divOne');
    var divTwo = $('#divTwo');
    var divThree = $('#divThree');

    // divOne.css('content', 'url(img/pickleRick.png)');
    // divThree.css('content', 'url(img/rick-and-morty.png)');
    // divTwo.css('content', 'url(img/portal-rickandmorty.png)');

    $('#btnOne').click(function(){
        $('div').first().removeClass('one');
        $('div').first().next().removeClass('two');
        $('div').first().addClass('two');
        $('div').first().next().addClass('one');
    })

    $('#btnThree').click(function(){
        $('div').last().removeClass('three');
        $('div').first().next().removeClass('two');
        $('div').last().addClass('two');
        $('div').first().next().addClass('three');
    })

    // first() and last()

    // chooses first instance of element selected on page
    // $('dt').first().css("color", "hotpink");

    // chooses last instance of element selected on page -- can chain changes
    // $('dt').last().css('color', 'gold').html("2017 inductee");

    // parent() and children()

    // select parent element of dt - one level out of element
    // below selects the dl since it is the parent of the dt element
    // $('dt').parent().css('border', "pink solid 5px");

    // select child element of dl so it affects the dt and dd elements
    // $('dl').children().css('border', '1px solid goldenrod');

    // next()
    // chooses for dt and then goes to next dl element which is the dd and turns the text red
    // $('dt').first().next().css('color', 'red');

    // .each(function(index, element){ })
    //  loops through the children of the dl and makes every odd one purple
    // $('dl').children().each(function(index){
    //     if (index % 2 !== 1){
    //         $(this).css("color", "purple");
    //     }
    // })










});