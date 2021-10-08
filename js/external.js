"use strict";

console.log("Hello from External JavaScript!");

alert("Welcome to my website!");

var favoriteColor = prompt("What is your favorite color?");

alert("Wow, " + favoriteColor + " is my favorite color too!");

var rentalPricePerDay = 3;
var littleMermaid = prompt("How many days did you rent the Little Mermaid Movie?");
var brotherBear = prompt("How many days did you rent the Brother Bear movie?");
var hercules = prompt("How mandy days did you rent the Hercules movie?");
var totalPrice = littleMermaid * rentalPricePerDay + brotherBear * rentalPricePerDay + hercules * rentalPricePerDay;
alert("Your total rental cost was $" + new Intl.NumberFormat().format(totalPrice) + ".");

var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;
var googleHours = prompt("How many hours did you work for Google this week?");
var amazonHours = prompt("How many hours did you work for Amazon this week?");
var facebookHours = prompt("How many hours did you work for FaceBook this week?");
var payCheck = googlePay * googleHours + amazonPay * amazonHours + facebookPay * facebookHours;
alert("Your paycheck this week will be $" + new Intl.NumberFormat().format(payCheck) + ".");

// //function getRandomInt(max) {
// //    return Math.floor(Math.random() * max);
// //}
// //var classFull = getRandomInt(10);

alert("The coding class you selected has students slots available. The class is every Tuesday and Thursday at 1:00pm to 3:00pm " +
    "and must not conflict with your other classes.");
var classRegistration = prompt("Would like to enroll into the class? (Yes or No)");
if (classRegistration == "yes") {
    alert("You are now registered, welcome to your future.");
} else {
    alert("Drop the other classes, coding is much better.");
}


// var premiumMember = prompt("Are you a Premium Member? (Yes/No)");
// var productCount = prompt("Are you purchasing 2 or more items? (Yes/No)");
// var couponValid = prompt("Is the coupon valid? (Yes/No)");
alert("You may qualify for a discount offer!");
var premiumMember = confirm("Are you a Premium Member?");
var productCount = confirm("Are you purchasing 2 or more items?");
var couponValid = confirm("Is this coupon valid?");

if ((premiumMember == true || productCount == true) && couponValid == true){
    alert("Congrats! You qualify for a discount.");
} else {
    alert("Sorry, better look next time.");
}
