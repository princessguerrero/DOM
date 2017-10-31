var input = window.prompt("Please enter a number.")
var inputNum = Number(input)

if (inputNum % 2 === 0) {
    window.alert("that number is even.")
} else if (inputNum % 2 === 1) {
    window.alert("that number is odd.")
} else {
    window.alert("that is not a number.")
}