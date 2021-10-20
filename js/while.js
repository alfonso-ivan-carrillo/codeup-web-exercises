"use strict";
(function(){

    //exercise #1
    function timesTwo(){
        var x = 1;
        while (x < 65536){
             // x = x * 2;
                x *= 2;
            console.log(x);
        }
    }
    timesTwo();

    //exercise #2
    // This is how you get a random number between 50 and 100
        var allCones = Math.floor(Math.random() * 50) + 50;
    // This expression will generate a random number between 1 and 5
        //Math.floor(Math.random() * 5) + 1;
        console.log("Today's daily sales goal is " + allCones + ".");

    do {
        var conesSold = Math.floor(Math.random() * 5) + 1;

        // console.log(conesSold + " cones sold.");
        // console.log("Cones left to meet daily goal " + allCones + ".");
        if (conesSold <= allCones){
            allCones -= conesSold;
            console.log(conesSold + " cones sold." + " I have "+ allCones + " available." );
        } else {
            console.log("Sorry, I can't sell you " + conesSold + " we only have " + allCones + " available.");
        }
    } while (allCones > 0)


})();