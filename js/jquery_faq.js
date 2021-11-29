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










})