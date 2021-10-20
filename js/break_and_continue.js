"use strict";

(function(){


    var userNumber = parseInt(prompt("To play game, please pick an odd number between 1 and 50."));

    function oddBallGame(input){
        while (input % 2 === 0 || input > 50 || input < 0 || isNaN(input)){
             input = prompt("Invalid entry, please try again.");
        }

        console.log("Number to skip is: " + input);

        for (var i = 1; i <= 50; i++){
            if (i === input){
                console.log("Yikes! Skipping this number: " + input);
                continue;
            }
            if (i % 2 !== 0){
                console.log("Here is an odd number: " +i)
            }
        }
    }
    oddBallGame(userNumber);


//examples from lesson
    for (var i = 1; i < 10; i++){

        if(i % 2 !== 0){
            continue;
        }
        console.log("test");
        console.log(i);
    }



})();