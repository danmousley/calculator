let previousNumber = undefined
let currentNumber = undefined
let operator = ""
let result = 0.0
let strNumber = ""
let display = "0"
let subDisplay = ""

let clear = () => {
    previousNumber = undefined
    currentNumber = undefined
    operator = ""
    result = 0.0
    strNumber = ""
    display = "0"
    subdisplay = ""
    updateScreen()
}

let check = () => {
    console.log(
        `Previous: ${previousNumber},
        Current: ${currentNumber},
        Op: ${operator},
        re: ${result},
        str: ${strNumber},
        sub: ${subdisplay},
        dis: ${display}`)
    }

let updateScreen = () => {
    document.querySelector(".display__total").innerHTML = display
    document.querySelector(".display__calc").innerHTML = subdisplay
}

document.addEventListener('DOMContentLoaded', function() {

    // Access all number buttons
    let numbers = document.querySelectorAll(".button--number")

    // when a number is clicked, update strNumber and display with number value
    numbers.forEach((number) => {
        number.addEventListener("click", (event) => {
            // check if equals was just pressed
            if (operator === "" && strNumber === "") {
                clear()
            }
            strNumber += event.target.value
            if (display.charAt(0) === "0") {
                display = event.target.value
            } else {
                display += event.target.value
            }
            subdisplay += event.target.value
            // updateScreen()
            check()
            updateScreen()
        })
    })

    let ac = document.querySelector("#ac")
    let del = document.querySelectorAll("#del")
    
    ac.addEventListener("click", (event) => {
        clear()
    })
})

