
var numsArray = [ 2, 4, 6, 8, 10, 12, 14];
var strArray = ["deadpool", "wolverine", "batman", "superman", "archangel"];
var mixArray = [1, 3, 5, 7, 9, "sabertooth", "domino", "venom", "joker"];
var votes ={
    upVotes: 50,
    downVotes: 34
};

// 1) Create a function named getFirstValue that takes an array containing only numbers and return the first element
function getsFirstValue(array){
    return array[0];
}
console.log(getsFirstValue(numsArray));
console.log(getsFirstValue(strArray));
console.log(getsFirstValue(mixArray));

// 2) Create a function named getVoteCount that takes an object as an argument. Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
function getVoteCount(obj){
    return obj.upVotes - obj.downVotes;
}
console.log(getVoteCount(votes));

// 3) Define a function named incrementItems that takes in an array, add 1 to every element in the array.
function incrementItems(array){
    var oneArray = [];
    array.forEach(function(item){
        oneArray.push(item + 1);
    })
    return oneArray;
}
console.log(incrementItems(numsArray));
console.log(incrementItems(strArray));
console.log(incrementItems(mixArray));

// 4) Create a function named parseArray that takes an array of integers and strings. Convert integers to strings and return the new array.
function parseArray(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++){
        newArray.push(array[i].toString());
    }
    return newArray;
}

// function parseArray(array){
// return array.join().split(',');
// }
//
// function parseArray(array){
// return array.map(String);
// }

console.log(mixArray);
console.log(parseArray(mixArray));

// 5) Create a function named newWord that takes a word and returns the new word without including the first character.
function newWord(word){
    return word.substring(1, word.length);     // return string.substr(1, word.length);
}

console.log(newWord("word"));
console.log(newWord("wolverine"));

// 6) Create a function named doubleChar that takes a string and returns a string in which each character is repeated once.
function doubleChar(string){
    var doubleStr = "";
    for (var i = 0; i < string.length; i++){
        doubleStr += string[i] + string[i];       // if attempting to do this, you can add str[i].toString
    }
    return doubleStr;
}

console.log(doubleChar("ethan"));
console.log(doubleChar("kathy"));

// 7) You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar.
var products = [{
    name: "games",
    cost: 10,
    sellPrice: 15,
    inventory: 100
}];

function totalProfit(arr){
    var profitMargin = arr[0].sellPrice - arr[0].cost;
    var potentialProfit = arr[0].inventory * profitMargin;
    return potentialProfit;
}

console.log(totalProfit(products));