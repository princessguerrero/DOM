var input = window.prompt("Please enter an id.");
// user enters one
var input2 = window.prompt("Please enter another id.");
// user enters two

var hold = document.getElementById(input).innerHTML;
// apple
document.getElementById(input).innerHTML = document.getElementById(input2).innerHTML;
// apple = strawberry
document.getElementById(input2).innerHTML = hold;
// strawberry = apple