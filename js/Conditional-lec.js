//Conditionals: code that runs when we meet certain requirements

//if statements, if/else statements, ternary expressions and switch

//if (condition) {
//      this code will run;
//}

//Consider this sentence: "When I run out of milk: I go to the store to get more.
//Condition: When I run out of milk
//Action: I go to the store get more milk

//Conditional logic can be used in functions.

function isItANumber(parameter) {
    if(typeof parameter === "number"){
        return "Hey. That's a number.";
    } else {
        return "Hey, you're not a number";
    }
}
console.log(isItANumber(72));
console.log(isItANumber("Joe"));

//IF/ELSE IF/ELSE = a chain of if/else statements to give a different result for different conditions

//if (condition1) {
//      run this code;
//} else if (condition2) {
//      since the first condition wasn't met, and the second was, i run this code
//} else {
//      since neither the first or second condition were met, i run this code
//}

function isThisThirtyFive(parameter){
    if (parameter > 35) {
        return "That number is greater than 35.";
    } else if (parameter < 35){
        return "that number is less than 35.";
    } else {
        return "that is 35.";
    }
}

console.log(isThisThirtyFive(34));
console.log(isThisThirtyFive(35));
console.log(isThisThirtyFive(36));

//Ternary Expression (Shorthand if/else)
//an expression to set a value based on boolean evaluation.

//var message = (booleanValue) ? "Operation was true." : "Operation was false.";


//switch statement
var sandwichMeat = prompt("what is your favorite sandwich meat").toLowerCase();

switch(sandwichMeat){
    case "olive loaf":
        alert("You have a bold palette.");
        break;
    case "brisket":
        alert("Congrats, that's the right choice.");
        break;
    default:
        alert("You can't always be right.");
        break;
}





