"use strict";

(function(True){

    // typeof operator will return the type that is being passed into
    console.log(typeof 55);  //returns NUMBER
    console.log(typeof "55");  // returns STRING
    console.log(typeof true);  // returns BOOLEAN
    console.log(typeof "what is this"); //  returns STRING
    console.log("*******************");

    var testWord = "Alfonso.Ivan.Carrillo.Jr";
    console.log(testWord.length);  // returns 24
    console.log(testWord.indexOf("v"));  // returns 9
    console.log(testWord.replace("Ivan", "Ichi")); // copy of string - replaced ivan with ichi
    console.log(testWord);  // returns Alfonso.Ivan.Carrillo.Jr
    console.log(testWord.substring(8, 12)); //  returns Ivan
    console.log(testWord.toUpperCase()); // returns with all upper case
    console.log(testWord.toLowerCase());  //  returns with all lower case
    console.log("*********************")

    console.log(parseFloat("123a2b3c")); // only returns 123
    console.log(parseFloat("abc123"));  // returns NaN
    console.log(parseInt("123a2b3c"));  // only returns 123
    console.log(parseInt("abc123"))     // returns NaN
    console.log("**********************")


    console.log(typeof 55 === typeof 50 + 5); //  === compares the two arguments returns FALSE
    console.log(typeof 55 === typeof(50 + 5)); // returns TRUE (compares 55 to 55)?
    console.log(typeof true === typeof false); // returns TRUE (BOOLEAN TO BOOLEAN)
    console.log("*******************");

    var testNum = 210;
    console.log(testNum.toString());  //  returns 210
    console.log(typeof testNum);      //  returns NUMBER
    console.log(typeof testNum.toString());     // returns STRING
    console.log("*******************");

    //confirm("message"); // returns TRUE if user clicks OK or FALSE if they click cancel
    //prompt("message");  // returns STRING value keyed by user or NULL if cancel button clicked

    //anonymous function - function stored into a variable

    var i = 0;
    while (i <= 10){
        console.log("Zato");
        i++;
    }

    do {
        console.log("Ichi");
        i++;
    } while (i <= testWord.length)

    for (var a = 0; a <= testWord.length; a++){
        console.log("ZatoIchi");
    }

    console.log("****************");
    var shapes = ["square", "triangle", "rectangle", "circle"];
    console.log("Number of items in shapes array is: "+ shapes.length);
    console.log(shapes[2]);  // returns rectangle
    console.log(shapes[1]);  // returns triangle

    for(var i =0; i <= shapes.length - 1; i++){
        console.log(shapes[i]);
    }

    console.log("******************")

    shapes.forEach(function(shape){
        console.log(shape);
    })

    console.log("****************");
    var pearlJam = ["alive", "evenflow", "black"];
    console.log(pearlJam);
    pearlJam.unshift("porch");
    console.log(pearlJam);
    pearlJam.push("animal");
    console.log(pearlJam);
    pearlJam.push("release", "wishlist", "daughter", "corduroy")
    console.log(pearlJam);
    // var pjPlaylist = pearlJam.shift();
    // console.log(pjPlaylist);
    // console.log(pearlJam);
    // pjPlaylist = pearlJam.pop();
    // console.log(pjPlaylist);
    // console.log(pearlJam);

    console.log(pearlJam.indexOf("evenflow"));

    var pjSlice = pearlJam.slice(3,6);
    console.log(pjSlice);
    pjSlice = pearlJam.slice(8);
    console.log(pjSlice);

    console.log(pearlJam.reverse());
    console.log(pearlJam.sort());

    console.log("****************");
    var ichi = "ZatoIchSamurai,SamuraiJack,SamuraiChamploo"
    ichi = ichi.split(",");
    console.log(ichi);
    ichi = ichi.join(",");
    console.log(ichi);


    console.log("****************");

    var pearlJamAlbums = {
        title: "ten",
        releaseDate: 1991,
        numberOfSongs: 10,
        favoriteSongs: {

        }

    }






    console.log("****************");
    function isNotANumber(input){
        return isNaN(input);
    }

    console.log(isNotANumber(5));  // returns FALSE
    console.log(isNotANumber("5"));  // returns FALSE
    console.log(isNotANumber(parseFloat("the5")));   // returns TRUE
    console.log(isNotANumber(true));  // returns FALSE
    console.log("*******************");

    function turnToANumber(input){
        return Number(input);
    }

    var name = turnToANumber("nonanumber");
    var nonnum = turnToANumber("555");
    console.log(typeof name);   // returns NUMBER ??why??
    console.log(turnToANumber("nonanumer"));  // returns NaN
    console.log(typeof nonnum);     // returns NUMBER
    console.log(turnToANumber("555"));  // returns 555
    console.log(turnToANumber("98898"));  // returns 98898
    console.log(turnToANumber("deadppool"));  //returns NaN
    console.log("********************");

function add(num1, num2){
        if (!isNaN(parseFloat(num1)) === true && (!isNaN(parseFloat(num2)) === true)){
        return (parseFloat(num1) + parseFloat(num2));
        } else {
            return false;
        }
}

console.log(add(4, 5));  // returns 9
console.log(add(5, 6));  // returns 11
console.log(add("5", "5the"));  // returns 10
console.log(add("5", 10));  //  returns 15
console.log(add("do", "not"));  // returns FALSE
console.log(add(null, 4));  // returns FALSE
console.log("*******************")

function addTwo(a, b){
    return (a + b);
}
console.log(addTwo(5, 20));  // returns 25
console.log(addTwo(55, 45));  // returns 100
console.log(addTwo("10", "5"));  // returns 105 - acts like a STRING
console.log("Dead", "Pool");  // returns Dead Pool



//Functions Drill List - Extra Exercises
    function isOdd(number){
        return number % 2 === 1;
        // if(number % 2 === 1){   *above is the simplified of the if statement I wrote
        //     return true;        *for a return of true or false, unless was going to
        // } else {                *return a string or console.log, then would need if stmt
        //     return false;
        // }
    }
    console.log(isOdd(3));  // returns TRUE
    console.log(isOdd(10)); // returns FALSE

    function isEven(number){
        return number % 2 === 0;
    }
    console.log(isEven(12));  // returns TRUE
    console.log(isEven(9));   // returns FALSE

    function identity(input){
        return input;
    }

    var test1 = identity(5);
    console.log(typeof test1);
    var test = identity("You");
    console.log(typeof test);
    var test2 = identity(true);
    console.log(typeof test2);


//Array - Extra Exercises

var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
console.log(fruits[2]);
console.log(fruits.indexOf("apple"));
console.log(fruits.lastIndexOf("apple"));

// var sortedArray = [];
// var element = "apple";
// var letterHolder = fruits.indexOf(element);
//
//
// while (letterHolder != -1){
//     sortedArray.push(letterHolder);
//     letterHolder = fruits.indexOf(element, letterHolder + 1);
// }
// console.log(sortedArray);

function allIndexesOf(arr, input){
    var sortedArray = [];
    var element = input;
    var letterHolder = arr.indexOf(element);
    // console.log(letterHolder);
    while (letterHolder != -1){
        sortedArray.push(letterHolder);
        letterHolder = arr.indexOf(element, letterHolder + 1);
    }
    return sortedArray;
}


// function allIndexesOf (arr, element){
//     var indexResults = [];
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] === element){
//              indexResults.push((arr.indexOf(element)));
//         }
//     }
//     return indexResults;
// }

    // function allIndexesOf (arr, element){
    //     var indexResults = [];
    //     arr.forEach(function(item){
    //         if(element === item){
    //             indexResults.push(arr.indexOf(item));
    //             console.log(indexResults);
    //         }
    //     })
    //     return indexResults;
    // }

    console.log(allIndexesOf(fruits, "apple"));
    console.log(allIndexesOf(fruits, "guava"));
    console.log(allIndexesOf(fruits, "pineapple"));


    var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
    console.log(bugs);

function removeAll(arr, item) {
    for (var i = arr.length; i--;) {
        console.log(bugs);
        if (arr[i] === item) {
            arr.splice(i, 1);
        }
    }
    return arr;
}


     console.log(removeAll(bugs, "ant"));

//Make a function called randomIntBetween(min, max) that returns a random number between the min and the max.
    function randomInBetween (min, max){
        var rand = Math.random();
        console.log(rand);
        return rand * (max - min) + min;
    }

    console.log(randomInBetween(10, 15));

    //Make a function called coinFlip() that returns either 0 or 1, randomly

    function coinFlip(){
        var input = Math.random();
        if (input >= .5){
            return Math.ceil(input);
        } else {
            return Math.floor(input);
        }
    }

    console.log(coinFlip());

// Exercise 1. Write a function called makeCar that takes in two strings, make and model, and returns an object with those properties
// Example: makeCar("VW", "beetle") returns the object {"make": "VW", "model", "beetle"}
    var cars = [{
        make: "ford",
        model: "F-150"
    }];
    function makeCar(make, model){
           var car  = [{
            make:  make,
            model: model
        }];
        cars.push(car);
        return cars;
}

    console.log(makeCar("toyota", "tacoma"));
    console.log(makeCar("chevy", "blazer"));
    console.log(makeCar("bmw", "321"));
    console.log(cars);








})();