"use strict";

//10-13-2021 Conditionals
(function(){

    function sevenUp(){
        console.log(7);
        return 7;
    }
    sevenUp();

    if (false){
        console.log("why?");
    } else {
        console.log("why not?");
    }


    var hadBreakfast = Boolean(Math.round(Math.random()));
    //var hadBreakfastMessage = (hadBreakfast) ? alert("Sure did, its called having a Monster.") : alert("Who has time for breakfast!");
    var hadBreakfastMessage = (hadBreakfast) ? "Sure did, its called having a Monster" : "Who has time for breakfast";

    console.log(hadBreakfast);
    console.log(hadBreakfastMessage);

    function typeCheck(input) {
        if (typeof input === "string"){
            return "Haha, its a string of a string."
        } else {
            return typeof input;
        }
    }

    console.log(typeCheck(''));
    console.log(typeCheck(isNaN()));
    console.log(typeCheck(!false * 3));
    console.log(typeCheck(4 + '4'));
    console.log(!false * 3);  //!false is coercion into a 1 so 1 * 3 = 3


    //10/19/2021 FIZZ BUZZ

    function fizzBuzz(){
        for (var i = 1; i < 100; i++){
            if ( i % 3 === 0 && i % 5 === 0) {
                console.log("FizzBuzz");
            } else if ( i % 3 === 0){
                console.log("Fizz");
            } else if (i % 5 === 0){
                console.log("Buzz");
            } else {
                console.log(i);
            }

        }
    }

    fizzBuzz();

    var names = ["Bella", "Jack", "Lexi", "Buster"];

    function secondToLast(arr){  // returns second to last item in arry
        return arr[arr.length -2];
    }
    console.log(secondToLast(names));

    //Morning exercises for 10/21/2021

    function moveToEnd(array){
        var loneElement = array.shift();
        array.push(loneElement);
        return array;
    }
    console.log(moveToEnd(names));

    // morning exercise for 10/25/2021

    var tangela = {
        name: "tangela",
        description: "Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon’s true appearance remains a mystery.",
        height: {
            feet: 3,
            inches: 3
        },
        weight: {
            pounds: 77,
            ounces: 2
        },
        gender: "uni-sex",
        category: "vine",
        type:   "grass",
        abilities: {
            chlorophyll: "speed boost in sunlight",
            leafGuard: "prevents status condition in harsh sunlight"
        },
        weakness: {
            weakness1: "fire",
            weakness2: "bug",
            weakness3: "poison",
            weakness4: "ice",
            weakness5: "flying"
        }
    }

    // morning exercise for 10/26/2021
    var wrestlers = [
        {
            name: "Bret Hart",
            nationality: "Canadian"
        }, {
            name: "Shawn Michaels",
            nationality: "American"
        }, {
            name: "Christian Cage",
            nationality: "Canadian"
        }, {
            name: "Keiji Mutoh",
            nationality: "Japanese"
        }, {
            name: "Eddy Guerrero",
            nationality: "American"
        }, {
            name: "Owen Hart",
            nationality: "Canadian"
        }
    ];

    function onTheMat(arr){
        var canWrestlers = [];
        arr.forEach(function(wrestler){
            if (wrestler.nationality === "Canadian"){
                canWrestlers.push(wrestler);
                //console.log("Not all things from Canada are bad, " + wrestler.name + " was " + wrestler.nationality + ".");
            }
        });
        return canWrestlers;
    }

    console.log(onTheMat(wrestlers));

    // exercise for 10/27/2021

    var circle = {
        radius: 36,
    }

    function getArea(radius){
        var area = Math.round(Math.PI * Math.pow(radius,2));
        return area;
    }
console.log(getArea(circle.radius));

    // exercise for 11/03/2021

    var products = [
        {
            name: 'Playstation 5',
            price: 599.99
        }, {
            name: 'Logitech Wireless Mouse',
            price: 23.99
        }, {
            name: 'Macbook Pro',
            price: 1099.99
        }, {
            name: 'GoPro HERO10',
            price: 399.99
        }, {
            name: '12" & 6" Metal Ruler Set',
            price: 5.99
        }]

    function sortByName(arr, element){
       var name1 = arr.name.toLowerCase();      // the sort() method sorts the its elements
       var name2 = element.name.toLowerCase();  // according to the values returned by the
       if (name1 > name2){                      // function. the property names are changed
           return 1;                            // to lower case for comparison, if comparing
       } else if (name1 < name2){               // the names results in a 1, the order is changed,
           return -1;                           // if the comparison results in a -1 or 0, the
       } else {                                 // order remains the same
           return 0;
       }
    }

    console.log(products.sort(sortByName));


})();