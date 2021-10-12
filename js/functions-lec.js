"use strict"
//a function is a block of reusable code that preforms a specific task, functions
//typically take in an input and produces an output.

//functions we have used so far:
// - prompt();
// - alert();
// - Numbers(); **constructor
// - parseInt();
// - parseFloat();
// - .toFixed();
// - .toUpperCase();

//when executing a function, we call the name of the function,following any
//input inside the parenthesis know as arguments.

//prompt("Functions!"); //returns a string.

//functions structure
//--------------------
// function todaysDate(parameters) {
//         //here we do something
// }

function todaysDate(greeting){
    return greeting + Date();
}

//execute function or call the function

var date = todaysDate("Today's date is: ");
console.log(date);

function echo(phrase) {
    return phrase + " " + phrase;
}

console.log(echo("Hello!"));
console.log(echo(echo("Hello!")));

//Anonymous function - a function stored in a variable

var  sayBye = function (name){
    return console.log("Goodbye " + name);
}

sayBye("Logan");

//Example Function:
//Create a function that takes in two number parameters to find
//the hypotenuse angle.
//parameters are the placeholders stated in the function definition
function findHypotenuse(a, b){
    var result;
    result = Math.sqrt((a * a) + (b * b));
    return result;
}
// have a triangle with the sides of 4 and 5
//execute function to find they hypotenuse

//arguments are the values that are put into the function when executed
console.log(findHypotenuse(4, 5));

function printFour(){
    return "four";
}
console.log(printFour());

//scope: global vs. local variables
//global variable is a variable defined anywhere outside of a function body, can be accessed
//by any function or method
//local variable is defined within a function body, only accessed/available w/in the function


//Immediately Invoked Function Expression (IIFE)
//allows you to keep variables isolated


// // define a function and immediately invoke (i.e. call) it
// (function () {
//     var iffeVar = "I'm local to the IIFE.";
// })();
//
// alert(iffeVar); // undefined

(function () {
    var ifVar = "I'm a local to the IIFE";
})();