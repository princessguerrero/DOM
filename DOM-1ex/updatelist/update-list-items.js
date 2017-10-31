var input = window.prompt("Please enter an id.");
var input2 = window.prompt("Please enter text.");
// document.getElementById(input).innerHTML = input2;

if(document.getElementById(input) === null) {
    document.getElementById("one").innerHTML = input2
} else {
    document.getElementById(input).innerHTML = input2;
}
