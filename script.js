let previousNumber = undefined
let currentNumber = undefined
let operator = ""
let result = 0.0
let strNumber = ""
let display = "0"
let subDisplay = ""

//function to clear screen and all variables
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

let calculate = () => {
    if (operator == '+') {
        result = +parseFloat(previousNumber + currentNumber).toFixed(8) //fixes decimal places to 8 maximum
        display = result.toString()
        previousNumber = result
        currentNumber = ""
        operator=""
    } else if (operator == '-') {
        result = +parseFloat(previousNumber - currentNumber).toFixed(8)
        display = result.toString()
        previousNumber = result
        currentNumber = ""
        operator=""
    } else if (operator == '/') {
        result = +parseFloat(previousNumber / currentNumber).toFixed(8)
        display = result.toString()
        previousNumber = result
        currentNumber = ""
        operator=""
    } else {
        result = +parseFloat(previousNumber * currentNumber).toFixed(8)
        display = result.toString()
        previousNumber = result
        currentNumber = ""
        operator=""
    }
    check()
}

document.addEventListener('DOMContentLoaded', function() {

    // access all number buttons
    let numbers = document.querySelectorAll(".button--number")

    // when a number is clicked, update strNumber and display with number value
    numbers.forEach((number) => {
        number.addEventListener("click", (event) => {
            // check if equals was just pressed
            if (operator === "" && strNumber === "") {
                clear()
            }
            // clear display
            if (strNumber ==="") {
                display = ""
            }
            strNumber += event.target.value
            if (display.charAt(0) === "0") {
                display = event.target.value
            } else {
                display += event.target.value
            }
            subdisplay += event.target.value
            check()
            updateScreen()
        })
    })

    // access all operator buttons
    let operators = document.querySelectorAll(".button--operator")

    // when operator button clicked...
    operators.forEach((button) => {
        button.addEventListener("click", (event) => {
            // console.log(event.target.value)
            //normal case
            if (strNumber) {
                //if this is the first number entered
                if (previousNumber === undefined) {
                    previousNumber = parseFloat(strNumber)
                    strNumber = ""
                    display = `${previousNumber}`
                    operator = button.value
                    subdisplay += operator
                }
                //any subsequent numbers enetered
                else {
                    currentNumber = parseFloat(strNumber)
                    strNumber = ""
                    check()
                    calculate()
                    operator = button.value
                    subdisplay += operator
                }
            // if equals has just been pressed
            } else {
                operator = button.value
                subdisplay += operator
            }
            check()
            updateScreen()
        } )
    })

    //clear screen and all variables when AC clicked
    let ac = document.querySelector("#ac")
    ac.addEventListener("click", (event) => {
        clear()
    })

    //remove last character from displays and strNumber variables
    let del = document.querySelector("#del")
    del.addEventListener("click", (event) => {
        if (strNumber) {
            if (strNumber.length === 1) {
                strNumber = strNumber.slice(0, -1)
                display = "0"
                subdisplay = subdisplay.slice(0, -1)
            } else {
                strNumber = strNumber.slice(0, -1)
                display = strNumber
                subdisplay = subdisplay.slice(0, -1)
            }
        }
        updateScreen()
    })

    // add functionality to equals button
    let equals = document.querySelector(".button--equals")
    console.log(equals)
    equals.addEventListener("click", (event) => {
        // if a number has just been typed
        if (strNumber) {
            if (previousNumber===undefined) {
                previousNumber = parseFloat(strNumber)
                strNumber = ""
                display = `${previousNumber}`
            } else {
                currentNumber = parseFloat(strNumber)
                strNumber = ""
                check()
                calculate()
            }
            updateScreen()
        }
    })

    // night/day mode toggle
    let day = document.querySelector(".button--day-mode")
    day.addEventListener("click", (event) => {
        var container = document.querySelector(".container")
        let buttons = document.querySelectorAll(".button--number")
        let buttonsOther = document.querySelectorAll(".button--other")
        var night = document.querySelector("#night")
        var day = document.querySelector("#day")

        container.classList.add("light-mode")
        day.classList.add("light-mode--day")
        night.classList.add("light-mode--night")
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add("light-mode--buttons")
        }
        for (let i = 0; i < buttons.length; i++) {
            buttonsOther[i].classList.add("light-mode--buttons")
        }
        console.log(event);
    })

    let night = document.querySelector(".button--night-mode")
    night.addEventListener("click", (event) => {
        var container = document.querySelector(".container")
        let buttons = document.querySelectorAll(".button--number")
        let buttonsOther = document.querySelectorAll(".button--other")
        var night = document.querySelector("#night")
        var day = document.querySelector("#day")

        container.classList.remove("light-mode")
        day.classList.remove("light-mode--day")
        night.classList.remove("light-mode--night")
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("light-mode--buttons")
        }
        for (let i = 0; i < buttons.length; i++) {
            buttonsOther[i].classList.remove("light-mode--buttons")
        }
        console.log(event);
    })
})

