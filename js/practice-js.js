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

function allIndexesOf(array, item){
    fruits.forEach(function(fruit, index){
        if (item === fruit){
        console.log([index]);
        }
    })
}
allIndexesOf(fruits, "apple");




})();