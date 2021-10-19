"use strict";

(function(){


//exercise #1
function showMultiplicationTable(num){
    for( var i = 1; i <= 10; i++){
        console.log(num + " x " + i + " = " + num * i);
    }
}

showMultiplicationTable(7);

//exercise #2
function oddEven(){
    for (var i = 1; i <= 10; i++){
        var randomNum = Math.floor(Math.random() * 180) + 20;
        if (randomNum % 2 === 0){
            console.log(randomNum + " is even.");
    } else {
            console.log(randomNum + " is odd.");
            }
    }
}
oddEven();


//exercise #3
function numberPyramid(rows){
    for (var i = 1; i <= rows; i++){
        var output = "";
        for ( var j = 1; j <= i; j++) {
            output += i + "";
        }
        console.log(output);
    }
}

numberPyramid(9);

//exercise #4
function byFives(){
    for (var x = 100; x >= 5; x-=5){
        console.log(x);
    }
}
byFives();


})();