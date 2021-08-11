"use strict";

var previousNumber = undefined;
var currentNumber = undefined;
var operator = "";
var result = undefined;
var strNumber = "";
var display = "0";
document.addEventListener('DOMContentLoaded', function () {
  // Access all number buttons
  var numbers = document.querySelectorAll(".button--number"); // when a number is clicked, update strNumber and display with number value

  numbers.forEach(function (number) {
    number.addEventListener("click", function (event) {
      console.log(event.target.value);
    });
  });
});