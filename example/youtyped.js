function changeHeader() {
    let headText = document.getElementById("youTyped");
    let newText = window.prompt("enter text!");
    headText.innerHTML = newText;
}

setInterval(changeHeader, 500)