"use strict";

var previousNumber = undefined;
var currentNumber = undefined;
var operator = "";
var result = 0.0;
var strNumber = "";
var display = "0";
var subDisplay = ""; //function to clear screen and all variables

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

var calculate = function calculate() {
  if (operator == '+') {
    result = +parseFloat(previousNumber + currentNumber).toFixed(8); //fixes decimal places to 8 maximum

    display = result.toString();
    previousNumber = result;
    currentNumber = "";
    operator = "";
  } else if (operator == '-') {
    result = +parseFloat(previousNumber - currentNumber).toFixed(8);
    display = result.toString();
    previousNumber = result;
    currentNumber = "";
    operator = "";
  } else if (operator == '/') {
    result = +parseFloat(previousNumber / currentNumber).toFixed(8);
    display = result.toString();
    previousNumber = result;
    currentNumber = "";
    operator = "";
  } else {
    result = +parseFloat(previousNumber * currentNumber).toFixed(8);
    display = result.toString();
    previousNumber = result;
    currentNumber = "";
    operator = "";
  }

  check();
};

document.addEventListener('DOMContentLoaded', function () {
  // access all number buttons
  var numbers = document.querySelectorAll(".button--number"); // when a number is clicked, update strNumber and display with number value

  numbers.forEach(function (number) {
    number.addEventListener("click", function (event) {
      // check if equals was just pressed
      if (operator === "" && strNumber === "") {
        clear();
      } // clear display


      if (strNumber === "") {
        display = "";
      }

      strNumber += event.target.value;

      if (display.charAt(0) === "0") {
        display = event.target.value;
      } else {
        display += event.target.value;
      }

      subdisplay += event.target.value;
      check();
      updateScreen();
    });
  }); // access all operator buttons

  var operators = document.querySelectorAll(".button--operator"); // when operator button clicked...

  operators.forEach(function (button) {
    button.addEventListener("click", function (event) {
      // console.log(event.target.value)
      //normal case
      if (strNumber) {
        //if this is the first number entered
        if (previousNumber === undefined) {
          previousNumber = parseFloat(strNumber);
          strNumber = "";
          display = "".concat(previousNumber);
          operator = event.target.value;
          subdisplay += operator;
        } //any subsequent numbers enetered
        else {
            currentNumber = parseFloat(strNumber);
            strNumber = "";
            check();
            calculate();
            operator = event.target.value;
            subdisplay += operator;
          } // if equals has just been pressed

      } else {
        operator = event.target.value;
        subdisplay += operator;
      }

      check();
      updateScreen();
    });
  }); //clear screen and all variables when AC clicked

  var ac = document.querySelector("#ac");
  ac.addEventListener("click", function (event) {
    clear();
  }); //remove last character from displays and strNumber variables

  var del = document.querySelector("#del");
  del.addEventListener("click", function (event) {
    if (strNumber) {
      if (strNumber.length === 1) {
        strNumber = strNumber.slice(0, -1);
        display = "0";
        subdisplay = subdisplay.slice(0, -1);
      } else {
        strNumber = strNumber.slice(0, -1);
        display = strNumber;
        subdisplay = subdisplay.slice(0, -1);
      }
    }

    updateScreen();
  }); // add functionality to equals button

  var equals = document.querySelector(".button--equals");
  console.log(equals);
  equals.addEventListener("click", function (event) {
    // if a number has just been typed
    if (strNumber) {
      if (previousNumber === undefined) {
        previousNumber = parseFloat(strNumber);
        strNumber = "";
        display = "".concat(previousNumber);
      } else {
        currentNumber = parseFloat(strNumber);
        strNumber = "";
        check();
        calculate();
      }

      updateScreen();
    }
  });
});