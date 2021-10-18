"use strict";

(function(){



function showMultiplicationTable(num){
    for( var i = 1; i <= 10; i++){
        console.log(num + " x " + i + " = " + num * i);
    }
}

showMultiplicationTable(7);



for (var i = 1; i <= 10; i++){
    var randomNum = Math.floor(Math.random() * 200) + 1;
    if (randomNum % 2 === 0){
        console.log(randomNum + " is odd.");
    } else {
        console.log(randomNum + " is even.");
    }
}

function numberPyramid(rows){
    var output = "";
    for (var i = 1; i <= rows; i++){
        for ( var j = 1; j <= i; j++) {
            output += i + "";
        }
        console.log(output);
        output = "";
    }
}

numberPyramid(9);


for (var x = 100; x >= 5; x-=5){
    console.log(x);
}




})();