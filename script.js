const textElement = document.getElementById("myDiv");
const changeTextButton = document.getElementById("changeTextBtn");

changeTextButton.addEventListener("click", function () {
    textElement.textContent = "Der Text wurde geändert!";
});