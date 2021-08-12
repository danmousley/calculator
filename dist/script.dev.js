"use strict";

var previousNumber = undefined;
var currentNumber = undefined;
var operator = "";
var result = 0.0;
var strNumber = "";
var display = "0";
var subDisplay = "";

var clear = function clear() {
  previousNumber = undefined;
  currentNumber = undefined;
  operator = "";
  result = 0.0;
  strNumber = "";
  display = "0";
  subdisplay = "";
  updateScreen();
};

var check = function check() {
  console.log("Previous: ".concat(previousNumber, ",\n        Current: ").concat(currentNumber, ",\n        Op: ").concat(operator, ",\n        re: ").concat(result, ",\n        str: ").concat(strNumber, ",\n        sub: ").concat(subdisplay, ",\n        dis: ").concat(display));
};

var updateScreen = function updateScreen() {
  document.querySelector(".display__total").innerHTML = display;
  document.querySelector(".display__calc").innerHTML = subdisplay;
};

document.addEventListener('DOMContentLoaded', function () {
  // Access all number buttons
  var numbers = document.querySelectorAll(".button--number"); // when a number is clicked, update strNumber and display with number value

  numbers.forEach(function (number) {
    number.addEventListener("click", function (event) {
      // check if equals was just pressed
      if (operator === "" && strNumber === "") {
        clear();
      }

      strNumber += event.target.value;

      if (display.charAt(0) === "0") {
        display = event.target.value;
      } else {
        display += event.target.value;
      }

      subdisplay += event.target.value; // updateScreen()

      check();
      updateScreen();
    });
  });
  var ac = document.querySelector("#ac");
  var del = document.querySelectorAll("#del");
  ac.addEventListener("click", function (event) {
    clear();
  });
});