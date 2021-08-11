let previousNumber = undefined
let currentNumber = undefined
let operator = ""
let result = undefined
let strNumber = ""
let display = "0"

document.addEventListener('DOMContentLoaded', function() {

    // Access all number buttons
    let numbers = document.querySelectorAll(".button--number")

    // when a number is clicked, update strNumber and display with number value
    numbers.forEach((number) => {
        number.addEventListener("click", (event) => {
            console.log(event.target.value)
        })
    })
})