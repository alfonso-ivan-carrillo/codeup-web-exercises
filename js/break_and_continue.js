"use strict";

(function(){


    var userNumber = prompt("To play game, please pick an odd number between 1 and 50.");

    function oddBallGame(input){
        while (input % 2 === 0 || input > 50){
             input = prompt("That even or above 50, try again.");
        }

        console.log("Number to skip is: " + input);

        for (var i = 1; i <= 50; i++){
            if (i == input){
                console.log("Yikes " + input);
                continue;
            }
            if (i % 2 !== 0){
                console.log("Here is an odd number: " +i)
            }
        }
    }
oddBallGame(userNumber);






})();