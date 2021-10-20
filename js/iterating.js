(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["Bella", "Jack", "Lexi", "Buster"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("There are " + names.length + " names in the array.");
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (var i = 0; i < names.length; i++){
        console.log("My dog's name is " + names[i] + ".");
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name){
        console.log("My dog's name is " + name + "!");
    })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    // Walk-through by instructor
    // function first(arr) {
    // return arr[0];
    // }
    // console.log(first(name));
    function firstIndex(arr){
        for (var i = 0; i < arr.length; i++){
            console.log("The first item in the array is " + arr[0] + ".");
            break;
        }
    }
    firstIndex(names);

    // Walk-through by instructor
    // function second(arr){
    //     return arr[1];
    // }
    // console.log(second(name));
    function secondIndex(arr){
        for (var x = 0; x < arr.length; x++){
            console.log("The second item in the array is " + arr[1] + ".");
            break;
        }
    }
    secondIndex(names);


    // function last(arr){
    //     return arr[arr.length-1];
    // }
    // console.log(last(names));

    function lastIndex(arr) {
        arr.forEach(function(name,index){
            if (index === arr.length -1){
                console.log(name);
            }
        })
    }

    lastIndex(names);


})();
