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


})();