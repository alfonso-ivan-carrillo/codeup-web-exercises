(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     */
    // planetsArray.unshift("<br>");
    var breakTag = planetsArray.join("<br>");
    // document.write("<br><br" + breakTag);
    console.log(breakTag);

     /**
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
     var list = planetsString.split("|");
     console.log(list);

     var unorderedList = "<ul><li>" + list.join("</li><li>") + "</li></ul>";
     // document.write("<ul></ul>" + unorderedList);
     console.log(unorderedList);


     //extra practice
    var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
    console.log(fruits);
    console.log(fruits.length);
    console.log(fruits.indexOf("apple"));
    console.log(fruits[2]);

    function indexOfOne(arr, item){
        console.log(arr.indexOf(item));
    }
    indexOfOne(fruits, "guava");


    function  allIndexesOf( arr, item){

    }
    allIndexesOf(fruits, "orange");

})();
