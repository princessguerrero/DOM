var paragraphArr = document.querySelectorAll("p")

for (var i = 0; i < paragraphArr.length; i++) {
    if (i % 2 === 0) {
        paragraphArr[i].classList.add("bgYellow")
    } else {
        paragraphArr[i].classList.add("bgGreen")
    }
}