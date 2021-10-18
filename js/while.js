"use strict";
(function(){

    var x = 1;
    while (x < 65536){
         x = x * 2;

        console.log(x);

    }

// This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
    //Math.floor(Math.random() * 5) + 1;
    console.log("Today's daily sales goal is " + allCones + ".");

do {
    var conesSold = Math.floor(Math.random() * 5) + 1;
    allCones -= conesSold;
    console.log(conesSold + " cones sold.");
    console.log("Cones left to meet daily goal " + allCones + ".");
    if (conesSold > allCones){
        console.log("Can't sell you " + conesSold + " I only have "+ allCones + " available." );
        break;
    }
} while (allCones >= 0)


})();